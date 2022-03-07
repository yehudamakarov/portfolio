import { createArticlePages} from "./util/createArticlePages"
import { createFolderPages } from "./util/createArticleIndexPages"


exports.createPages = async function({ graphql, actions }) {
  const articleIndexRoutes = await createArticlePages(graphql, actions)
  await createFolderPages(articleIndexRoutes, graphql, actions)
}
