'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import styles from './Form.module.css'

const Form = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('keyword', e.currentTarget.keyword.value)
    router.push('/list?' + params.toString())
  }

  return (
    <form
      className='flex w-full gap-2 sm:max-w-md mr-auto ml-auto lg:mr-0 lg:ml-0'
      onSubmit={handleSubmit}
    >
      <input
        name='keyword'
        required
        placeholder='search word'
        className='w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-indigo-300 transition duration-100 focus:ring'
      />
      <button className='inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'>
        検索<span className={styles.dliSearch}></span>
      </button>
    </form>
  )
}

export default Form
