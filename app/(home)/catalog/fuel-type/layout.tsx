import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutFuelType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Fuel Type"
        title="Manage Fuel Type"
        link="/catalog/fuel-type"
        action="Create"
        apiPath="/fuel-type"
        description="Fuel Type"
        draft={{
          entity: DraftEntity.FuelType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}