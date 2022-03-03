import { File, MarkdownRemark, MarkdownRemarkFrontmatter, Maybe, PageNodesQuery } from "../gatsby-graphql"

type edgeType = {
  node: (
    Pick<MarkdownRemark, "id" | "htmlAst">
    & { frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, "date" | "title" | "slug">>, parent?: Maybe<Pick<File, "name" | "dir" | "absolutePath">> }
    )
}
type edgesType = Array<edgeType>

async function getPageData(graphql) {
  const result: { data: PageNodesQuery } = await graphql(`
    query PageNodes {
      allMarkdownRemark {
        edges {
          node {
            id
            htmlAst
            frontmatter {
              date
              title
              slug
            }
            parent {
              ... on File {
                name
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

  const { data } = result
  return data
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

const getProjectPath = absolutePath => absolutePath.substring(absolutePath.indexOf("/src"))
const getSlugPath = (projectPath: string) => projectPath.replace("/src/", "")

const makePage = (edge: edgeType, pageData: PageNodesQuery, actions) => {
  const projectPath = getProjectPath(edge.node.parent.absolutePath)
  const slugPath = getSlugPath(projectPath)
  const editInGithubLink = pageData.site.siteMetadata.repository + "/edit/master" + projectPath
  actions.createPage({
    path: slugPath,
    component: require.resolve(`../src/templates/MarkdownPageTemplate.tsx`),
    context: { id: edge.node.id, editInGithubLink }
  })
}

exports.createPages = async function({ actions, graphql }) {
  const pageData = await getPageData(graphql)
  const groups = getProjectsAndArticles(pageData)

  groups.articles.forEach((edge) => {
    makePage(edge, pageData, actions)
  })
}
