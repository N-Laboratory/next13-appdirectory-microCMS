import 'server-only'
import { htmlspecialchars } from '@/features/common/sanitize'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Article } from '@/types'
import { getArticleList, getArticleListByKeyword } from '@/libs/microcms/client'

const userSchema = z.object({
  keyword: z.string(),
})

export type ArticleListResponse = {
  articleListPerPage: Article[][]
  pageTotal: number
}

export const POST = async (request: NextRequest) => {
  const body = await request.json()
  const result = userSchema.safeParse(body)
  const articleListPerPage: Article[][] = []

  if (!result.success) {
    return NextResponse.json({ articleListPerPage }, { status: 400 })
  }

  const keyword = htmlspecialchars(result.data.keyword.trim())
  const articleList =
    keyword == '' ? await getArticleList() : await getArticleListByKeyword(keyword)
  if (!articleList) {
    return NextResponse.json({ articleListPerPage }, { status: 500 })
  }

  const articleTotal = articleList.totalCount ?? 1
  const pageTotal = Math.ceil(articleTotal / 5)
  if (articleList.contents.length) {
    let start = 0
    let end = 5
    for (let index = 0; index < pageTotal; index++) {
      articleListPerPage.push(articleList.contents.slice(start, end))
      start += 5
      end += 5
    }
  }

  return NextResponse.json(
    { articleListPerPage, pageTotal },
    {
      status: 200,
    },
  )
}
