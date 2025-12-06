import { getArticleList } from '@/libs/microcms/client'
import { notFound } from 'next/navigation'
import TopPage from '@/features/home/components/TopPage'

export const metadata = {
  title: 'Home | N-LAB',
  description: 'このウェブサイトは日々の業務を通じて学習したIT技術を備忘録も兼ねて掲載しています。',
}

const Home = async () => {
  const articleList = await getArticleList('id,title,overview,svgPath,category,createdDate').catch(
    () => notFound(),
  )

  return <TopPage articleList={articleList?.contents ?? []} />
}

export default Home
