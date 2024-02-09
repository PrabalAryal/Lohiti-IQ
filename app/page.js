import React from "react";
import Nav from "./components/Nav";
import Link from "next/link";
import Footer from "./components/Footer";

function page() {
  return (
    <div>
      <Nav />

      <section className="relative">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-black font-extrabold sm:text-5xl sm:text-left">
              Test Your IQ.
              <strong className="block font-extrabold text-orange-700">
                For Free!
              </strong>
            </h1>

            <p className=" text-slate-600 mt-4 max-w-lg sm:text-xl/relaxed sm:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 justify-center sm:justify-start flex flex-wrap gap-4 text-center md:justify ">
              <Link href="/rulepage">
                <div className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto">
                  Get Started
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default page;
