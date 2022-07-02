import React from "react";

import VocabularySection from "../../../components/VocabularySection";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import getWords from "../../../queries/getList";
import getList from "../../../queries/getList";
import { useRouter } from "next/router";

const ListPage = () => {
  const router = useRouter();
  const listId = router.query.listId as string;

  const {
    data: { data: list, error },
  } = useQuery(["words", listId], () => getList(listId as string));

  return (
    <>
      <h1>{list.title}</h1>
      <VocabularySection />

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
  console.log(listId);

  await queryClient.prefetchQuery(["words", listId], () => getWords(listId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ListPage;
