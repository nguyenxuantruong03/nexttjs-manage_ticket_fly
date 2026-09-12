import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutReasonContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Reason Context"
        title="Manage Reason Context"
        link="/catalog/reason/reason-context"
        action="Create"
        apiPath="/reason-context"
        description="Reason Context"
        draft={{
          entity: DraftEntity.ReasonContext,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
