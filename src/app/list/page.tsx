'use client'

import { useSearchParams } from 'next/navigation'
import Loading from '../loading'
import useSWRImmutable from 'swr/immutable'
import axios from 'axios'
import Error from '../error/page'
import Link from 'next/link'
import { ArticleListResponse } from '../api/list/route'
import styles from './page.module.css'

const fetcher = async (url: string, keyword: string) =>
  await axios.post(url, { keyword }).then((res) => res.data)

// TODO ページング機能を実装する
const List = () => {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword') ?? ''
  const { data, error, isLoading } = useSWRImmutable<ArticleListResponse>(
    ['/api/list', keyword],
    ([url, keyword]: [url: string, keyword: string]) => fetcher(url, keyword),
    {
      shouldRetryOnError: false,
    },
  )

  if (error) {
    return <Error />
  }

  if (isLoading) {
    return <Loading />
  }
  // TODO alt属性の確認　画像をラインセンスふりーで置き換え　404エラーページ作成
  // libsで定義したprocess.env.apikeyがビルド時に漏洩していないか確認
  // 正しくサニタイズできているか
  // ページング実装
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12 flex-grow'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            記事一覧
          </h2>
        </div>
        {data && data.articleList && data.articleList.contents.length ? (
          <div className={`${styles.articleList} grid gap-4 md:gap-8 `}>
            {data.articleList.contents.map((article) => (
              <div
                key={article.id}
                className='flex flex-col rounded-lg border p-4 md:p-6 hover:bg-slate-200'
              >
                <h3 className='mb-2 text-lg font-semibold md:text-xl'>{article.title}</h3>
                <p title={article.overview} className={`${styles.overview} mb-4 text-gray-500`}>
                  {article.overview}
                </p>
                <div className='flex justify-between'>
                  <Link
                    prefetch={false}
                    href={`/articles/${encodeURIComponent(article.id)}`}
                    className='mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700'
                  >
                    More
                  </Link>
                  <p className='mt-auto text-gray-500'>{article.createdDate}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            記事が存在しません
          </h2>
        )}
      </div>
    </div>
  )
}

export default List
