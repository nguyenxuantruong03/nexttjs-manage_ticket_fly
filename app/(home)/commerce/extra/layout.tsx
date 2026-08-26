import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutExtra({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Extra"
        title="Manage Extra"
        link="/commerce/extra"
        action="Create"
        apiPath="/extra"
        description="Extra"
        draft={{
          entity: DraftEntity.Extra,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}