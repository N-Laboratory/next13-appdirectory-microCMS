import { useState, useMemo, useCallback } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { Article } from '@/types'
import { ArticleListResponse } from '@/app/api/list/route'

const fetcher = async (url: string, keyword: string) =>
  await axios.post(url, { keyword }).then((res) => res.data)

export const useArticleSearch = (initialArticles: Article[]) => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const { data, isLoading } = useSWR<ArticleListResponse>(
    searchKeyword ? ['/api/list', searchKeyword] : null,
    ([url, keyword]: [string, string]) => fetcher(url, keyword),
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  )

  const sourceArticles = useMemo(() => {
    if (searchKeyword && data?.articleList) {
      return data.articleList
    }
    return initialArticles
  }, [searchKeyword, data, initialArticles])

  const categories = useMemo(() => {
    const uniqueCats = Array.from(
      new Set(sourceArticles.map((a) => a.category).filter(Boolean) as string[]),
    )
    uniqueCats.sort((a, b) => (a === 'Others' ? 1 : b === 'Others' ? -1 : 0))
    return ['All', ...uniqueCats]
  }, [sourceArticles])

  const displayedArticles = useMemo(() => {
    if (activeCategory === 'All') return sourceArticles
    return sourceArticles.filter((article) => article.category === activeCategory)
  }, [activeCategory, sourceArticles])

  // ハンドラ
  const handleCategorySelect = useCallback((category: string) => {
    setActiveCategory(category)
  }, [])

  const handleSearch = useCallback((keyword: string) => {
    if (!keyword.trim()) {
      setSearchKeyword('')
      return
    }
    setSearchKeyword(keyword)
    setActiveCategory('All')
  }, [])

  return {
    displayedArticles,
    categories,
    activeCategory,
    isLoading: isLoading && !!searchKeyword,
    handleCategorySelect,
    handleSearch,
  }
}
