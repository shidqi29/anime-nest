"use client";

import {
  Button,
  Input,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
        <NavbarContent as="div" className="hidden md:flex">
          <Link href="/" className="text-2xl font-bold text-inherit">
            AnimeNest
          </Link>
          <NavbarContent as="div" className="mx-2">
            {navItem.map((item, idx) => (
              <NavbarItem key={idx}>
                <Link color="foreground" href={item.href}>
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="w-full items-center">
          <Input
            classNames={{
              base: "max-w-full w-full mx-2 h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<MagnifyingGlass size={18} />}
            type="search"
          />
          <Button color="primary">Login</Button>
          <NavbarContent className="md:hidden">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu className="bg-[var(--background)]">
        {navItem.map((item, idx) => (
          <NavbarMenuItem key={idx}>
            <Link href={item.href} color="foreground" className="w-full">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
