import { Image } from "@mantine/core";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section>
      <nav className="relative py-6 bg-white z-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center relative">
            <a className="inline-block text-lg font-bold" href="#">
              <Image
                width="auto"
                height="auto"
                className="h-10"
                src="/logos/logo-saturn-dark.svg"
                alt=""
              />
            </a>
            <div className="xl:hidden ml-auto">
              <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-12">
              <li className="group relative">
                <Link
                  className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium no-underline"
                  href="/story"
                >
                  Our story
                </Link>
              </li>
              <li>
                <a
                  className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  href="#"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                  href="#"
                >
                  Articles
                </a>
              </li>
            </ul>
            <div className="hidden xl:block ml-auto">
              <div className="flex items-center">
                <a
                  className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
                  href="#"
                >
                  Sign In
                </a>
                <a
                  className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-orange-50 bg-orange-50 rounded-md overflow-hidden transition duration-300"
                  href="#"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                  <span className="relative">Create an account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-16">
            <a className="mr-auto text-2xl font-medium leading-none" href="#">
              <Image
                width="auto"
                height="auto"
                className="h-10"
                src="/logos/logo-saturn-dark.svg"
                alt=""
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
