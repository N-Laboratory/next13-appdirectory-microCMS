import { notFound } from 'next/navigation'
import { getArticleList } from '@/libs/microcms/client'
import TopPage from '@/features/home/components/TopPage'

export const revalidate = 300

export const metadata = {
  title: 'Home | N-LAB',
  description: '技術記事と実装メモを掲載している N-LAB のトップページです。',
}

const Home = async () => {
  const articleList = await getArticleList('id,title,overview,svgPath,category,createdDate').catch(
    () => notFound(),
  )

  return <TopPage articleList={articleList?.contents ?? []} />
}

export default Home
