import React, { useState } from "react";
import Modal from "react-modal";
import supabase from "../lib/supabase";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { reactModalStyles } from "../data/reactModalStyles";
import PrimaryButton from "./PrimaryButton";
import PrimaryTextInput from "./PrimaryTextInput";

interface FormInput {
  listTitle: string;
  ownerId: string;
}

const ListsSection = ({ lists }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { handleSubmit, register, control } = useForm();
  const router = useRouter();

  const { mutate, isLoading, isError, error } = useMutation(
    async (input: FormInput) => {
      const { data: list_data, error: list_error } = await supabase
        .from("lists")
        .insert([
          {
            owner_id: supabase.auth.user().id,
            title: input.listTitle,
          },
        ])
        .single();

      if (list_error) {
        console.log(list_error.message);
      }

      return list_data;
    },
    {
      onSuccess: (list_data) => {
        router.push(`/home/lists/${list_data.id}`);
      },
    }
  );

  return (
    <>
      <PrimaryButton
        text={"+ New list"}
        color={"var(--accentColor)"}
        mt={"20px"}
        onClick={() => {
          setModalIsOpen(true);
        }}
      />

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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={reactModalStyles}
        contentLabel="Test"
        closeTimeoutMS={200}
      >
        <form
          action=""
          onSubmit={handleSubmit((input: FormInput) => mutate(input))}
          className="modal-form-container"
        >
          <h1>New list</h1>
          <PrimaryTextInput
            placeholder={"List title"}
            name={"listTitle"}
            register={register}
            border={"1px solid var(--borderColor)"}
            backgroundColor={"var(--cardBackgroundColor)"}
            margin={"20px 0"}
          />
          <div className="buttons-container">
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
              text={"Create"}
              padding={"8px 13px"}
              width={"fit-content"}
              color={"var(--accentColor)"}
              hoverBgColor={"var(--cardHoverColor)"}
              background={"none"}
              buttonType={"submit"}
              disabled={isLoading}
              ml={"12px"}
            />
          </div>
        </form>
      </Modal>

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

        .modal-form-container {
          width: 20vw;
          display: flex;
          flex-direction: column;
        }

        .buttons-container {
          align-self: flex-end;
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
