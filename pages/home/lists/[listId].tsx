import React, { useEffect, useState } from "react";

import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";

import { reactModalStyles } from "../../../data/reactModalStyles";
import getWords from "../../../queries/getList";
import VocabularySection from "../../../components/VocabularySection";
import getList from "../../../queries/getList";
import AddWordModalStepOne from "../../../components/AddWordModalStepOne";
import AddWordModalStepTwo from "../../../components/AddWordModalStepTwo";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../../components/PrimaryButton";
import Modal from "react-modal";

const ListPage = () => {
  const router = useRouter();
  const listId = router.query.listId as string;

  //Modal states
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  //Modal content
  const [word, setWord] = useState("");
  const [meaningsData, setMeaningsData] = useState([]);

  useEffect(() => {
    if (!modalIsOpen) {
      setTimeout(() => setModalStep(1), 200);
    }
  }, [modalIsOpen]);

  const { handleSubmit, register, control } = useForm();

  const {
    data: { data: list, error },
  } = useQuery(["words", listId], () => getList(listId as string));

  return (
    <>
      <h1>{list.title}</h1>

      <PrimaryButton
        text={"+ New word"}
        color={"var(--accentColor)"}
        mt={"20px"}
        onClick={() => setModalIsOpen(true)}
      />

      <VocabularySection />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ ...reactModalStyles, width: "100vw" }}
        width={"25px"}
        contentLabel="Test"
        closeTimeoutMS={200}
      >
        {/*TODO: ask alan about this*/}
        {modalStep === 1 && (
          <AddWordModalStepOne
            handleSubmit={handleSubmit}
            register={register}
            setModalIsOpen={setModalIsOpen}
            setWord={setWord}
            setMeaningsData={setMeaningsData}
            setModalStep={setModalStep}
            listId={listId}
            word={word}
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
        .path {
          color: var(--secondaryTextColor);
          font-size: 12px;
          margin-bottom: 20px;
        }

        h1 {
          margin-top: 20px;
        }

        .search-bar {
          color: var(--primaryTextColor);
          font-size: 13px;
          width: 200px;
          margin-top: 20px;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          border: 1px solid var(--borderColor);
          background: var(--backgroundColor);
          border-radius: 5px;
        }

        .search-bar:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const listId = context.query.listId as string;

  await queryClient.prefetchQuery(["words", listId], () => getWords(listId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ListPage;
