import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineStar } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

import PrimaryTextInput from "./PrimaryTextInput";
import { reactModalStyles } from "../data/reactModalStyles";
import PrimaryButton from "./PrimaryButton";
import fetchWordData from "../utils/fetchWordData";
import RadioOption from "./RadioOption";

interface FormInput {
  word: string;
  displayedDefinitionId: string;
  ownerId: string;
}

const VocabularySection = () => {
  //Modal states
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  //Modal content
  const [word, setWord] = useState("");
  const [meaningsData, setMeaningsData] = useState(null);

  const { handleSubmit, register, control } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (!modalIsOpen) {
      setTimeout(() => setModalStep(1), 200);
    }
  }, [modalIsOpen]);

  //For modal step 1 (fetching word definitions)
  const { mutate: mutateStep1 } = useMutation(
    async (input: FormInput) => {
      setWord(input.word);
      return await fetchWordData(input.word);
    },
    {
      onSuccess: (data) => {
        setMeaningsData(data.meanings);
        setModalStep(2);
      },
    }
  );

  const { mutate: mutateStep2 } = useMutation(
    async (input: FormInput) => {
      const i = input.displayedDefinitionId.charAt(0);
      const j = input.displayedDefinitionId.charAt(1);
      const partOfSpeech = meaningsData[i].partOfSpeech;
      const definition = meaningsData[i].definitions[j].definition;
      const example = meaningsData[i].definitions[j]?.example || "";

      console.log(partOfSpeech + definition + example);
    },
    {
      onSuccess: (data) => {},
    }
  );

  return (
    <>
      <PrimaryButton
        text={"+ New word"}
        color={"var(--accentColor)"}
        mt={"20px"}
        onClick={() => setModalIsOpen(true)}
      />

      <section>
        <div className="row-container">
          <div className="word-heading-container">
            <h1 className="word-number">1</h1>
            <div className="word-heading">
              <p className="word">Resolve</p>
              <p className="word-part-of-speech">noun</p>
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ ...reactModalStyles, width: "100vw" }}
        width={"25px"}
        contentLabel="Test"
        closeTimeoutMS={200}
      >
        {modalStep === 1 && (
          <form
            action=""
            onSubmit={handleSubmit((input: FormInput) => mutateStep1(input))}
            className="modal-container"
            id="modal-step-1"
          >
            <h1>New word</h1>
            <PrimaryTextInput
              placeholder={"Word"}
              name={"word"}
              border={"1px solid var(--borderColor)"}
              backgroundColor={"var(--cardBackgroundColor)"}
              margin={"20px 0"}
              register={register}
            />
            <div className="modal-buttons-container">
              <PrimaryButton
                text={"Cancel"}
                padding={"8px 13px"}
                width={"fit-content"}
                color={"var(--primaryTextColor)"}
                background={"none"}
                hoverBgColor={"var(--cardHoverColor)"}
                onClick={() => setModalIsOpen(false)}
              />
              <PrimaryButton
                text={"Add"}
                padding={"8px 13px"}
                width={"fit-content"}
                color={"var(--accentColor)"}
                hoverBgColor={"var(--cardHoverColor)"}
                background={"none"}
                buttonType={"submit"}
                ml={"12px"}
              />
            </div>
          </form>
        )}
        {modalStep === 2 && (
          <div className="modal-container" id="modal-step-2">
            <h1>Select displayed definition for "{word}"</h1>
            <form
              className="radio-options-container"
              onSubmit={handleSubmit((input: FormInput) => mutateStep2(input))}
            >
              <Controller
                control={control}
                name="displayedDefinitionId"
                render={({ field: { onChange, value } }) => {
                  return meaningsData.map((meaningObject, i) => {
                    const partOfSpeech = meaningObject.partOfSpeech;
                    return (
                      <>
                        {meaningObject.definitions.map(
                          (definitionObject, j) => (
                            <RadioOption
                              value={value}
                              name={"hello"}
                              definition={definitionObject.definition}
                              example={definitionObject.example}
                              partOfSpeech={partOfSpeech}
                              id={`${i}${j}`}
                              onChange={onChange}
                              key={`${i}${j}`}
                            />
                          )
                        )}
                      </>
                    );
                  });
                }}
              />
              <PrimaryButton text={"Submit"} buttonType={"submit"} />
            </form>
          </div>
        )}
      </Modal>

      <style jsx>{`
        section {
          width: 100%;
          margin-top: 20px;
          border-radius: 12px;
          border: 1px solid var(--borderColor);
          background: var(--cardBackgroundColor);
        }

        .radio-options-container {
          overflow: scroll;
          height: 500px;
        }

        .text-container {
          width: 100%;
        }

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

        .definition-option {
        }

        .row-container:not(:first-child) {
          border-top: 1px solid var(--borderColor);
        }

        .row-container:hover .buttons-container {
          display: inline;
        }

        .buttons-container {
          display: none;
          right: 20px;
          top: 30px;
          position: absolute;
          color: var(--secondaryTextColor);
        }

        .modal-buttons-container {
          align-self: flex-end;
        }

        .word {
          font-size: 15px;
        }

        .word-info-container {
          font-size: 13px;
          width: 85%;
          height: 100%;
        }

        .modal-container {
          display: flex;
          flex-direction: column;
        }

        #modal-step-1 {
          width: 20vw;
        }

        #modal-step-2 {
          width: 70vw;
        }

        .word-heading-container {
          width: 20%;
          height: 100%;
          word-break: break-all;
          display: flex;
        }

        .definition-option {
          display: flex;
          padding: 20px 0;
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

export default VocabularySection;
