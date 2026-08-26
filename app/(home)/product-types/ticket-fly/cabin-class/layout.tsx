"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyCabinClass({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Cabin Class"
        title="Manage Fly Cabin Class"
        link="/product-types/ticket-fly/cabin-class"
        action="Create"
        apiPath="ticket-fly/cabin-class"
        description="Fly-cabin-class"
        draft={{
          entity: DraftEntity.FlyCabinClass,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
