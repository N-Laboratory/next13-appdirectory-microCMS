import { notFound } from 'next/navigation'
import { getArticleList } from '@/libs/microcms/client'
import TopPage from '@/features/home/components/TopPage'

export const metadata = {
  title: 'Search | N-LAB',
  description: 'N-LAB の記事検索ページです。',
}

type SearchPageProps = {
  searchParams: Promise<{
    keyword?: string | string[]
    category?: string | string[]
  }>
}

const normalizeSearchParam = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    return value[0]?.trim() ?? ''
  }

  return value?.trim() ?? ''
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const resolvedSearchParams = await searchParams
  const keyword = normalizeSearchParam(resolvedSearchParams.keyword)
  const category = normalizeSearchParam(resolvedSearchParams.category) || 'All'

  const articleList = await getArticleList(
    'id,title,overview,svgPath,category,createdDate',
    keyword || undefined,
  ).catch(() => notFound())

  return (
    <TopPage
      articleList={articleList?.contents ?? []}
      currentKeyword={keyword}
      currentCategory={category}
      searchPath="/search"
    />
  )
}

export default SearchPage
