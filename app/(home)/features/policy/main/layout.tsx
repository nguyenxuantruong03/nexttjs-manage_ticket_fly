import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutPolicy({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Policy"
        title="Manage Policy"
        link="/features/policy/main"
        action="Create"
        apiPath="/policy"
        description="Policy"
        draft={{
          entity: DraftEntity.Policy,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}