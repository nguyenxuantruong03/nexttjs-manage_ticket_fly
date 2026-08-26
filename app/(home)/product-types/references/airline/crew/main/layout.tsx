"use client";

import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

export default function LayoutFlyCrew({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Crew"
        title="Manage Fly Crew"
        link="/product-types/references/airline/crew/main"
        action="Create"
        apiPath="fly-crew"
        description="Fly-crew"
        draft={{
          entity: DraftEntity.FlyCrew,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
