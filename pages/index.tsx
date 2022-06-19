import type { NextPage } from "next";
import React from "react";
import ListsSection from "../components/ListsSection";
import { AiOutlinePlus } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <>
      <h1>My lists</h1>
      <button>+ New list</button>
      <ListsSection />

      <style jsx>{`
        button {
          margin-top: 20px;
          border-radius: 5px;
          border: none;
          background: none;
          color: var(--accentColor);
          cursor: pointer;
        }

        h1 {
        }
      `}</style>
    </>
  );
};

export default Home;
