import 'server-only'
import { createClient } from 'microcms-js-sdk'
import { Article, ArticleList } from '@/types'

if (!process.env.SERVICE_DOMAIN) {
  throw new Error('SERVICE_DOMAIN is required')
}

if (!process.env.API_KEY) {
  throw new Error('API_KEY is required')
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

export const getArticle = async (id: string) => {
  const article = await client
    .getListDetail<Article>({ endpoint: 'article', contentId: id })
    .then((res) => res)
    .catch((err) => console.error(err))
  return article
}

export const getArticleList = async () => {
  const articleList = await client
    .get<ArticleList>({ endpoint: 'article', queries: { limit: 100 } })
    .then((res) => res)
    .catch((err) => {
      console.error(err)
    })
  return articleList
}

export const getArticleListByKeyword = async (keyword: string) => {
  const articleList = await client
    .getList<Article>({ endpoint: 'article', queries: { q: keyword, limit: 100 } })
    .then((res) => res)
    .catch((err) => {
      console.error(err)
    })
  return articleList
}
