import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutRegulation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Regulation"
        title="Manage Regulation"
        link="/commerce/compliance-legal/regulation"
        action="Create"
        apiPath="/regulation"
        description="Regulation"
        draft={{
          entity: DraftEntity.Regulation,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
