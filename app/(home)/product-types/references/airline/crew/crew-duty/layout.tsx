"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyCrewDuty({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Crew Duty"
        title="Manage Fly Crew Duty"
        link="/product-types/ticket-fly/crew-duty"
        action="Create"
        apiPath="ticket-fly/crew-duty"
        description="Fly-crew-duty"
        draft={{
          entity: DraftEntity.FlyCrewDuty,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
