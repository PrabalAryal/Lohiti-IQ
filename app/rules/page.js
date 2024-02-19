"use client";
import React, { useState } from "react";
import Nav from "../components/Nav";
import Link from "next/link";
import Footer from "../components/Footer";

const Rulepage = () => {
  const [age, setAge] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!age) {
      alert("Please enter your age");
      return;
    }

    try {
      const response = await fetch("https://localhost:5000/age", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ age }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Nav />
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="font-extrabold text-orange-700 sm:block">
                {" "}
                Rules.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="bg-slate-200 border border-slate-300 flex flex-col justify-center items-center p-2 mt-6 gap-3 rounded-lg">
                <p className="text-xl">Please enter your age: </p>
                <input
                  type="number"
                  min="3"
                  max="70"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className="h-10 rounded-lg p-2 w-20 text-lg font-bold"
                />
                <Link href="/testiq">
                  <button
                    type="submit"
                    disabled={!age || age < 3 || age > 70}
                    className="block w-full rounded bg-orange-600 px-8 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
                  >
                    Start
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rulepage;
