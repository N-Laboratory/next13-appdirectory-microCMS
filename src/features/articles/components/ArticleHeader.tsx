import React from 'react'

type Props = {
  title: string
  dateString: string
}

const HERO_BACKGROUND_STYLE = {
  backgroundImage: `
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
  maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
} as const

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date string')
    }

    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date)
  }
  catch {
    return dateString
  }
}

export const ArticleHeader = ({ title, dateString }: Props) => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-[120px] px-5 overflow-hidden min-h-[40vh]">
      <div className="absolute inset-0 -z-10" style={HERO_BACKGROUND_STYLE} />

      <div className="w-full max-w-[900px] flex flex-col items-center">
        <h1 className="text-[1.8rem] md:text-[2.0rem] font-extrabold text-justify leading-[1.2] mb-5 max-w-[900px] bg-clip-text text-transparent bg-linear-to-r from-white to-sub">
          {title}
        </h1>

        <div className="w-full flex justify-end items-center gap-4 mb-6 mr-10">
          <span className="font-mono text-sl text-sub">
            公開日:
            {' '}
            {formatDate(dateString)}
          </span>
        </div>
      </div>
    </section>
  )
}
