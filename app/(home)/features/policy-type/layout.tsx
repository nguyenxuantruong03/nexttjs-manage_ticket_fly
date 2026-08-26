import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutPolicyType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Policy Type"
        title="Manage Policy Type"
        link="/features/policy-type"
        action="Create"
        apiPath="/policy-type"
        description="Policy Type"
        draft={{
          entity: DraftEntity.PolicyType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}