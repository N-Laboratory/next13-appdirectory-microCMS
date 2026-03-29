import styles from './Code.module.css'

import type { JSX } from 'react'

type HTMLAttributes = React.HTMLAttributes<HTMLPreElement>

type Props = {
  props: HTMLAttributes & {
    className?: string
  }
  jsx: string | JSX.Element | JSX.Element[]
}

const Code = ({ props, jsx }: Props) => {
  return (
    <div className={styles.scrollArea}>
      <pre className={`${styles.code} my-3 w-max min-w-full`} {...props}>
        {jsx}
      </pre>
    </div>
  )
}

export default Code
