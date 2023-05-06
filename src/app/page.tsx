import { getArticleList } from '@/libs/microcms/client'
import Image from 'next/image'
import styles from './page.module.css'
import Form from '@/features/home/components/Form'
import ArticleList from '@/features/home/components/ArticleList'

export const metadata = {
  title: 'Home | N-LAB',
  description: 'このウェブサイトは日々の業務を通じて学習したIT技術を備忘録も兼ねて掲載しています。',
}

const Home = async () => {
  let hasError = false
  const articleList = await getArticleList().catch(() => {
    hasError = true
  })

  return (
    <div className='flex-grow'>
      <div className={`${styles.eyecatch} bg-white pb-14 sm:pb-8 lg:pb-12`}>
        <div className='w-full mx-auto max-w-screen-2xl px-4 md:px-8'>
          <section className='flex flex-col justify-center gap-6 sm:gap-10 md:gap-16 lg:flex-row'>
            <div className='flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24'>
              <p className='mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl'>
                N-Laboratory
              </p>

              <h1 className='text-gray-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl'>
                Learn Information Technology
              </h1>

              <p className='mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg'>
                このウェブサイトは日々の業務を通じて学習したIT技術を備忘録も兼ねて掲載しています。
              </p>
              <Form />
            </div>

            <div className='relative h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 lg:w-4/5 hidden lg:block'>
              <Image
                src='/home.svg'
                priority
                fill
                alt='home'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </section>
        </div>
      </div>

      <div className='bg-white py-6 sm:py-8 lg:py-12 xl:px-24 mb-16'>
        <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
              About articles in this web site
            </h2>
            <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
              クラウドサービスに関してはAWS、CMSはWordPress・Strapi・microCMS、プログラミング言語はJava・Javascript、フレームワークはSpring
              Boot・Nuxtを主に取り扱っています。
            </p>
          </div>
          <ArticleList hasError={hasError} articleList={articleList} />
        </div>
      </div>
    </div>
  )
}

export default Home
