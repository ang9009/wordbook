import React from "react";
import Modal from "react-modal";
import { useMutation, useQuery } from "react-query";
import supabase from "../lib/supabase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { reactModalStyles } from "../data/reactModalStyles";
import PrimaryTextInput from "./PrimaryTextInput";
import PrimaryButton from "./PrimaryButton";
import getAllLists from "../queries/getAllLists";

interface FormInput {
  listTitle: string;
  ownerId: string;
}

const AddListModal = ({ modalIsOpen, setModalIsOpen }) => {
  const { handleSubmit, register, control } = useForm();
  const router = useRouter();
  const {
    data: { data: lists },
  } = useQuery("lists", () => getAllLists());

  const { mutate, isLoading, isError, error } = useMutation(
    async (input: FormInput) => {
      if (lists.find((list) => list.title === input.listTitle)) {
        toast(`The list "${input.listTitle}" already exists!`, {});

        return;
      }

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
          className="add-list-modal-container"
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
        .add-list-modal-container {
          width: 20vw;
          display: flex;
          flex-direction: column;
        }

        .buttons-container {
          align-self: flex-end;
        }
      `}</style>
    </>
  );
};

export default AddListModal;
