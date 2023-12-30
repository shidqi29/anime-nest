"use client";

import {
  Button,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { SearchInput } from "@/components/SearchInput";
import { navItem } from "@/lib/constant";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target.value;
    if (input) {
      params.set("query", input);
    } else {
      params.delete("query");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (params.toString() === "") {
      return;
    }
    if (e.key === "Enter") {
      router.push(`/search?${params.toString()}`);
    }
  };

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
          <SearchInput
            placeholder="Search"
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            defaultValue={searchParams.get("query")?.toString()}
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

      {/* Mobile Menu */}
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
