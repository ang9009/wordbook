import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import supabase from "../lib/supabase";
import signIn from "../utils/signIn";

const SignInPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (supabase.auth.user()) {
      router.push("/home");
    }

    supabase.auth.onAuthStateChange((_event, session) => {
      router.push("/home");
    });
  }, []);

  return (
    <>
      <h1>cum</h1>
      <div onClick={signIn}>Sign in</div>
    </>
  );
};

export default SignInPage;
