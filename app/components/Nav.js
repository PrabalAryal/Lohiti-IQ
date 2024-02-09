"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const navLinks = [
    { name: "TestIQ", path: "/rulepage" },
    { name: "Blog", path: "/blog" },
    { name: "Ranking", path: "/ranking" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md border-b border-slate-300">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center sm:justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link href="/">
                <h1 className=" text-3xl font-bold text-orange-600">LOGO</h1>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {navLinks.map((link) => (
                    <Link href={link.path} key={link.name}>
                      <li className="text-gray-500 text-lg transition hover:text-gray-500/75">
                        {link.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link href="#">
                  <div className="hidden sm:flex">
                    <p className="rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white">
                      Login
                    </p>
                  </div>
                </Link>

                <Link href="#">
                  <div className="hidden sm:flex">
                    <p className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-600">
                      Register
                    </p>
                  </div>
                </Link>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="block md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-4 text-sm mb-4 ">
                {navLinks.map((link) => (
                  <Link href={link.path} key={link.name}>
                    <li className="text-gray-500 w-[400px] rounded-lg p-1 flex justify-center items-center text-lg transition hover:text-gray-500/75 border border-slate-300 ">
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
