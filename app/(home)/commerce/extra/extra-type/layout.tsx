import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutExtraType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Extra Type"
        title="Manage Extra Type"
        link="/commerce/extra/extra-type"
        action="Create"
        apiPath="/extra-type"
        description="Extra Type"
        draft={{
          entity: DraftEntity.ExtraType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}