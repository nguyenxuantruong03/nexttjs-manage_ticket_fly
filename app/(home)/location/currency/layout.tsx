import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutCurrency({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Currency"
        title="Manage Currency"
        link="/location/currency"
        action="Create"
        apiPath="location/currency"
        description="Currency"
        draft={{
          entity: DraftEntity.Currency,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
