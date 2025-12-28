import Image from 'next/image'
import {
  domToReact,
  Element,
  attributesToProps,
  type HTMLReactParserOptions,
  type DOMNode,
} from 'html-react-parser'
import Code from '@/features/articles/components/Code'

// 不要な背景色や特定の色指定を削除
const stylesToRemove = [
  'background-color:#ffffff',
  'background-color:#f3f2f2',
  'background-color:#f2f2f2',
  'background-color:#dddddd',
  'color: rgb(0, 0, 0)',
  'color:#000000',
  'color:#242b34',
]

const fileNameStyles = [
  'background-color:#f0f0f0',
  'background-color:#f2f2f2',
  'background-color:#dddddd',
]

/**
 * HTML属性のスタイル調整を行うヘルパー関数
 */
const sanitizeNodeAttributes = (node: Element) => {
  const { name, attribs } = node

  const isTextElement = ['strong', 'span'].includes(name.toLowerCase())
  const style = attribs.style

  if (isTextElement && stylesToRemove.some(s => style?.includes(s))) {
    node.attribs.style = ''
  }

  // ファイル名表示のような特定のスタイルを置換
  if (isTextElement && fileNameStyles.some(s => style?.includes(s))) {
    node.attribs.style
      = 'font-family: var(--font-mono); background: rgba(255, 255, 255, 0.05); padding: 2px 6px; border-radius: 4px; color: #e2e8f0; font-size: 0.85em;'
  }

  // リンクのスタイル置換
  if (name === 'a') {
    node.attribs.style
      = 'color: rgb(63 209 149); overflow-wrap: anywhere; word-break: normal; line-break: strict;'
  }
}

/**
 * html-react-parser用のオプション設定
 */
export const articleParseOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (!(domNode instanceof Element && domNode.attribs)) return

    const props = attributesToProps(domNode.attribs)
    const children = domToReact(domNode.children as DOMNode[])

    switch (domNode.name) {
      case 'h1':
        return <></> // H1は別途表示するため除外

      case 'h2':
        return (
          <h2
            className="text-2xl font-bold mt-[10px] mb-[25px] pb-[15px] border-b border-[#2d3748] text-white flex items-center before:content-['#'] before:text-[#00DC82] before:mr-3 before:font-mono before:font-normal"
            {...props}
          >
            {children}
          </h2>
        )

      case 'h3':
        return (
          <h3 className="text-[1.4rem] font-bold mt-10 mb-5 text-white" {...props}>
            {children}
          </h3>
        )

      case 'p':
        domNode.children.forEach((childNode) => {
          if (childNode instanceof Element && childNode.attribs) {
            // Tailwind CSSで上書きできない場合のスタイル上書き処理
            sanitizeNodeAttributes(childNode)
          }
        })

        return (
          <p className="text-base text-white leading-[1.9] mb-4" {...props}>
            {domToReact(domNode.children)}
          </p>
        )

      case 'ul':
        return (
          <ul className="mb-1 ml-4 text-white list-disc space-y-2 marker:text-[#00DC82]" {...props}>
            {children}
          </ul>
        )

      case 'ol':
        return (
          <ol
            className="mb-1 pl-5 text-white list-decimal marker:text-[#00DC82] space-y-2"
            {...props}
          >
            {children}
          </ol>
        )

      case 'li':
        return (
          <li
            className="relative pl-1 before:content-['•'] before:text-[#00DC82] before:absolute before:-left-4 before:font-bold"
            {...props}
          >
            {children}
          </li>
        )

      case 'pre':
        return (
          <div className="bg-[#0d0e11] p-[15px] rounded-lg overflow-x-auto border border-[#2d3748] font-mono text-sm leading-relaxed relative my-2">
            <Code
              props={{ ...props, className: `${props.className || ''} text-white` }}
              jsx={children}
            />
          </div>
        )

      case 'a':
        return (
          <a
            className="text-[#00DC82] border-b border-transparent hover:border-[#00DC82] transition-colors duration-300"
            {...props}
          >
            {children}
          </a>
        )

      case 'img':
        return (
          <span className="relative block my-8 w-full aspect-video">
            <Image
              src={props.src}
              alt={props.alt || ''}
              className="rounded-lg border border-[#2d3748] object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              {...props}
            />
          </span>
        )

      default:
        // ファイル名クラスの特別処理
        if (domNode.attribs.class?.includes('filename')) {
          return (
            <span className="inline-block font-mono text-xs text-white bg-[#2d3748] px-3 py-1 rounded-t-md ml-2.5 -mb-[1px] relative z-10">
              {children}
            </span>
          )
        }
        return undefined
    }
  },
}
