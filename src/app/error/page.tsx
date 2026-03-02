'use client'

import Link from 'next/link'

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background text-[#e2e8f0] font-sans">
      <div className="absolute inset-0 hero-grid-bg -z-10" />

      <main className="text-center z-10 px-5">
        <h1 className="text-8xl md:text-[10rem] font-extrabold leading-none mb-4 font-mono tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-red-400 to-slate-500">
          500
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#e2e8f0]">
          Something went wrong.
        </h2>
        <p className="text-base md:text-lg text-sub mb-10 max-w-md mx-auto leading-relaxed">
          予期せぬエラーが発生しました。
          <br />
          しばらく時間をおいてから、再度お試しください。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-3 rounded-full border border-border bg-white/5 text-[#e2e8f0] font-semibold transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            <span className="font-mono">Back to Top</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
