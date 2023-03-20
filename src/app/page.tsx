import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">


          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">N-Laboratory</p>

              <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">Learn Information Technology</h1>

              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">このウェブサイトは日々の業務を通じて学習したIT技術を備忘録も兼ねて掲載しています。</p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">記事一覧<span className={styles.dliFeed}></span></Link>

                <Link href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">記事検索<span className={styles.dliSearch}></span></Link>
              </div>
            </div>

            <div style={{ position: 'relative'}} className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 lg:w-full hidden lg:block">
              <Image src="/pg.svg" priority fill alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
              <a className="absolute bottom-0 bg-slate-50" href="https://storyset.com/technology">Technology illustrations by Storyset</a>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">About articles in this web site</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">クラウドサービスに関してはAWS、CMSはWordPress・Strapi・microCMS、プログラミング言語はJava・Javascript、フレームワークはSpring Boot・Nuxtを主に取り扱っています。</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
                <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <Link href="#" className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</Link>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Security</h3>
                <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <Link href="#" className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</Link>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Cloud</h3>
                <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <Link href="#" className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</Link>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Speed</h3>
                <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <Link href="#" className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</Link>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Support</h3>
                <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <Link href="#" className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</Link>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
                <p className="mb-2 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <Link href="#" className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">記事一覧<span className={styles.dliFeed}></span></Link>
      </div>

      <div className="mt-4 bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div id="about-me">
            <h2 className="mb-4 text-center text-4xl font-bold text-gray-800 md:mb-6">Meet me</h2>
          </div>

          <div className="grid mr-auto ml-auto lg:w-2/4">
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div style={{ position: 'relative'}} className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <Image src="/me.jpeg" sizes="(max-width: 768px) 100vw" priority fill alt="Photo by Naoki Nakanishi" className="h-full w-full object-cover object-center" />
              </div>

              <div>
                <div className="text-center font-bold text-indigo-500 md:text-lg">Naoki Nakanishi</div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Web Engineer</p>

                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="https://github.com/N-Laboratory" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                      <Image src="/github.svg" loading="lazy" width={24} height={24} alt="github icon" className="h-5 w-5" />
                    </a>

                    <a href="https://twitter.com/NL4boratory" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                      <Image src="/twitter.svg" loading="lazy" width={24} height={24} alt="twitter icon" className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home