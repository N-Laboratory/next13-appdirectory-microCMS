'use client'
import styles from './Code.module.css'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

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
    <SimpleBar className={`${styles.scrollArea}`} forceVisible="x" autoHide={false}>
      <pre className={`${styles.code} my-3 w-max min-w-full`} {...props}>
        {jsx}
      </pre>
    </SimpleBar>
  )
}

export default Code
