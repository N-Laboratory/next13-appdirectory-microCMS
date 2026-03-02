import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getArticle, getArticleList } from '@/libs/microcms/client'
import { htmlspecialchars } from '@/features/common/sanitize'
import { ArticleHeader } from '@/features/articles/components/ArticleHeader'
import { ArticleBody } from '@/features/articles/components/ArticleBody'

type Props = {
  params: Promise<{ id: string }>
}

// Dynamic Route使用時にSSGでビルドする
export async function generateStaticParams() {
  try {
    const response = await getArticleList('id')
    const articleList = response?.contents

    if (!articleList || articleList.length === 0) {
      return [{ id: '0' }]
    }

    return articleList.map(article => ({
      id: article.id,
    }))
  }
  catch {
    return []
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props?.params
  try {
    if (!params) throw new Error('Not Found')

    const article = await getArticle(htmlspecialchars(params.id))
    if (!article) throw new Error('Not Found')

    return {
      title: `${article.title} | N-LAB`,
      description: article.overview,
      alternates: {
        canonical: `https://n-laboratory.jp/articles/${article.id}`,
      },
    }
  }
  catch {
    return {
      title: 'Not Found | N-LAB',
      description: '記事が見つかりません',
    }
  }
}

export default async function ArticlePage(props: Props) {
  const params = await props?.params
  if (!params) {
    notFound()
  }

  const article = await getArticle(htmlspecialchars(params.id)).catch(() => null)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-[#e2e8f0] font-sans selection:bg-[#00DC82] selection:text-white">
      <main>
        <ArticleHeader
          title={article.title}
          dateString={article.publishedAt || article.createdAt}
        />

        {article.detail && <ArticleBody content={article.detail} />}
      </main>
    </div>
  )
}
