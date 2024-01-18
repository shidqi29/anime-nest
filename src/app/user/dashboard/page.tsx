import { getServerSession } from "next-auth";
import React from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Hello, {session?.user?.name}</h1>
    </div>
  );
}
