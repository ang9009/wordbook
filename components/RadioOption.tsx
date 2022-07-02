import React from "react";

interface Props {
  partOfSpeech: string;
  definition: string;
  example: string;
  name: string;
  id: string;
  value: string;
  onChange: (e) => any;
}

const RadioOption: React.FC<Props> = ({
  name,
  id,
  partOfSpeech,
  definition,
  example,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="option-container">
        <label htmlFor={id}>
          <p className="part-of-speech">{partOfSpeech}</p>
          <p className="definition">{definition}</p>
          <p className="example">{example}</p>
        </label>
        <input
          type="radio"
          id={id}
          name={name}
          onChange={() => {
            onChange(id);
          }}
          checked={value === id}
        />
      </div>

      <style jsx>{`
        .option-container {
          padding: 20px 15px;
          border-top: 1px solid var(--borderColor);
          display: flex;
        }

        .option-container:first-child {
          margin-top: 20px;
        }

        .option-container:last-child {
          border-bottom: 1px solid var(--borderColor);
          margin-bottom: 20px;
        }

        input {
          -webkit-appearance: none;
          cursor: pointer;
          width: 20px;
          height: 20px;
          accent-color: var(--accentColor);
          border-radius: 50%;
          outline: none;
          border: 2px solid gray;
          align-self: center;
        }

        input:before {
          content: "";
          display: block;
          width: 50%;
          height: 50%;
          margin: 25% auto;
          border-radius: 50%;
        }

        input:checked:before {
          background: var(--cardBackgroundColor);
        }

        input:checked {
          background: var(--accentColor);
          border-color: var(--accentColor);
        }

        label {
          color: var(--primaryTextColor);
          cursor: pointer;
          width: calc(100% - 20px);
        }

        .part-of-speech {
          color: var(--secondaryTextColor);
          font-style: italic;
        }

        .definition {
          margin-top: 15px;
        }

        .example {
          margin-top: 15px;
          color: var(--secondaryTextColor);
        }
      `}</style>
    </>
  );
};

export default RadioOption;
