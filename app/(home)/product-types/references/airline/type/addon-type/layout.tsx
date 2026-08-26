"use client";

import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutFlyAddonType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Addon Type"
        title="Manage Fly Addon Type"
        link="/product-types/ticket-fly/addon-type"
        action="Create"
        apiPath="ticket-fly/addon-type"
        description="Fly-addon-type"
        draft={{
          entity: DraftEntity.FlyAddonType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </FormPage>
    </>
  );
}