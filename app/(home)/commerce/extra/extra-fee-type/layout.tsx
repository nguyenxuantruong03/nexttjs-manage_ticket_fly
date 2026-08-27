import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutExtraFeeType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Extra Fee Type"
        title="Manage Extra Fee Type"
        link="/commerce/extra/extra-fee-type"
        action="Create"
        apiPath="/extra-fee-type"
        description="Extra Fee Type"
        draft={{
          entity: DraftEntity.ExtraFeeType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
