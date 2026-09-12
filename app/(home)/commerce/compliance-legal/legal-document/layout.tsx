import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutLegalDocument({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Legal Document"
        title="Manage Legal Document"
        link="/compliance-legal/legal-document"
        action="Create"
        apiPath="/legal-document"
        description="Legal Document"
        draft={{
          entity: DraftEntity.LegalDocument,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
