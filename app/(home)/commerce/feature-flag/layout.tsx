import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutFeatureFlag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Feature Flag"
        title="Manage Feature Flag"
        link="/commerce/feature-flag"
        action="Create"
        apiPath="/feature-flag"
        description="Feature Flag"
        draft={{
          entity: DraftEntity.FeatureFlag,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
