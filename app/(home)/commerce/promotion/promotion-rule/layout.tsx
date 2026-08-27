import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutPromotionRule({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Promotion Rule"
        title="Manage Promotion Rule"
        link="/commerce/promotion/promotion-rule"
        action="Create"
        apiPath="/promotion-rule"
        description="Promotion Rule"
        draft={{
          entity: DraftEntity.PromotionRule,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}