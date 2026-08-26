import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutServiceType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Service Type"
        title="Manage Service Type"
        link="/catalog/service-type"
        action="Create"
        apiPath="/service-type"
        description="Service Type"
        draft={{
          entity: DraftEntity.ServiceType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}