"use client";
import React from "react";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const TestIQ = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set items per page to 5
  const [answers, setAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://lohiti-serve.onrender.com/");
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(questions.length / itemsPerPage);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleOptionChange = (questionIndex, selectedOption) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [`${questionIndex}-page-${currentPage}`]: selectedOption,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const checkAllQuestionsAnswered = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(selectedOptions).length;
    if (answeredQuestions < totalQuestions) {
      alert("Please answer all the questions before submitting.");
    }
  };
  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className="h-auto flex flex-col justify-center items-center my-5">
          {currentItems.map((question, index) => (
            <div key={index} className="w-full">
              <div className="border border-slate-400 rounded-lg mx-10 sm:mx-20 my-3 p-3 text-lg">
                <p>{question.question}</p>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="radio"
                      id={`option-${optionIndex}`}
                      name={`question-${index}-page-${currentPage}`}
                      value={option}
                      checked={
                        selectedOptions[`${index}-page-${currentPage}`] ===
                        option
                      }
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
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={checkAllQuestionsAnswered}
            className="flex bg-orange-500 text-white font-bold p-2 rounded-md m-2 
        "
          >
            Submit
          </button>
        </div>
      </form>
      <div className="pagination flex justify-center items-center bg-slate-200">
        {Array(totalPages)
          .fill()
          .map((_, index) => (
            <button
              key={index}
              id={index + 1}
              onClick={handleClick}
              className={`w-12 rounded-md m-2 p-2 ${
                currentPage === index + 1
                  ? "bg-white border text-orange-500 font-bold border-orange-500"
                  : "bg-orange-500 text-white font-bold"
              }`}
            >
              {index + 1}
            </button>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default TestIQ;
