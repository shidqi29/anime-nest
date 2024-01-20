"use client";

import { Tab, Tabs } from "@nextui-org/react";

type TabContentProps = {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
};

export const TabContent: React.FC<TabContentProps> = ({ tabs }) => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Tab Content"
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
