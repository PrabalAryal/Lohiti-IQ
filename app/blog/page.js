import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <Nav />
      <h1 className="text-center text-3xl font-semibold text-orange-600 p-4">
        Blog
      </h1>
      <h1 className="bg-slate-100 p-10 mx-10 mb-3 rounded-lg ">
        <p className="mb-4">
          Have you ever thought about taking an IQ test? It's a really popular
          way for people to explore their cognitive abilities and discover their
          true potential. There are so many reasons why taking an IQ test could
          be a great decision for you! For one thing, it can give you a better
          understanding of your own cognitive abilities and help you identify
          areas where you might need a little extra support.
        </p>{" "}
        This can lead to better decision-making about your education, career,
        and personal life. Plus, many employers use IQ tests as part of their
        hiring process, so having a high score could open up lots of exciting
        job opportunities for you! And, of course, taking an IQ test can be a
        really fun and valuable experience for personal growth and development.
        You can set goals, develop new skills, and improve your problem-solving
        abilities. Just remember to choose a reliable test, set aside enough
        time, get plenty of rest, and stay calm and focused. An IQ test is just
        one measure of intelligence and potential, but it's a great way to get
        started on your journey to unlocking your true potential!
      </h1>
      <Footer />
    </>
  );
};

export default Blog;
