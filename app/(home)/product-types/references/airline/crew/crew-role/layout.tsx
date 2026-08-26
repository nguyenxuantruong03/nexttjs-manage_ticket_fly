"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyCrewRole({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Crew Role"
        title="Manage Fly Crew Role"
        link="/product-types/references/airline/crew/crew-role"
        action="Create"
        apiPath="references/airline/crew/crew-role"
        description="Fly-crew-role"
        draft={{
          entity: DraftEntity.FlyCrewRole,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
