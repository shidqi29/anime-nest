"use client";

import { Tab, Tabs } from "@nextui-org/react";

import { Overview, OverviewProps } from "./overview";
import { Relations } from "./relations";

type TabDetailProps = {
  overview: OverviewProps;
};

export const TabDetail = ({
  overview,
  //   relations,
  //   characters,
  //   staff,
  //   review,
}: TabDetailProps) => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: <Overview {...overview} />,
    },
    {
      id: "relations",
      label: "Relations",
      content: <Relations />,
    },
  ];
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        variant="underlined"
        size="lg"
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  );
};
