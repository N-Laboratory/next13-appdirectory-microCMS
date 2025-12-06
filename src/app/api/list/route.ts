import 'server-only'
import { htmlspecialchars } from '@/features/common/sanitize'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Article } from '@/types'
import { getArticleList } from '@/libs/microcms/client'

export type ArticleListResponse = {
  articleList: Article[]
}

const userSchema = z.object({
  keyword: z.string(),
})

export const POST = async (request: NextRequest) => {
  const body = await request.json()
  const result = userSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json([], { status: 400 })
  }

  const keyword = htmlspecialchars(result.data.keyword.trim())
  const articleList = (
    await getArticleList('id,title,overview,svgPath,category,createdDate', keyword)
  )?.contents

  if (!articleList) {
    return NextResponse.json([], { status: 500 })
  }

  return NextResponse.json(
    { articleList },
    {
      status: 200,
    },
  )
}
