import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutPlaceType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Place Type"
        title="Manage Place Type"
        link="/location/place-type"
        action="Create"
        apiPath="location/place-type"
        description="location/place-type"
        draft={{
          entity: DraftEntity.PlaceType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </FormPage>
    </FormPageProvider>
  );
}