import React from "react";
import VocabularySection from "../../../components/VocabularySection";
import { GrFormSearch } from "react-icons/gr";
import PrimaryButton from "../../../components/PrimaryButton";

const ListPage = () => {
  return (
    <>
      <h1>Vocabulary list</h1>
      <PrimaryButton
        text={"+ New word"}
        color={"var(--accentColor)"}
        mt={"20px"}
      />
      <input type="text" className="search-bar" placeholder="Search" />
      <VocabularySection />

      <style jsx>{`
        .path {
          color: var(--secondaryTextColor);
          font-size: 12px;
          margin-bottom: 20px;
        }

        h1 {
          margin-top: 20px;
        }

        .search-bar {
          color: var(--primaryTextColor);
          font-size: 13px;
          width: 200px;
          margin-top: 20px;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          border: 1px solid var(--borderColor);
          background: var(--backgroundColor);
          border-radius: 5px;
        }

        .search-bar:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default ListPage;
