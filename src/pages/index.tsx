import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { NewTweetForm } from "~/components/NewTweetForm";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
    </>
  );
};

export default Home;

