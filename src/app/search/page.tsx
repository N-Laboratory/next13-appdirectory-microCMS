'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import styles from '../page.module.css'

const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()!

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (!e.currentTarget?.keyword) {
      router.push('/error')
    } else {
      params.set('keyword', e.currentTarget.keyword.value)
      router.push('/list?' + params.toString())
    }
  }

  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12 flex-grow'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8 pb-6 sm:pb-8 lg:pb-12'>
        <div className='flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8'>
          <div className='mb-4 sm:mb-8'>
            <h2 className='text-center text-xl font-bold text-indigo-500 sm:text-2xl'>記事検索</h2>
            <p className='text-center text-gray-500'>You can search article</p>
          </div>

          <div className='flex flex-col items-center w-full'>
            <form className='mb-3 flex w-full max-w-md gap-2' onSubmit={handleSubmit}>
              <input
                name='keyword'
                required
                placeholder='search word'
                className='border-black w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-indigo-300 transition duration-100 focus:ring'
              />
              <button className='inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'>
                検索<span className={styles.dliSearch}></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
