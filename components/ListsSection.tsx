import React from "react";

const ListsSection = () => {
  return (
    <>
      <section>
        <div className="card-container">
          <p className="list-title">Vocabulary list</p>
          <p className="list-description">9 words | last updated today</p>
        </div>{" "}
        <div className="card-container">
          <p className="list-title">Vocabulary list</p>
          <p className="list-description">9 words | last updated today</p>
        </div>{" "}
        <div className="card-container">
          <p className="list-title">Vocabulary list</p>
          <p className="list-description">9 words | last updated today</p>
        </div>
      </section>

      <style jsx>{`
        section {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 350px 350px 350px;
          grid-column-gap: 30px;
        }

        .card-container {
          padding: 30px 20px;
          border: 1px solid #414141;
          width: 100%;
          background: #2d2d2d;
          border-radius: 11px;
        }

        .list-title {
          font-family: Inter, sans-serif;
          margin-bottom: 30px;
        }

        .list-description {
          font-size: 13px;
          color: #737373;
        }
      `}</style>
    </>
  );
};

export default ListsSection;
