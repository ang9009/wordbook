import type { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

import ListsSection from "../../components/ListsSection";
import getAllLists from "../../queries/getAllLists";
import PrimaryButton from "../../components/PrimaryButton";
import AddListModal from "../../components/AddListModal";
import supabase from "../../lib/supabase";

const Home: NextPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <h1>My lists</h1>
      <PrimaryButton
        text={"+ New list"}
        color={"var(--accentColor)"}
        mt={"20px"}
        onClick={() => {
          setModalIsOpen(true);
        }}
      />
      <ListsSection />
      <AddListModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const user = supabase.auth.api.getUserByCookie(context);
  // console.log(user);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("lists", getAllLists);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
