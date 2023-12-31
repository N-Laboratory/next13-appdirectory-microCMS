'use client'

import styles from './Code.module.css'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { isMobile } from 'react-device-detect'

type Props = {
  props: Record<string, string> & { style: Record<string, string> }
  jsx: string | JSX.Element | JSX.Element[]
}

const Code = ({ props, jsx }: Props) => {
  return (
    <>
      {isMobile ? (
        <SimpleBar className={`${styles.scrollArea}`} forceVisible='x' autoHide={false}>
          <pre className={`${styles.code} my-3 w-max min-w-full`} {...props}>
            {jsx}
          </pre>
        </SimpleBar>
      ) : (
        <pre
          className={`${styles.code} ${styles.scrollArea} my-3 overflow-visible overflow-x-auto`}
          {...props}
        >
          {jsx}
        </pre>
      )}
    </>
  )
}

export default Code
