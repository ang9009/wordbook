import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import Word from "../types/word.interface";

interface Props {
  wordObject: Word;
  number: number;
}

const WordCard: React.FC<Props> = ({ wordObject, number }) => {
  return (
    <>
      <div className="row-container">
        <div className="word-heading-container">
          <h1 className="word-number">{number + 1}</h1>
          <div className="word-heading">
            <p className="word">{wordObject.word}</p>
            <p className="word-part-of-speech">{wordObject.part_of_speech}</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="word-info-container">
          <p className="word-definition">{wordObject.definition}</p>
          <p className="example-sentence">{wordObject.example}</p>
        </div>
        <div className="buttons-container">
          <AiOutlineStar size={"18px"} />
        </div>
      </div>

      <style jsx>{`
        .row-container {
          display: flex;
          position: relative;
          align-items: center;
          cursor: pointer;
          height: 109px;
          padding: 30px 20px;
        }

        .divider {
          width: 1px;
          margin: 0 20px;
          background: var(--borderColor);
          height: calc(100% + 60px);
        }

        .row-container:not(:first-child) {
          border-top: 1px solid var(--borderColor);
        }

        .row-container:hover .buttons-container {
          display: inline;
        }

        .word {
          font-size: 15px;
        }

        .word-info-container {
          font-size: 13px;
          width: 85%;
          height: 100%;
        }

        .word-heading-container {
          width: 20%;
          height: 100%;
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
          width: calc(100% - 29px);
          margin-left: 12px;
        }

        .word-part-of-speech {
          margin-top: 5px;
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

export default WordCard;
