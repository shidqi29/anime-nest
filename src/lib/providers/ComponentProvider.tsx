"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function ComponentProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
