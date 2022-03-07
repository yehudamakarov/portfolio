import { MarkdownIndexContext } from "../../src/templates/MarkdownIndexPageTemplate"

export async function createFolderPages(articleIndexRoutes: Record<string, number>, graphql, actions) {
  Object.keys(articleIndexRoutes).forEach(folderThatNeedsPage => {
    const context: MarkdownIndexContext = {
      // regexForWhichFolders matches only immediate subdirectories due to $
      regexForWhichFolders: `/${folderThatNeedsPage}/[^\/]+$/`,
      regexForOnlyIndexPages: "/MarkdownIndexPageTemplate/",
      regexForWhichContentPages: `/${folderThatNeedsPage}/`,
      regexForOnlyContentPages: "/MarkdownPageTemplate/"
    }
    actions.createPage({
      path: folderThatNeedsPage,
      // language=file-reference
      component: require.resolve("../../src/templates/MarkdownIndexPageTemplate.tsx"),
      // only immediate subdirectories due to $
      context
    })
  })
}
