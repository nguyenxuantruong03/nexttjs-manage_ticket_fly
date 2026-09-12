import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutRegulationCategory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Regulation Category"
        title="Manage Regulation Category"
        link="/commerce/compliance-legal/regulation-category"
        action="Create"
        apiPath="/regulation-category"
        description="Regulation Category"
        draft={{
          entity: DraftEntity.RegulationCategory,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}