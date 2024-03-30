"use client";

import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import { api } from "~/trpc/server";

export default function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  const { isSignedIn, user } = useUser();

  return (
    <main className="">
      <div className="">
        {isSignedIn ? (
          <SignOutButton>Sign Out</SignOutButton>
        ) : (
          <SignInButton>Sign In</SignInButton>
        )}
        <UserButton />
      </div>
    </main>
  );
}
