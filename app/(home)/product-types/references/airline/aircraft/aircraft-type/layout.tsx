"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyAircraftType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Aircraft Type"
        title="Manage Fly Aircraft Type"
        link="/product-types/references/airline/aircraft-type"
        action="Create"
        apiPath="references/airline/aircraft-type"
        description="Fly-aircraft-type"
        draft={{
          entity: DraftEntity.FlyAircraftType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
