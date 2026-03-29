import 'server-only'
import { cache } from 'react'
import { createClient, MicroCMSQueries } from 'microcms-js-sdk'
import { Article } from '@/types'

// microCMS への取得は Next.js の Data Cache と React.cache() を前提に管理する。
// - 記事一覧は比較的短い間隔で再検証する
// - 記事詳細は更新頻度が低い前提で長めにキャッシュする
// - 同一リクエスト内の重複 fetch は React.cache() で抑制する
const ARTICLE_LIST_REVALIDATE = 300
const ARTICLE_DETAIL_REVALIDATE = 3600

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

export const getArticle = cache(async (id: string) => {
  try {
    return await client.getListDetail<Article>({
      endpoint: 'article',
      contentId: id,
      customRequestInit: {
        next: {
          revalidate: ARTICLE_DETAIL_REVALIDATE,
          tags: ['articles', `article:${id}`],
        },
      },
    })
  }
  catch (error) {
    console.error(error)
    throw error
  }
})

export const getArticleList = cache(async (fieldNames?: string, keyword?: string) => {
  const normalizedKeyword = keyword?.trim()

  try {
    return await client.getList<Article>({
      endpoint: 'article',
      queries: {
        ...(normalizedKeyword && { q: normalizedKeyword }),
        limit: 100,
        fields: fieldNames ?? '',
        orders: '-publishedAt',
      } satisfies MicroCMSQueries,
      customRequestInit: {
        next: {
          revalidate: normalizedKeyword ? 60 : ARTICLE_LIST_REVALIDATE,
          tags: normalizedKeyword
            ? ['articles', `article-search:${normalizedKeyword}`]
            : ['articles'],
        },
      },
    })
  }
  catch (error) {
    console.error(error)
    throw error
  }
})
