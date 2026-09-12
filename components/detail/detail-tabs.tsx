"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DetailSection } from "./detail-section";
import { resolveDataKey } from "./utils/field-alias";

type Props = {
  groups: Record<string, readonly string[]>;
  data: any;
};

export function DetailTabs({ groups, data }: Props) {
  const tabs = Object.keys(groups);

  return (
    <Tabs defaultValue={tabs[0]}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab} value={tab}>
          <DetailSection
            fields={groups[tab].map((key) => [
              key,
              data[resolveDataKey(key, data)],
            ])}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}