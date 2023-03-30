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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const nextIndex = e.currentTarget.name === 'next' ? index + 1 : index - 1
    setIndex(nextIndex)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { data, error, isLoading } = useSWRImmutable<ArticleListResponse>(
    ['/api/list', keyword],
    ([url, keyword]: [url: string, keyword: string]) => fetcher(url, keyword),
    {
      shouldRetryOnError: false,
    },
  )

  const articleTotal = data?.articleList?.totalCount ?? 1
  const pageTotal = Math.ceil(articleTotal / 5)
  const articleListPerPage: Article[][] = []
  if (data && data.articleList && data.articleList.contents.length) {
    let start = 0
    let end = 5
    for (let index = 0; index < pageTotal; index++) {
      articleListPerPage.push(data.articleList.contents.slice(start, end))
      start += 5
      end += 5
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
      <div className='mx-auto max-w-screen-md px-4 md:px-8'>
        {articleListPerPage.length ? (
          <div className='grid gap-4'>
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
          {index != 0 && (
            <button name='previous' onClick={handleClick}>
              &lt; Previous
            </button>
          )}
          {index != pageTotal - 1 && (
            <button name='next' onClick={handleClick}>
              Next &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default List
