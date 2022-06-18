import type { NextPage } from "next";
import React from "react";
import ListsSection from "../components/ListsSection";

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <button>+ New list</button>
      <ListsSection />

      <style jsx>{`
        button {
          margin-top: 20px;
          background: none;
          border: none;
          color: var(--primaryColor);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Home;
