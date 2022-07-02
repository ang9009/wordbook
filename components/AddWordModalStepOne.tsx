import React from "react";
import PrimaryTextInput from "./PrimaryTextInput";
import PrimaryButton from "./PrimaryButton";
import vocabSectionFormInput from "../types/vocabSectionFormInput.interface";
import { useMutation } from "react-query";
import fetchWordData from "../utils/fetchWordData";

const AddWordModalStepOne = ({
  handleSubmit,
  register,
  setModalIsOpen,
  setWord,
  setMeaningsData,
  setModalStep,
}) => {
  const { mutate } = useMutation(
    async (input: vocabSectionFormInput) => {
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

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit((input: vocabSectionFormInput) => mutate(input))}
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

      <style jsx>{`
        .modal-container {
          display: flex;
          flex-direction: column;
        }

        .modal-buttons-container {
          align-self: flex-end;
        }

        #modal-step-1 {
          width: 20vw;
        }
      `}</style>
    </>
  );
};

export default AddWordModalStepOne;
