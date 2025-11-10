import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="w-full sticky-nav">
      <div className="flex flex-col flex-wrap max-w-5xl p-2.5 mx-auto md:flex-row">
        <div className="flex flex-row items-center justify-between p-2 md:p-1">
          <Link href="/">
            <h1 className="mb-4 text-2xl font-medium text-black transition duration-300 hover:text-gray-300  md:mb-0">
              MedLabel
            </h1>
          </Link>
          <button
            className="px-3 py-1 pb-4 ml-auto text-black outline-none  md:hidden"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="3" y1="6" y2="6" x2="21"></line>
              <line x1="3" y1="12" y2="12" x2="21"></line>
              <line x1="3" y1="18" y2="18" x2="21"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="flex flex-wrap items-center justify-center pt-1 pl-2 ml-1 space-x-8 md:space-x-16 md:mx-auto md:pl-14">
            <Link
              href="/Clinics"
              className="text-black transition duration-300  hover:text-gray-300"
            >
              Clinics
            </Link>
            <Link
              href="/Datasets"
              className="text-black transition duration-300  hover:text-gray-300"
            >
              Datasets
            </Link>
            <Link href="/About">
              <h1 className="text-black transition duration-300  hover:text-gray-300">
              About
              </h1>
            </Link>
            <Link href="/Contact">
              <h1 className="text-black transition duration-300  hover:text-gray-300">
              Contact
              </h1>
            </Link>
            
          
          </div>
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible  hover:shadow-md transition duration-300 mr-4 text-black border px-3 py-1.5 rounded  md:visible"
          >
            Sign in
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible md:visible px-3 py-1.5 transition-colors hover:bg-gray-800  text-white  bg-black  rounded"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
