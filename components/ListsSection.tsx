import React, { useState } from "react";
import { useRouter } from "next/router";

import { useQuery } from "react-query";
import getAllLists from "../queries/getAllLists";

const ListsSection = () => {
  const router = useRouter();
  const {
    data: { data: lists },
  } = useQuery("lists", () => getAllLists());

  return (
    <>
      <section>
        {lists.map((list) => {
          return (
            <div
              className="card-container arrow"
              onClick={() => router.push(`/home/lists/${list.id}`)}
              key={list.id}
            >
              <p className="list-title">{list.title}</p>
              <p className="list-description">9 words | last updated today</p>
            </div>
          );
        })}
      </section>

      <style jsx>{`
        section {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 351px 351px 351px;
          grid-gap: 30px;
        }

        .card-container {
          padding: 25px 20px;
          border: 1px solid var(--borderColor);
          width: 350.66px;
          background: var(--cardBackgroundColor);
          border-radius: 12px;
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
          color: var(--secondaryTextColor);
        }

        .arrow::after {
          position: absolute;
          display: inline-block;
          top: 30px;
          right: 20px;
          content: "-->";
          color: var(--secondaryTextColor);
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
