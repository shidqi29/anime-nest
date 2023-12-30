"use client";

import { Input } from "@nextui-org/react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

type SearchInputProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
};

export const SearchInput = ({
  placeholder,
  onChange,
  onSubmit,
  value,
}: SearchInputProps) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        classNames={{
          base: "max-w-full w-full md:mx-2 h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 border border-default-500/60 bg-default-500/20 ",
        }}
        placeholder={placeholder}
        size="sm"
        startContent={<MagnifyingGlass size={18} />}
        type="search"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};
