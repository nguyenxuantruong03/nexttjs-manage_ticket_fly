"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyAircraft({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Aircraft"
        title="Manage Fly Aircraft"
        link="/product-types/references/airline/aircraft"
        action="Create"
        apiPath="references/airline/aircraft"
        description="Fly-aircraft"
        draft={{
          entity: DraftEntity.FlyAircraft,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
