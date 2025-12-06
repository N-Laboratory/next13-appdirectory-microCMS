'use client'

import React from 'react'
import { Article } from '@/types'
import { useArticleSearch } from './useArticleSearch'
import ArticleCard from './ArticleCard'
import { clsx } from 'clsx'

type Props = {
  articleList: Article[]
}

const TopPage = ({ articleList }: Props) => {
  const {
    displayedArticles,
    categories,
    activeCategory,
    isLoading,
    handleCategorySelect,
    handleSearch,
  } = useArticleSearch(articleList)

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const keyword = formData.get('keyword') as string
    handleSearch(keyword || '')
  }

  return (
    <main className='min-h-screen pt-[70px]'>
      <section className='relative h-[60vh] flex flex-col justify-center items-center text-center px-5 overflow-hidden'>
        <div className='absolute inset-0 hero-grid-bg -z-10' />

        <h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent'>
          Engineering
          <br />
          the Modern Web.
        </h1>
        <p className='text-lg text-sub mb-10 max-w-[600px]'>
          フロントエンド・バックエンド・クラウド
          <br className='md:hidden' />
          のナレッジ集約サイト
        </p>

        <div className='flex items-center bg-[#252830] py-3 px-6 rounded-full border border-border w-full max-w-[500px] shadow-2xl transition-all duration-300 focus-within:border-accent focus-within:shadow-[0_0_15px_rgba(0,220,130,0.4)]'>
          <form onSubmit={onSearchSubmit} className='flex-1 flex items-center'>
            <input
              name='keyword'
              type='text'
              placeholder='キーワードを入力（例: Nuxt 3, AWS...）'
              className='bg-transparent border-none text-white flex-1 text-base outline-none placeholder:text-slate-600'
            />
            <button type='submit' className='text-sub ml-3' disabled={isLoading}>
              {isLoading ? '...' : '🔍'}
            </button>
          </form>
        </div>
      </section>

      <section className='max-w-[1200px] mx-auto px-5 pt-10 pb-16'>
        <div className='flex gap-3 mb-10 flex-wrap'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-mono border transition-all duration-300',
                activeCategory === cat
                  ? 'bg-accent/10 text-accent border-accent'
                  : 'bg-white/5 text-sub border-transparent hover:bg-accent/10 hover:text-accent hover:border-accent',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className={clsx(
            'relative pr-4',
            displayedArticles.length > 3 && 'max-h-[40rem] overflow-y-auto',
          )}
        >
          {isLoading ? (
            <div className='text-center text-white py-10'>検索中...</div>
          ) : displayedArticles.length > 0 ? (
            <div className='grid grid-cols-1 pt-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {displayedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className='text-center text-sub py-10'>記事が見つかりませんでした。</div>
          )}
        </div>
      </section>
    </main>
  )
}

export default TopPage
