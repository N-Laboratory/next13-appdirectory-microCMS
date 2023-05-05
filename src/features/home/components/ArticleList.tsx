'use client'

import { ArticleList } from '@/types'
import styles from './ArticleList.module.css'
import Image from 'next/image'
import Link from 'next/link'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

type Props = {
  hasError?: boolean
  articleList?: void | ArticleList
}

const ArticleList = ({ hasError, articleList }: Props) => {
  return (
    <SimpleBar className={`${styles.scrollArea}`} forceVisible='y' autoHide={false}>
      <div className={`h-80 h-96 sm:h-80 grid gap-8 sm:grid-cols-2 md:gap-12 xl:gap-16`}>
        {!hasError && articleList && articleList.contents.length ? (
          articleList.contents.map((article) => (
            <div key={article.id} className='flex gap-4 md:gap-6'>
              <div className='relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl'>
                <Image
                  src={article.svgPath}
                  priority
                  fill
                  alt='svg icon'
                  className='px-1.5 h-6 w-6'
                />
              </div>

              <div className='w-full'>
                <h3 className='mb-2 text-lg text-gray-800 font-semibold md:text-xl'>
                  {article.title}
                </h3>
                <p title={article.overview} className={`${styles.overview} mb-2 text-gray-500`}>
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
                  <p className='pr-3.5 mt-auto text-gray-500'>{article.createdDate}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            記事が存在しません
          </p>
        )}
      </div>
    </SimpleBar>
  )
}

export default ArticleList
