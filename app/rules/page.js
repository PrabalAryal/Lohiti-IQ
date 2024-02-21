"use client";
import React, { useState } from "react";
import Nav from "../components/Nav";
import Link from "next/link";
import Footer from "../components/Footer";

const Rulepage = () => {
  return (
    <>
      <Nav />
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen justify-center lg:items-center">
          <div className="mx-auto max-w-xl text-center flex flex-col items-center justify-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="font-extrabold text-orange-700 sm:block">
                {" "}
                Rules{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              <ul className="text-">
                <li>Time limit for this test is 8 minutes.</li>
                <li>Test comprises of 20 questions.</li>
                <li>There is no negative marking.</li>
                <li>
                  Once you submit the test, you will be redirected to the score
                  page.
                </li>
                <li>Click on the start button to begin the test.</li>
                <li>Click on the submit button to submit the test.</li>
                <li>
                  Refrain from using calculators or other external servics
                  during the test.
                </li>
                <li>
                  Unanswered questions will be considered as wrong answers.
                </li>
              </ul>
            </p>

            <Link href="/testiq">
              <button className="block w-full rounded bg-orange-600 px-8 py-3 mt-4 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto">
                Start
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rulepage;
