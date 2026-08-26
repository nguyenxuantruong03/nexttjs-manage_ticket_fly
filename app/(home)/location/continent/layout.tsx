import { DraftEntity } from "@/components/daft/draft-config";

import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutContinent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Continent"
        title="Manage Continent"
        link="/location/continent"
        action="Create"
        apiPath="location/continent"
        description="location/continent"
        draft={{
          entity: DraftEntity.Continent,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </FormPage>
    </FormPageProvider>
  );
}