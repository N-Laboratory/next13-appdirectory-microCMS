'use client'

import Link from 'next/link'
import HeaderMobile from '@/components/layouts/header/HeaderMobile'
import { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <div className='bg-white z-50'>
        <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
          <header className='mb-8 flex items-center justify-end sm:justify-center py-4 md:mb-12 md:py-8 xl:mb-16 relative'>
            <Link
              prefetch={false}
              href='/'
              className='text-gray-800 inline-flex items-center gap-2.5 text-4xl sm:text-2xl font-bold md:text-3xl absolute left-0'
              aria-label='logo'
            >
              N-LAB
            </Link>

            <nav className='hidden gap-12 sm:flex'>
              <Link
                prefetch={false}
                href='/'
                className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
              >
                Home
              </Link>
              <Link
                prefetch={false}
                href='/list'
                className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
              >
                Articles
              </Link>
              <Link
                prefetch={false}
                href='/search'
                className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
              >
                Search
              </Link>
              <Link
                prefetch={false}
                href='/about'
                className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700'
              >
                About Me
              </Link>
            </nav>

            <button
              onClick={handleClick}
              className={`${active && styles.active} ${
                styles.openbtn4
              } inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 focus-visible:ring active:text-gray-700 md:text-base sm:hidden`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </header>
        </div>
      </div>
      {active && <HeaderMobile />}
    </>
  )
}

export default Header
