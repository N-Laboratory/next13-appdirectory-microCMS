"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { type ArticleListResponse } from '../api/list/route';
import { type Article } from '@/types';
import Loading from '../loading';
import Link from 'next/link';

// TODO ページング機能を実装する
const List = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [articleList, setArticleList] = useState<Article[]>([]);
  const controller = new AbortController();
  const signal = controller.signal;

  // TODO suspenceを用いてuseEffectを使用しない実装に置き換える
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify({ keyword }),
        signal: signal
      });

      if (response.status !== 200) {
        router.push('/error');
        return;
      }

      const data: ArticleListResponse = await response.json()
      setArticleList(data.articleList)
    })();
    return () => {
      // 画面遷移時にフェッチをキャンセル
      controller.abort();
    };
  }, []);

  if (!articleList.length) {
    return (
      <Loading />
    )
  }
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 flex-grow">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">記事一覧</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {
            articleList.map(article => (
              <div key={article.id} className="flex flex-col rounded-lg border p-4 md:p-6 hover:bg-slate-200">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">{article.title}</h3>
                <p className="mb-4 text-gray-500">{article.overview}</p>
                <Link href={`/articles/${article.id}`} className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default List