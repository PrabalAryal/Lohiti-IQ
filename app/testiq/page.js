"use client";
import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";

const TestIQ = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          submitAnswers();
          router.push("/score");
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/questions");
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const submitAnswers = async () => {
    const allAnswers = [];
    questions.forEach((question, index) => {
      const selectedOption = selectedOptions[`${index}`] || "";
      allAnswers.push(selectedOption);
    });

    console.log(allAnswers);

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/answers", {
        answers: allAnswers,
      });
      console.log(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleOptionChange = (questionIndex, selectedOption) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [`${questionIndex}`]: selectedOption,
    }));
  };

  const handleSubmit = (event) => {};

  return (
    <>
      <div className="flex flex-col ">
        <div className=" sticky top-0 left-0 bg-orange-200 border-2 border-orange-500 flex items-center justify-center h-10 font-bold gap-2">
          <div> Time Left:</div>
          <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="h-auto flex flex-col justify-center items-center my-5">
            {questions.map((question, index) => (
              <div key={index} className="w-full">
                <div className="border border-slate-400 rounded-lg mx-10 sm:mx-20 my-3 p-3 text-lg">
                  <p>{question.question}</p>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="radio"
                        id={`option-${optionIndex}`}
                        name={`question-${index}`}
                        value={option}
                        checked={selectedOptions[`${index}`] === option}
                        onChange={() => handleOptionChange(index, option)}
                        className="form-radio ml-4 mr-4 w-4 h-4 text-orange-500 border-orange-500 transition duration-300 ease-in-out hover:text-white hover:bg-orange-500"
                      />
                      <label htmlFor={`option-${optionIndex}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mb-6">
            <button
              type="button"
              onClick={() => {
                submitAnswers();
                router.push("/score");
              }}
              className="flex bg-orange-500 text-white font-bold p-3 rounded-md m-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default TestIQ;
