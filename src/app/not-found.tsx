import Image from 'next/image'
import Link from 'next/link'

// notFound関数をコールした際に表示される
const NotFound = () => {
  return (
    <div className='center-contents bg-white py-6 sm:py-8 lg:py-12 flex-grow'>
      <div className='w-full mx-auto max-w-screen-lg px-4 md:px-8'>
        <div className='grid gap-8 sm:grid-cols-2'>
          <div className='flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32'>
            <p className='mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base'>
              Error
            </p>
            <h1 className='mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl'>
              Page not found
            </h1>

            <p className='mb-8 text-center text-gray-500 sm:text-left md:text-lg'>
              Please try again.
            </p>

            <Link
              prefetch={false}
              href='/'
              className='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
            >
              Go home
            </Link>
          </div>

          <div className='relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto hidden sm:block'>
            <Image
              src='/404.svg'
              priority
              fill
              alt='404'
              className='absolute inset-0 h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
