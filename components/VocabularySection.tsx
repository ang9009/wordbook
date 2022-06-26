import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PrimaryTextInput from "./PrimaryTextInput";

const VocabularySection = () => {
  return (
    <>
      <section>
        <div className="row-container">
          <div className="word-heading-container">
            <h1 className="word-number">1</h1>
            <div className="word-heading">
              <p className="word">Resolveqpoewrihqpoweirh qweporhqwpoerhiqw</p>
              <p className="word-class">noun</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="word-info-container">
            <p className="word-definition">
              firm determination to do something.
            </p>
            <p className="example-sentence">
              "she received information that strengthened her resolve"
            </p>
          </div>
          <div className="buttons-container">
            <AiOutlineStar size={"18px"} />
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          width: 100%;
          margin-top: 20px;
          border-radius: 12px;
          border: 1px solid var(--borderColor);
          background: var(--cardBackgroundColor);
        }

        .text-container {
          width: 100%;
        }

        .row-container {
          display: flex;
          align-items: center;
          cursor: pointer;
          min-height: 109px;
          height: 100%;
        }

        .divider {
          width: 1px;
          height: 100%;
          background: black;
        }

        .row-container:not(:first-child) {
          border-top: 1px solid var(--borderColor);
        }

        .row-container:hover .buttons-container {
          display: inline;
        }

        .buttons-container {
          display: none;
          color: var(--secondaryTextColor);
        }

        .word {
          font-size: 15px;
        }

        .word-info-container {
          font-size: 13px;
          padding: 25px 20px;
        }

        .word-heading-container {
          width: 15%;
          padding: 25px 20px;
          word-break: break-all;
          display: flex;
        }

        .word-number {
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 12px;
          font-weight: bold;
          background: var(--primaryTextColor);
          color: var(--cardBackgroundColor);
        }

        .word-heading {
          width: 80%;
          margin-left: 12px;
        }

        .word-class {
          font-style: italic;
          font-size: 12px;
          color: var(--secondaryTextColor);
        }

        .word-definition {
          color: var(--secondaryTextColor);
        }

        .example-sentence {
          color: var(--tertiaryTextColor);
          margin-top: 12px;
        }
      `}</style>
    </>
  );
};

export default VocabularySection;
