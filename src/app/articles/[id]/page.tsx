import Image from 'next/image'
import { getArticle } from '@/libs/microcms/client'
import { Article } from '@/types'
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
  attributesToProps,
} from 'html-react-parser'
import styles from './page.module.css'
import { htmlspecialchars } from '@/features/common/sanitize'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  let hasError = false
  const article = await getArticle(htmlspecialchars(params.id)).catch(() => {
    hasError = true
  })
  if (hasError || !article) {
    return {
      title: '記事が見つかりません',
      description: '記事が見つかりません',
    }
  }
  return {
    title: `${article.title} | N-LAB`,
    description: article.overview,
  }
}

// microCMSから取得したHTMLをJSXに変換する際にtailwindのスタイルを適用する
const replace: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      const props = attributesToProps(domNode.attribs)
      if (domNode.name === 'pre') {
        return (
          <pre className={`${styles.code} my-3`} {...props}>
            {domToReact(domNode.children)}
          </pre>
        )
      }
      if (domNode.name === 'h1') {
        return (
          <h1
            className='border-b-4 border-double border-black pb-1.5 mb-4 text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6'
            {...props}
          >
            {domToReact(domNode.children)}
          </h1>
        )
      }
      if (domNode.name === 'h2') {
        return (
          <h2
            className='font-normal mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4'
            {...props}
          >
            {domToReact(domNode.children)}
          </h2>
        )
      }
      if (domNode.name === 'ul') {
        return (
          <ul className='list-inside list-disc sm:text-lg' {...props}>
            {domToReact(domNode.children)}
          </ul>
        )
      }
      if (domNode.name === 'ol') {
        return (
          <ol className='list-inside list-decimal sm:text-lg' {...props}>
            {domToReact(domNode.children)}
          </ol>
        )
      }
      if (domNode.name === 'a') {
        return (
          <a className={`${styles.linkColor}`} {...props}>
            {domToReact(domNode.children)}
          </a>
        )
      }
      if (domNode.name === 'img') {
        return (
          <span className='relative block'>
            <Image
              src={props.src}
              alt={props.alt}
              className={`${styles.image} pt-3`}
              fill
              priority
              sizes='(max-width: 768px) 100vw'
              {...props}
            />
          </span>
        )
      }
    }
  },
}

const Articles = async ({ params }: { params: { id: string } }) => {
  const article = await getArticle(htmlspecialchars(params.id)).catch(() => {
    notFound()
  })
  if (!article) {
    // notFound関数をコールするとnot-found.tsxが呼び出される
    notFound()
  }

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12 flex-grow'>
      <div className='mx-auto max-w-screen-md px-4 md:px-8 leading-7'>
        {article.detail ? parse(article.detail, replace) : ''}
      </div>
    </div>
  )
}

export default Articles
