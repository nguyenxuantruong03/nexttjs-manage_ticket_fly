import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutPriceRuleType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Price Rule Type"
        title="Manage Price Rule Type"
        link="/commerce/price-rule-type"
        action="Create"
        apiPath="/price-rule-type"
        description="Price Rule Type"
        draft={{
          entity: DraftEntity.PriceRuleType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}