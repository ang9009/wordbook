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
        <input
          type="radio"
          id={id}
          name={name}
          onChange={() => {
            onChange(id);
          }}
          checked={value === id}
        />
        <label htmlFor={id}>
          <p className="part-of-speech">{partOfSpeech}</p>
          <p className="definition">{definition}</p>
          <p className="example">{example}</p>
        </label>
      </div>

      <style jsx>{`
        .option-container {
          padding: 20px 0;
          border-top: 1px solid var(--borderColor);
          display: flex;
        }

        .option-container:first-child {
          margin-top: 20px;
        }

        .option-container:last-child {
          border-bottom: 1px solid var(--borderColor);
        }

        input {
          cursor: pointer;
        }

        label {
          color: var(--primaryTextColor);
          margin-left: 30px;
          cursor: pointer;
          width: 100%;
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
