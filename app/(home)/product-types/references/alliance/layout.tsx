"use client";

import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";

export default function LayoutFlyAlliance({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPage
      label="Fly Alliance"
      title="Manage Fly Alliance"
      link="/product-types/references/alliance"
      action="Create"
      apiPath="alliance"
      description="Alliance"
      draft={{
        entity: DraftEntity.FlyAlliance,
      }}
    >
      <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
    </FormPage>
  );
}
