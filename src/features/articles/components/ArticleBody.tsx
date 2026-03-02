import React from 'react'
import parse from 'html-react-parser'
import { articleParseOptions } from '@/features/articles/utils/parser'

type Props = {
  content: string
}

export const ArticleBody = ({ content }: Props) => {
  return (
    <section className="max-w-[900px] mx-auto px-5 pb-20">
      <div className="bg-card border border-border rounded-2xl p-6 md:p-[50px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] relative z-10">
        <div className="font-sans">{parse(content, articleParseOptions)}</div>
      </div>
    </section>
  )
}
