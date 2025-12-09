import Link from 'next/link'

export const metadata = {
  title: 'Not Found | N-LAB',
  description: 'ページが見つかりません。',
}

export default function NonexistentPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0f1014] text-[#e2e8f0] font-sans'>
      <div className='absolute inset-0 hero-grid-bg -z-10' />
      <main className='text-center z-10 px-5'>
        <h1 className='text-9xl md:text-[10rem] font-extrabold leading-none mb-2 font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500'>
          404
        </h1>

        <h2 className='text-2xl md:text-3xl font-bold mb-6 text-[#e2e8f0]'>Page Not Found.</h2>
        <p className='text-base md:text-lg text-[#94a3b8] mb-12 max-w-md mx-auto leading-relaxed'>
          お探しのページは削除されたか、
          <br className='hidden md:block' />
          URLが変更された可能性があります。
        </p>

        <Link
          href='/'
          className='group inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#2d3748] bg-white/5 text-[#e2e8f0] font-semibold transition-all duration-300 hover:border-[#00DC82] hover:bg-[#00DC82]/10 hover:text-[#00DC82] hover:shadow-[0_0_20px_rgba(0,220,130,0.3)]'
        >
          <span className='font-mono'>Back to Top</span>
          <span className='transition-transform duration-300 group-hover:translate-x-1'>→</span>
        </Link>
      </main>
    </div>
  )
}
