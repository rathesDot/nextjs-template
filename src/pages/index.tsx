import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="px-8 dark:text-white dark:bg-black">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 flex-1 flex flex-col justify-center items-center">
        <h1 className="m-0 leading-[1.15] text-[4rem] text-center">
          Welcome to{" "}
          <a
            className="text-[#0070f3] no-underline hover:underline focus:underline active:underline"
            href="https://nextjs.org"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-center my-16 leading-normal text-2xl">
          Get started by editing{" "}
          <code className="bg-[#fafafa] rounded-[5px] p-3 text-[1.1rem] dark:bg-[#111]">
            pages/index.tsx
          </code>
        </p>

        <div className="w-full flex-col flex items-center justify-center flex-wrap md:max-w-[800px] md:flex-row">
          <a
            href="https://nextjs.org/docs"
            className="m-4 p-6 text-left text-inherit no-underline border border-[#eaeaea] rounded-[10px] max-w-[300px] dark:border-[#222] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Documentation &rarr;
            </h2>
            <p className="m-0 text-xl leading-normal">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 p-6 text-left text-inherit no-underline border border-[#eaeaea] rounded-[10px] max-w-[300px] dark:border-[#222] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
          >
            <h2 className="text-2xl font-semibold mb-4">Learn &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="m-4 p-6 text-left text-inherit no-underline border border-[#eaeaea] rounded-[10px] max-w-[300px] dark:border-[#222] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
          >
            <h2 className="text-2xl font-semibold mb-4">Examples &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 p-6 text-left text-inherit no-underline border border-[#eaeaea] rounded-[10px] max-w-[300px] dark:border-[#222] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
          >
            <h2 className="text-2xl font-semibold mb-4">Deploy &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex flex-1 py-8 border-t border-[#eaeaea] justify-center items-center dark:border-[#222]">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center flex-grow"
        >
          Powered by{" "}
          <span className="h-[1em] ml-2">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              className="dark:invert"
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
