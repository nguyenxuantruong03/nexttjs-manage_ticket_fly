"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlySeatType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Seat Type"
        title="Manage Fly Seat Type"
        link="/product-types/ticket-fly/seat-type"
        action="Create"
        apiPath="ticket-fly/seat-type"
        description="Fly-seat-type"
        draft={{
          entity: DraftEntity.FlySeatType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}