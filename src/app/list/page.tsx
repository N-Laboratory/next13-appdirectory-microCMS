'use client'

import { useSearchParams } from 'next/navigation'
import Loading from '../loading'
import useSWR from 'swr'
import axios from 'axios'
import Error from '../error/page'
import Link from 'next/link'
import { ArticleListResponse } from '../api/list/route'
import styles from './page.module.css'
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

  const { data, error, isLoading } = useSWR<ArticleListResponse>(
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

  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12 flex-grow'>
      <div className='mx-auto max-w-screen-md px-4 md:px-8'>
        {data && data.articleListPerPage && data.articleListPerPage.length ? (
          <div className='grid gap-4'>
            {data.articleListPerPage[index].map((article) => (
              <div
                key={article.id}
                className='flex flex-col rounded-lg border p-4 md:p-6 hover:bg-slate-200'
              >
                <h3 className='mb-2 text-lg text-gray-800 font-semibold md:text-xl'>
                  {article.title}
                </h3>
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
            <button className='text-gray-800' name='previous' onClick={handleClick}>
              &lt; Previous
            </button>
          )}
          {data && data.pageTotal != 0 && index != data.pageTotal - 1 && (
            <button className='text-gray-800' name='next' onClick={handleClick}>
              Next &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default List
