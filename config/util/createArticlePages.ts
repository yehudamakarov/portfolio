import { PageNodesQuery } from "../../gatsby-graphql"
import { slugify } from "./slugify"
import { getAfterLastSlash } from "../../src/utils/getCurrentPageFromLocationPathname"
import { getPartsAfterRoot } from "../../src/templates/MyBreadcrumbs"

type edgesType = PageNodesQuery["allMarkdownRemark"]["edges"]
type edgeType = PageNodesQuery["allMarkdownRemark"]["edges"][number]

export type MarkdownPageContext = {
  id: PageNodesQuery["allMarkdownRemark"]["edges"][number]["node"]["id"];
  editInGithubLink: string,
  frontmatter: PageNodesQuery["allMarkdownRemark"]["edges"][number]["node"]["frontmatter"],
  excerpt: PageNodesQuery["allMarkdownRemark"]["edges"][number]["node"]["excerpt"]
}

async function getPageData(graphql) {
  // parent.dir

  const result: { data: PageNodesQuery } = await graphql(`
    query PageNodes {
      allMarkdownRemark {
        edges {
          node {
            id
            htmlAst
            excerpt
            timeToRead
            frontmatter {
              headline
              tags
              date
              title
              featuredImage {
                name
                childImageSharp {
                  gatsbyImageData(width: 580)
                }
              }
            }
            parent {
              ... on File {
                dir
                absolutePath
              }
            }
          }
        }
      }
      site(siteMetadata: {}) {
        siteMetadata {
          repository
        }
      }
    }
  `)

  return result.data
}

const getProjectsAndArticles = (pageData: PageNodesQuery) => {
  const initialValue: { projects: edgesType, articles: edgesType } = { projects: [], articles: [] }
  return pageData.allMarkdownRemark.edges.reduce((groups, edge: edgeType) => {
    if (edge.node.parent.dir.includes("src/articles")) {
      groups.articles.push(edge)
    }
    if (edge.node.parent.dir.includes("src/projects")) {
      groups.projects.push(edge)
    }
    return groups
  }, initialValue)
}

const getProjectPathForEditInGithub = absolutePath => absolutePath.substring(absolutePath.indexOf("/src"))

export const getSluggedPath = (path: string) =>
  path
    // removes extension like .md
    .replace(/\.[^/.]+$/, "")
    .split("/")
    .map(slugify)
    .join("/")

const makePage = (edge: edgeType, pageData: PageNodesQuery, actions) => {
  const relativePathOfArticle = getProjectPathForEditInGithub(edge.node.parent.absolutePath)
  const editInGithubLink = pageData.site.siteMetadata.repository + "/edit/master" + relativePathOfArticle
  const sluggedPath = getSluggedPath(relativePathOfArticle.replace("/src/", ""))

  // language=file-reference
  const templatePath = "../../src/templates/MarkdownPageTemplate.tsx"

  // this is where to put data from the markdown node into the allPages node that we have access to on the index page etc.
  const context: MarkdownPageContext = { id: edge.node.id, editInGithubLink, frontmatter: edge.node.frontmatter, excerpt: edge.node.excerpt }
  actions.createPage({
    path: sluggedPath,
    component: require.resolve(templatePath),
    context
  })

  return sluggedPath
}

export const getPreviousRoute = (slugPath: string) => {
  while (slugPath.charAt(slugPath.length - 1) === "/") {
    slugPath = slugPath.substring(0, slugPath.length - 1)
  }
  return slugPath.replace("/" + getAfterLastSlash(slugPath), "")
}

export function getFolderPaths(slugPath: string) {
  const folderPaths: string[] = []
  while (slugPath.includes("/")) {
    // removes last part of path
    slugPath = getPreviousRoute(slugPath)
    folderPaths.push(slugPath)
  }

  return folderPaths
}

const addIndexRoutesForSlug = (slugPath: string, articleIndexRoutesToMake: Record<string, number>) => {
  const folderPaths = getFolderPaths(slugPath)
  folderPaths.forEach(folderPath => {
    if (articleIndexRoutesToMake[folderPath]) {
      articleIndexRoutesToMake[folderPath]++
      return
    }
    articleIndexRoutesToMake[folderPath] = 1
  })
}

export async function createArticlePages(graphql, actions) {
  const articleIndexRoutesToMake: Record<string, number> = {}
  const pageData = await getPageData(graphql)
  const groups = getProjectsAndArticles(pageData)
  groups.articles.forEach((edge) => {
    const slugPath = makePage(edge, pageData, actions)
    addIndexRoutesForSlug(slugPath, articleIndexRoutesToMake)
  })

  return articleIndexRoutesToMake
}
