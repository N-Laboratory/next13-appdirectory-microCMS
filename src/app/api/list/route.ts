import 'server-only'
import { htmlspecialchars } from '@/features/common/sanitize'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { ArticleList } from '@/types'
import { client, getArticleListByKeyword } from '@/libs/microcms/client'

const userSchema = z.object({
  keyword: z.string(),
})

export type ArticleListResponse = {
  articleList: ArticleList
}

export const POST = async (request: NextRequest) => {
  const body = await request.json()
  const result = userSchema.safeParse(body)
  let apiResStatus = 200

  if (!result.success) {
    apiResStatus = 400
    return NextResponse.json({}, { status: apiResStatus })
  }

  const keyword = htmlspecialchars(result.data.keyword.trim())
  const articleList = await getArticleListByKeyword(keyword)
  if (!articleList) {
    apiResStatus = 500
  }

  return NextResponse.json({ articleList }, { status: apiResStatus })
}
