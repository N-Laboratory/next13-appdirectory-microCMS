import Image from 'next/image'

const About = () => {
  return (
    <div className='bg-white pb-12 flex-grow'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='flex flex-col items-center gap-4 md:gap-6'>
          <h2 className='mb-4 text-center text-4xl font-bold text-gray-800 md:mb-6'>About me</h2>
          <div className='max-w-md text-gray-600 lg:text-lg'>
            5年目を迎えるWebエンジニア。Javaを利用したSpring
            Bootでの開発経験を経て、現在はTypescript/Vue/Nuxt関連のスキルを磨いています。
          </div>
          <div className='max-w-md text-gray-600 lg:text-lg'>
            今までずっとサーバーサイド寄りな開発経験しかなかったのでフロントエンドの技術の進歩と奥の深さに驚く日々を過ごしています。
          </div>
          <div className='max-w-md text-gray-600 lg:text-lg'>
            日々の業務で経験したスキルや独学で学んだことのアウトプットとしてこのサイトに記事を随時投稿していくつもりです。
          </div>

          <div className='flex items-center gap-2 flex-row md:gap-3'>
            <div className='relative h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14'>
              <Image
                src='https://images.microcms-assets.io/assets/7478dd5932af4278b8ba184c182f5e26/08b9cd4addd748a5acc8f9feebb00f12/me.jpeg'
                priority
                sizes='(max-width: 768px) 100vw'
                fill
                alt='Photo by N-Nakanishi'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div>
              <div className='text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base'>
                N-Nakanishi
              </div>
              <div className='flex mt-1 justify-center sm:justify-start'>
                <div className='flex gap-4'>
                  <a
                    href='https://github.com/N-Laboratory'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                  >
                    <Image
                      src='https://images.microcms-assets.io/assets/7478dd5932af4278b8ba184c182f5e26/b49126276d334159b476f9e3ac422ed2/github.svg'
                      loading='lazy'
                      width={24}
                      height={24}
                      alt='github icon'
                      className='h-5 w-5'
                    />
                  </a>
                  <a
                    href='https://twitter.com/NL4boratory'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
                  >
                    <Image
                      src='https://images.microcms-assets.io/assets/7478dd5932af4278b8ba184c182f5e26/6535bf55a88d48a890935deb2a5ef9fd/twitter.svg'
                      loading='lazy'
                      width={24}
                      height={24}
                      alt='twitter icon'
                      className='h-5 w-5'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
