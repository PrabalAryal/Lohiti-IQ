"use client";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";

const ScorePage = () => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await axios.get(
          "https://lohiti-serve.onrender.com//api/score"
        );
        setScore(response.data.score);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching score:", error);
        setLoading(false);
      }
    };

    fetchScore();
  }, []); // Removed isFirstLoad check

  useEffect(() => {
    // Check if the page has been loaded before
    const isFirstLoad = localStorage.getItem('firstLoadDone');
  
    // If the page hasn't been loaded before and the score is fetched, reload the page and set 'firstLoadDone' to true
    if (score !== null && !isFirstLoad) {
      localStorage.setItem('firstLoadDone', 'true');
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }
  }, [score]);
  return (
    <>
      <Nav />

      <div className="justify-center items-center h-[100vh] gap-10 font-semibold">
        <div className="bg-slate-100  h-[50vh] flex items-center justify-center border border-slate-200 rounded-lg p-8 ">
          {loading ? (
            <p>Loading.....</p>
          ) : (
            <p className="text-3xl font-normal flex flex-col justify-center items-center">
              IQ Score:{" "}
              <span className="text-orange-600 font-bold text-8xl">
                {score}
              </span>
            </p>
          )}
        </div>
        <div className="bg-slate-100  h-[50vh] flex flex-col items-center justify-center border border-slate-200 rounded-lg p-8 text-lg font-normal">
          <p className="font-bold text-xl pb-3">Compare your Score.</p>
          <p>
            Above <span className="text-orange-600 font-semibold">130</span>:
            Very Gifted or highly intillegent.
          </p>
          <p>
            <span className="text-orange-600 font-semibold">120-129</span>:
            Gifted.
          </p>
          <p>
            <span className="text-orange-600 font-semibold">110-119</span>:
            Above average.
          </p>
          <p>
            <span className="text-orange-600 font-semibold">90-109</span>:
            Average.
          </p>
          <p>
            <span className="text-orange-600 font-semibold">80-89</span>: Below
            average.
          </p>
          <p>
            <span className="text-orange-600 font-semibold">70-79</span>:
            Borderline intellectual functioning.
          </p>
          <p>
            Below <span className="text-orange-600 font-semibold">70</span>:
            Intellectual disability.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ScorePage;
