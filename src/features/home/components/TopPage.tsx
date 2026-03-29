import Link from 'next/link'
import { clsx } from 'clsx'
import { Article } from '@/types'
import ArticleCard from './ArticleCard'

type Props = {
  articleList: Article[]
  currentKeyword?: string
  currentCategory?: string
  searchPath?: string
}

const DEFAULT_SEARCH_PATH = '/search'

const buildSearchHref = (searchPath: string, keyword?: string, category?: string) => {
  const searchParams = new URLSearchParams()

  if (keyword) {
    searchParams.set('keyword', keyword)
  }

  if (category && category !== 'All') {
    searchParams.set('category', category)
  }

  const queryString = searchParams.toString()
  return queryString ? `${searchPath}?${queryString}` : searchPath
}

const getCategories = (articleList: Article[]) => {
  const categorySet = new Set<string>()

  articleList.forEach((article) => {
    if (article.category) {
      categorySet.add(article.category)
    }
  })

  const sortedCategories = Array.from(categorySet).toSorted((a, b) => {
    if (a === 'Others') return 1
    if (b === 'Others') return -1

    return a.localeCompare(b, 'ja')
  })

  return ['All', ...sortedCategories]
}

const TopPage = ({
  articleList,
  currentKeyword = '',
  currentCategory = 'All',
  searchPath = DEFAULT_SEARCH_PATH,
}: Props) => {
  const categories = getCategories(articleList)
  const activeCategory = categories.includes(currentCategory) ? currentCategory : 'All'
  const displayedArticles = activeCategory === 'All'
    ? articleList
    : articleList.filter(article => article.category === activeCategory)

  return (
    <main className="min-h-screen pt-[70px]">
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center px-5 overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg -z-10" />

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-10 bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Engineering
          <br />
          the Modern Web.
        </h1>

        <div className="flex items-center bg-[#252830] py-3 px-6 rounded-full border border-border w-full max-w-[500px] shadow-2xl transition-all duration-300 focus-within:border-accent focus-within:shadow-[0_0_15px_rgba(0,220,130,0.4)]">
          <form action={searchPath} className="flex-1 flex items-center">
            <input
              name="keyword"
              type="text"
              defaultValue={currentKeyword}
              placeholder="キーワードで検索 例: Nuxt 3, AWS..."
              className="bg-transparent border-none text-white flex-1 text-base outline-hidden placeholder:text-slate-600"
            />
            <button type="submit" className="text-sub ml-3">
              検索
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 pt-10 pb-16">
        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map(cat => (
            <Link
              key={cat}
              href={buildSearchHref(searchPath, currentKeyword, cat)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-mono border transition-all duration-300',
                activeCategory === cat
                  ? 'bg-accent/10 text-accent border-accent'
                  : 'bg-white/5 text-sub border-transparent hover:bg-accent/10 hover:text-accent hover:border-accent',
              )}
            >
              {cat}
            </Link>
          ))}
        </div>

        <div
          className={clsx(
            'relative pr-4',
            displayedArticles.length > 3 && 'max-h-160 overflow-y-auto',
          )}
        >
          {displayedArticles.length > 0
            ? (
                <div className="grid grid-cols-1 pt-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              )
            : (
                <div className="text-center text-sub py-10">該当する記事は見つかりませんでした。</div>
              )}
        </div>
      </section>
    </main>
  )
}

export default TopPage
