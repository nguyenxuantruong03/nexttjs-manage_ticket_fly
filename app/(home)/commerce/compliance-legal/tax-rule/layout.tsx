import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutTaxRule({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Tax Rule"
        title="Manage Tax Rule"
        link="/commerce/compliance-legal/tax-rule"
        action="Create"
        apiPath="/tax-rule"
        description="Tax Rule"
        draft={{
          entity: DraftEntity.TaxRule,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}