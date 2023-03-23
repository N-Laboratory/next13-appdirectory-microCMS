import Loading from "../../loading";
import Image from 'next/image'
import useSWRImmutable  from "swr/immutable";
import axios from 'axios';

const postApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/posts',
	headers: { 'Cache-Control': 'no-cache' },
});

// TODO XSS検証する
async function getArticle(title: string) {
  // const res = await postApi.post("/anywhere", { title });
  // return res.data;

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // const url1 = 'https://jsonplaceholder.typicode.com/posts'
  // const res = await fetch(url1, {cache: 'no-store'})
  // return res.json();
//   <>
//   <div>Hello {params.id}</div>
//   <div>article {article}</div>
// </>
  return <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Artile!!!!!!!!!!!!!!!!!</h2>;
}

const Articles = async ({ params }: { params: { title: string } }) => {
  const article = await getArticle(params.title)

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 flex-grow">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        {article}
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Our competitive advantage</h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text. The important factor when using filler text is that the text looks realistic otherwise it will not look very good.<br /><br />
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="#" className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
        </p>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">About us</h2>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>

        <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
          <li>This is a section of some simple filler text</li>
          <li>Also known as placeholder text</li>
          <li>It shares some characteristics of a real written text</li>
        </ul>

        <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>

        <div className="mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
          <Image src="/pg.svg" priority width={100} height={100} alt="Technology illustrations by Storyset" className="h-full w-full object-cover object-center" />
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

        <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
      </div>
    </div>
  )
}

export default Articles