"use client";

import { Tab, Tabs } from "@nextui-org/react";

import { Overview, OverviewProps } from "./overview";
import { Characters, CharactersProps } from "./characters";
import { Staff, StaffProps } from "./staff";

type TabDetailProps = {
  overview: OverviewProps;
  characters: CharactersProps;
  staff: StaffProps;
};

export const TabDetail = ({
  overview,
  characters,
  staff,
  //   review,
}: TabDetailProps) => {
  const tabs = [
    {
      label: "Overview",
      content: <Overview {...overview} />,
    },
    {
      label: "Characters",
      content: <Characters {...characters} />,
    },
    {
      label: "Staff",
      content: <Staff {...staff} />,
    },
  ];
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Detail Anime"
        items={tabs}
        variant="underlined"
        size="lg"
      >
        {(item) => (
          <Tab key={item.label} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  );
};
