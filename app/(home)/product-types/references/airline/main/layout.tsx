"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyAirline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Airline"
        title="Manage Fly Airline"
        link="/product-types/references/airline/main"
        action="Create"
        apiPath="references/airline/airline"
        description="Fly-airline"
        draft={{
          entity: DraftEntity.FlyAirline,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
