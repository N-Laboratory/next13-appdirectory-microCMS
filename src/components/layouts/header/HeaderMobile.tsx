import Link from 'next/link'
import Image from 'next/image'

const HeaderMobile = () => {
  return (
    <div className='bg-white fixed bottom-0 left-0 w-full block sm:hidden z-50'>
      <nav className='sticky bottom-0 mx-auto flex w-full justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl'>
        <Link
          prefetch={false}
          href='/'
          className='flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
        >
          <Image src='/headerHomeIcon.svg' priority width={24} height={24} alt='Home' />
          <span>Home</span>
        </Link>

        <Link
          prefetch={false}
          href='/list'
          className='flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
        >
          <Image src='/headerArticlesIcon.svg' priority width={24} height={24} alt='Articles' />
          <span>Articles</span>
        </Link>

        <Link
          prefetch={false}
          href='/search'
          className='flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
        >
          <Image src='/headerSearchIcon.svg' priority width={24} height={24} alt='Search' />
          <span>Search</span>
        </Link>

        <Link
          prefetch={false}
          href='/about'
          className='flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
        >
          <Image src='/headerAboutMeIcon.svg' priority width={24} height={24} alt='About Me' />
          <span>About Me</span>
        </Link>
      </nav>
    </div>
  )
}

export default HeaderMobile
