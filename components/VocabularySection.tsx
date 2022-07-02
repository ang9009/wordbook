import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { reactModalStyles } from "../data/reactModalStyles";
import WordCard from "./WordCard";
import PrimaryButton from "./PrimaryButton";
import AddWordModalStepOne from "./AddWordModalStepOne";
import AddWordModalStepTwo from "./AddWordModalStepTwo";
import { useRouter } from "next/router";
import getList from "../queries/getList";

const VocabularySection = () => {
  const router = useRouter();
  const listId = router.query.listId as string;
  const {
    data: { data: list, error },
  } = useQuery(["words", listId], () => getList(listId as string));

  //Modal states
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  //Modal content
  const [word, setWord] = useState("");
  const [meaningsData, setMeaningsData] = useState([]);

  const { handleSubmit, register, control } = useForm();

  useEffect(() => {
    if (!modalIsOpen) {
      setTimeout(() => setModalStep(1), 200);
    }
  }, [modalIsOpen]);

  return (
    <>
      <PrimaryButton
        text={"+ New word"}
        color={"var(--accentColor)"}
        mt={"20px"}
        onClick={() => setModalIsOpen(true)}
      />

      <section>
        {list.words &&
          list.words.map((wordObject, i) => (
            <WordCard wordObject={wordObject} number={i} key={i} />
          ))}
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
          <AddWordModalStepOne
            handleSubmit={handleSubmit}
            register={register}
            setModalIsOpen={setModalIsOpen}
            setWord={setWord}
            setMeaningsData={setMeaningsData}
            setModalStep={setModalStep}
          />
        )}
        {modalStep === 2 && (
          <AddWordModalStepTwo
            word={word}
            handleSubmit={handleSubmit}
            meaningsData={meaningsData}
            control={control}
            setModalIsOpen={setModalIsOpen}
          />
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
      `}</style>
    </>
  );
};

export default VocabularySection;
