export default function Loading() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0f1014] text-[#e2e8f0] font-sans'>
      <div className='absolute inset-0 hero-grid-bg -z-10' />

      <main className='text-center z-10 px-5'>
        <div className='mb-8'>
          <div className='loading-spinner w-12 h-12 border-4 rounded-full inline-block' />
        </div>

        <p className='text-xl md:text-2xl font-semibold text-[#00DC82] mb-2 font-mono'>
          LOADING...
        </p>
        <p className='text-base text-[#94a3b8]'>データを取得中です。少々お待ちください。</p>
      </main>
    </div>
  )
}
