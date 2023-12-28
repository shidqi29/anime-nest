"use client";

import { cn } from "@/lib/utils";
import {
  Button,
  Input,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const navItem = [
    {
      name: "Catalog",
      href: "/catalog",
    },
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Collections",
      href: "/collections",
    },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="mb-4 bg-transparent"
    >
      <NavbarContent as="div" className="flex w-full items-center">
        <Link href="/" className="text-base font-bold text-inherit md:text-2xl">
          AnimeNest
        </Link>
        <NavbarContent as="div" className="mx-2 hidden md:flex">
          {navItem.map((item, idx) => (
            <NavbarItem key={idx}>
              <Link
                href={item.href}
                className={cn(
                  "hover:text-foreground",
                  `${
                    pathname === item.href
                      ? "font-medium text-white"
                      : "text-gray-400"
                  }`,
                )}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent as="div" className="w-full items-center">
          <Input
            classNames={{
              base: "max-w-full w-full md:mx-2 h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search"
            size="sm"
            startContent={<MagnifyingGlass size={18} />}
            type="search"
          />
          <Button color="primary" className="hidden md:block">
            Login
          </Button>
          <NavbarContent className="md:hidden">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu className="bg-[var(--background)] pb-10">
        <div className="flex h-full flex-col gap-y-4">
          {navItem.map((item, idx) => (
            <NavbarMenuItem key={idx}>
              <Link
                href={item.href}
                className={cn(
                  "hover:text-foreground",
                  `${
                    pathname === item.href
                      ? "font-medium text-white"
                      : "text-gray-400"
                  }`,
                )}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <Button color="primary">Login</Button>
      </NavbarMenu>
    </Navbar>
  );
};
