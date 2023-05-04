import { getArticleList } from '@/libs/microcms/client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Form from '@/features/home/components/Form'

export const fetchCache = 'force-cache'

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

          <div
            className={`${styles.scrollArea} h-80 overflow-y-scroll h-96 sm:h-80 grid gap-8 sm:grid-cols-2 md:gap-12 xl:gap-16`}
          >
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
                    <h3 className='mb-2 text-lg text-gray-800 font-semibold md:text-xl'>{article.title}</h3>
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
        </div>
      </div>

    </div>
  )
}

export default Home
