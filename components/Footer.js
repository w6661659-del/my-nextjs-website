import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="text-black  body-font">
      <div className="container flex flex-col items-center px-10 pb-8 mx-auto border-t border-purple-600  sm:flex-row">
        <Link href="/">
          <h1 className="flex items-center justify-center mt-3 text-xl font-medium title-font md:ml-3 md:justify-start">
            MedLabel AI
          </h1>
        </Link>
        <div className="invisible h-5 mt-3 ml-4 border-l border-black md:visible "></div>
        <a
          className="flex items-center justify-center mt-3 font-medium title-font md:justify-start"
          href={
            router.pathname === "/"
              ? `https://github.com/minor/plutonium/edit/main/pages/index.js`
              : `https://github.com/minor/plutonium/edit/main/pages${router.pathname}.js`
          }
        >
          <span className="text-sm md:ml-5">The Future of Medical Data </span>
        </a>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-3 sm:justify-start">
          <a
            aria-label="mail"
            href="maito:me@saurish.com?subject=From MedLabel AI!"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
