import 'server-only'
import { createClient, MicroCMSQueries } from 'microcms-js-sdk'
import { Article, ArticleList } from '@/types'

// vercel上でmicroCMSからデータフェッチした場合、なぜか最新のデータを取得できないので
// URLにclearCacheを付加することで上記事象を解消する（ローカルでは最新のデータを取得できる）
// 数日たつとvercel上でも最新のデータを取得できる（vercelのキャッシュが効いている？）
// 以下のvercelが推奨するキャッシュ対策を実装したが変化はなし
// https://nextjs.org/docs/app/building-your-application/data-fetching/caching
// https://vercel.com/docs/concepts/edge-network/caching
type CustomMicroCMSQueries = MicroCMSQueries & {
  clearCache?: string
}

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

export const getArticleList = async (filedNames?: string) => {
  const articleList = await client
    .get<ArticleList>({
      endpoint: 'article',
      queries: {
        limit: 100,
        clearCache: 'true',
        fields: filedNames ?? '',
      } as CustomMicroCMSQueries,
    })
    .then((res) => res)
    .catch((err) => {
      console.error(err)
    })
  return articleList
}

export const getArticleListByKeyword = async (keyword: string, filedNames?: string) => {
  const articleList = await client
    .getList<Article>({
      endpoint: 'article',
      queries: {
        q: keyword,
        limit: 100,
        clearCache: 'true',
        fields: filedNames ?? '',
      } as CustomMicroCMSQueries,
    })
    .then((res) => res)
    .catch((err) => {
      console.error(err)
    })
  return articleList
}
