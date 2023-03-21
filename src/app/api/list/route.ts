import { htmlspecialchars } from '@/features/common/sanitize';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { type Article } from '@/types';

const userSchema = z.object({
  keyword: z.string(),
});

export type ArticleListResponse = {
  articleList: Article[]
};

export const POST = async(request: NextRequest) => {
  const body = await request.json();
  const result = userSchema.safeParse(body);

  if (!result.success || result.data?.keyword == null) {
    return NextResponse.json(
      {},{ status: 400 },
    );
  }

  const keyword = htmlspecialchars(result.data.keyword.trim());
  // TODO headlessCMSよりデータ取得するように置き換える
  const articleList: Article[] = [];
  articleList.push({ id: '1', title: 'hoge', overview: 'this is a overview!!!!!!!'});
  articleList.push({ id: '2', title: 'hogehoge', overview: 'this is a overview!!!!!!!this is a overview!!!!!!!'});
  articleList.push({ id: '3', title: 'foobar', overview: 'this is a ois is a overviewerview!!!this is a overview!!!!!!this is a overview!!!!!!this is a overview!!!!!!!!!!'});

  return NextResponse.json(
    {
      articleList,
    },
    {
      status: 200,
    },
  );
}
