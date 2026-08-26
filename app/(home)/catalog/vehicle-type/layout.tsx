import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

export default function LayoutVehicleType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Vehicle Type"
        title="Manage Vehicle Type"
        link="/catalog/vehicle-type"
        action="Create"
        apiPath="/vehicle-type"
        description="Vehicle Type"
        draft={{
          entity: DraftEntity.VehicleType,
        }}
      >
        {children}
      </FormPage>
    </FormPageProvider>
  );
}