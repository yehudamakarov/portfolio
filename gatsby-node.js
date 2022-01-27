exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
  {
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
            }
          }
        }
      }
    }
  }
  `)

  // can later iterate through nested file structure for deeper routes based on article topic
  const getProjectsAndArticles = () => data.allMarkdownRemark.edges.reduce((groups, edge) => {
    if (edge.node.parent.dir.includes("src/articles")) {
      groups.articles.push(edge)
    }
    if (edge.node.parent.dir.includes("src/projects")) {
      groups.projects.push(edge)
    }
    return groups
  }, { projects: [], articles: [] })

  const createPageFor = parent => edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: parent + "/" + slug,
      component: require.resolve(`./src/templates/MarkdownPageTemplate.tsx`),
      context: { id: edge.node.id }
    })
  }

  const groups = getProjectsAndArticles()
  groups.articles.forEach(createPageFor("articles"))
  groups.projects.forEach(createPageFor("projects"))
}
