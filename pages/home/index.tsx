import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

import ListsSection from "../../components/ListsSection";
import getLists from "../../queries/getLists";

const Home: NextPage = () => {
  const {
    data: { data: lists },
  } = useQuery("lists", () => getLists());

  return (
    <>
      <h1>My lists</h1>
      <ListsSection lists={lists} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("lists", getLists);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
