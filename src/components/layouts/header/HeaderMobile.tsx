import Link from 'next/link'

const HeaderMobile = () => {
  return (
    <div className='bg-white fixed bottom-0 left-0 w-full block sm:hidden z-50'>
      <nav className='sticky bottom-0 mx-auto flex w-full justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl'>
        <Link
          prefetch={false}
          href='/'
          className='flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
        >
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
            <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
          </svg>
          <span>Home</span>
        </Link>

        <Link
          prefetch={false}
          href='/list'
          className='flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
        >
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z' />
            <path d='M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z' />
            <path d='M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z' />
          </svg>
          <span>Articles</span>
        </Link>

        <Link
          prefetch={false}
          href='/search'
          className='flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
        >
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
          <span>Search</span>
        </Link>

        <Link
          prefetch={false}
          href='/about'
          className='flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600'
        >
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
              clipRule='evenodd'
            />
          </svg>
          <span>About Me</span>
        </Link>
      </nav>
    </div>
  )
}

export default HeaderMobile
