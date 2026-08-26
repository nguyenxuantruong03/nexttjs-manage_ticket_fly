"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyFareRuleType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Fare Rule Type"
        title="Manage Fly Fare Rule Type"
        link="/product-types/ticket-fly/fare-rule-type"
        action="Create"
        apiPath="ticket-fly/fare-rule-type"
        description="Fly-fare-rule-type"
        draft={{
          entity: DraftEntity.FlyFareRuleType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
