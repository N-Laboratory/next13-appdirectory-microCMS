'use client'

import { useSearchParams } from 'next/navigation'
import Loading from '../loading'
import useSWRImmutable from 'swr/immutable'
import axios from 'axios'
import Error from '../error/page'
import Link from 'next/link'
import { ArticleListResponse } from '../api/list/route'
import styles from './page.module.css'
import { Article } from '@/types'
import { useState } from 'react'

const fetcher = async (url: string, keyword: string) =>
  await axios.post(url, { keyword }).then((res) => res.data)

const List = () => {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword') ?? ''
  const [index, setIndex] = useState(0)

  const handlePreviousClick = () => {
    setIndex(index - 1)
  }

  const handleNextClick = () => {
    setIndex(index + 1)
  }

  const { data, error, isLoading } = useSWRImmutable<ArticleListResponse>(
    ['/api/list', keyword],
    ([url, keyword]: [url: string, keyword: string]) => fetcher(url, keyword),
    {
      shouldRetryOnError: false,
    },
  )

  const articleTotal = data?.articleList.totalCount ?? 1
  const pageTotal = Math.ceil(articleTotal / 6)
  const articleListPerPage: Article[][] = []
  if (data && data.articleList && data.articleList.contents.length) {
    let start = 0
    let end = 6
    for (let index = 0; index < pageTotal; index++) {
      articleListPerPage.push(data.articleList.contents.slice(start, end))
      start += 6
      end += 6
    }
  }

  if (error) {
    return <Error />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12 flex-grow'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        {articleListPerPage.length ? (
          <div className={`${styles.articleList} grid gap-4 md:gap-8 `}>
            {articleListPerPage[index].map((article) => (
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

        <div className='flex px-3 my-12 justify-between'>
          {index != 0 && <button onClick={handlePreviousClick}>&lt; Previous</button>}
          {index != pageTotal - 1 && <button onClick={handleNextClick}>Next &gt;</button>}
        </div>
      </div>
    </div>
  )
}

export default List
