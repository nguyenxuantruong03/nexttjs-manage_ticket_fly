import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutPromotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Promotion"
        title="Manage Promotion"
        link="/commerce/promotion"
        action="Create"
        apiPath="/promotion"
        description="Promotion"
        draft={{
          entity: DraftEntity.Promotion,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}
