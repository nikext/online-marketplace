"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <main className="">
      <div className="">hi</div>
    </main>
  );
}
