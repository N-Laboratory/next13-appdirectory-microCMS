const List = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">記事一覧</h2>
        </div>
        {/* text - end */}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
            <p className="mb-4 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Security</h3>
            <p className="mb-4 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Cloud</h3>
            <p className="mb-4 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Speed</h3>
            <p className="mb-4 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Support</h3>
            <p className="mb-4 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}

          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 className="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
            <p className="mb-4 text-gray-500">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            <a href="#" className="mt-auto font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
          </div>
          {/* feature - end */}
        </div>
      </div>
    </div>
  )
}

export default List