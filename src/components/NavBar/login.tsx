"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Avatar
              as="button"
              src={session.user?.image || ""}
              showFallback
              name={session.user?.name || "User"}
              isBordered
              className="transition-transform"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="solid">
            <DropdownSection showDivider>
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session.user?.name}</p>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem
                key="dashboard"
                as={Link}
                href="/user/dashboard"
                variant="solid"
              >
                Dashboard
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem
                key="logout"
                as={Link}
                href="/api/auth/signout"
                variant="solid"
                color="danger"
              >
                Logout
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Button
          color="primary"
          className="hidden md:flex"
          as={Link}
          href="/api/auth/signin"
        >
          Login
        </Button>
      )}
    </>
  );
};
