"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyDelayReason({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Delay Reason"
        title="Manage Fly Delay Reason"
        link="/product-types/ticket-fly/delay-reason"
        action="Create"
        apiPath="ticket-fly/delay-reason"
        description="Fly-delay-reason"
        draft={{
          entity: DraftEntity.FlyDelayReason,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </FormPage>
    </>
  );
}