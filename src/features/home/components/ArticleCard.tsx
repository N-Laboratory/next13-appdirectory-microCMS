import Link from 'next/link'
import { Article } from '@/types'

type Props = {
  article: Article
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Link
      href={`/articles/${encodeURIComponent(article.id)}`}
      className="group relative bg-card border border-border rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_10px_40px_-10px_rgba(0,220,130,0.4)]"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="font-mono text-xs px-2 py-1 rounded-sm bg-border text-accent tracking-wider">
          {article.category}
        </span>
        <span className="font-mono text-xs text-slate-500">{article.createdDate}</span>
      </div>

      <h2 className="text-xl font-bold mb-3 leading-snug grow group-hover:text-white transition-colors">
        {article.title}
      </h2>

      <p className="text-sm text-sub mb-5 leading-relaxed line-clamp-3">{article.overview}</p>

      <div className="flex items-center text-sm font-semibold text-accent mt-auto">
        記事を読む
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  )
}

export default ArticleCard
