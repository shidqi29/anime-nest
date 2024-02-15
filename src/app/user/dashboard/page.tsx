import { getServerSession } from "next-auth";
import React from "react";
import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1>Hello, {session?.user?.name}</h1>
      <div className="flex gap-x-4">
        <Link href="/user/dashboard/collection">Collection</Link>
        <Link href="/user/dashboard/comment">Comment</Link>
      </div>
    </div>
  );
}
