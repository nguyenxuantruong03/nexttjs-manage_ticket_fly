import FormPage from "@/components/form/form";

import { FormPageProvider } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutPackage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Package"
        title="Manage Package"
        link="/commerce/package"
        action="Create"
        apiPath="/package"
        description="Package"
        draft={{
          entity: DraftEntity.Package,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}