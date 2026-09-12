import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutReasonCode({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Reason Code"
        title="Manage Reason Code"
        link="/catalog/reason/reason-code"
        action="Create"
        apiPath="/reason-code"
        description="Reason Code"
        draft={{
          entity: DraftEntity.ReasonCode,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
