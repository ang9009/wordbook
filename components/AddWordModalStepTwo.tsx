import React from "react";
import vocabSectionFormInput from "../types/vocabSectionFormInput.interface";
import { Controller } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import supabase from "../lib/supabase";

import RadioOption from "./RadioOption";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/router";

const AddWordModalStepTwo = ({
  word,
  handleSubmit,
  meaningsData,
  control,
  setModalIsOpen,
}) => {
  const { query } = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (input: vocabSectionFormInput) => {
      const i = input.displayedDefinitionId.charAt(0);
      const j = input.displayedDefinitionId.charAt(1);
      const partOfSpeech = meaningsData[i].partOfSpeech;
      const definition = meaningsData[i].definitions[j].definition;
      const example = meaningsData[i].definitions[j]?.example;
      const listId = query.listId;

      const wordObject = {
        word: word,
        part_of_speech: partOfSpeech,
        definition: definition,
        example: example,
        list_id: listId,
      };

      const { data: word_data, error: list_error } = await supabase
        .from("words")
        .insert([wordObject])
        .single();

      queryClient.setQueryData(["words", listId], (oldData: any) => {
        const oldWords = oldData.data.words;

        return {
          data: { ...oldData, words: [...oldWords, wordObject] },
        };
      });

      return word_data;
    },
    {
      onSuccess: (word_data) => {
        setModalIsOpen(false);
      },
    }
  );

  return (
    <>
      <div className="modal-container" id="modal-step-2">
        <h1>Select displayed definition for "{word}"</h1>
        <form
          onSubmit={handleSubmit((input: vocabSectionFormInput) =>
            mutate(input)
          )}
        >
          <div className="radio-options-container">
            <Controller
              control={control}
              name="displayedDefinitionId"
              render={({ field: { onChange, value } }) => {
                return meaningsData.map((meaningObject, i) => {
                  const partOfSpeech = meaningObject.partOfSpeech;
                  return (
                    <div key={i}>
                      {meaningObject.definitions.map((definitionObject, j) => (
                        <RadioOption
                          value={value}
                          name={"wordModal"}
                          definition={definitionObject.definition}
                          example={definitionObject.example}
                          partOfSpeech={partOfSpeech}
                          id={`${i}${j}`}
                          onChange={onChange}
                          key={`${i}${j}`}
                        />
                      ))}
                    </div>
                  );
                });
              }}
            />
          </div>
          {/*TODO: add disabled when no option has been chosen*/}
          <PrimaryButton
            text={"Submit"}
            padding={"8px 13px"}
            width={"fit-content"}
            color={"var(--accentColor)"}
            background={"none"}
            hoverBgColor={"var(--cardHoverColor)"}
            buttonType={"submit"}
          />
        </form>
      </div>

      <style jsx>{`
        .radio-options-container {
          overflow: scroll;
          height: 500px;
        }

        .modal-container {
          display: flex;
          flex-direction: column;
        }

        #modal-step-2 {
          width: 70vw;
        }
      `}</style>
    </>
  );
};

export default AddWordModalStepTwo;
