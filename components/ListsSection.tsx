import React from "react";

const ListsSection = () => {
  return (
    <>
      <section>
        <div className="card-container arrow">
          <p className="list-title">Vocabulary list</p>
          <p className="list-description">9 words | last updated today</p>
        </div>{" "}
        <div className="card-container arrow">
          <p className="list-title">Vocabulary list</p>
          <p className="list-description">9 words | last updated today</p>
        </div>{" "}
        <div className="card-container arrow">
          <p className="list-title">Vocabulary list</p>
          <p className="list-description">9 words | last updated today</p>
        </div>{" "}
        <div className="card-container arrow">
          <p className="list-title">Vocabulary list</p>
          <p className="list-description">9 words | last updated today</p>
        </div>
      </section>

      <style jsx>{`
        section {
          margin-top: 20px;
          display: grid;
          grid-template-columns: auto auto auto;
          grid-gap: 30px;
        }

        .card-container {
          padding: 25px 20px;
          border: 1px solid var(--primaryBorderColor);
          width: 350.66px;
          background: var(--cardBackgroundColor);
          border-radius: 11px;
          user-select: none;
          cursor: pointer;
          transition: 0.2s all;
          position: relative;
        }

        .card-container:hover {
          background: var(--cardHoverColor);
        }

        .list-title {
          font-family: Inter, sans-serif;
          margin-bottom: 15px;
          font-size: 15px;
        }

        .list-description {
          font-size: 13px;
          color: var(--cardDescriptionColor);
        }

        .arrow::after {
          position: absolute;
          display: inline-block;
          top: 30px;
          right: 20px;
          content: "-->";
          color: var(--cardDescriptionColor);
          transition: all 0.2s ease-out;
        }

        .arrow:hover::after {
          position: absolute;
          color: var(--accentColor);
          transform: translateX(5px);
        }
      `}</style>
    </>
  );
};

export default ListsSection;
