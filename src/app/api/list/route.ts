import "server-only";
import { htmlspecialchars } from '@/features/common/sanitize';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { ArticleList } from '@/types';
import { client } from '@/libs/microcms/client';

const userSchema = z.object({
  keyword: z.string(),
});

export type ArticleListResponse = {
  articleList: ArticleList
};

export const POST = async(request: NextRequest) => {
  const body = await request.json();
  const result = userSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {},{ status: 400 },
    );
  }

  const keyword = htmlspecialchars(result.data.keyword.trim());
  const articleList: ArticleList = await client.get({ endpoint: "article", queries: { q: keyword } });

  return NextResponse.json(
    {
      articleList,
    },
    {
      status: 200,
    },
  );
}
