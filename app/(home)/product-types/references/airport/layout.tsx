"use client";
import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutFlyAirport({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FormPage
        label="Fly Aiport"
        title="Manage Fly Airport"
        link="/product-types/ticket-fly/fly-airport"
        action="Create"
        apiPath="ticket-fly/fly-airport"
        description="Fly-airport"
        draft={{
          entity: DraftEntity.FlyAirport,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </>
  );
}
