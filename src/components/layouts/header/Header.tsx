import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
          <Link style={{ position: 'relative'}} href="/" className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
            N-LAB
          </Link>

          <nav className="hidden gap-12 lg:flex">
            <Link href="/" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</Link>
            <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">All Articles</Link>
            <Link href="/about" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About Me</Link>
          </nav>

          <Link href="/about" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Me</Link>

          <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Menu
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;