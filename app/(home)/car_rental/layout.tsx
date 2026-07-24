import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutCarRental({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="CarrentalPage"
        title="Manage Car Rental"
        link="/car_rental"
        action="Create"
        apiPath="car_rental"
        description="CarrentalPage"
        draft={{
          entity: DraftEntity.CarRental,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}
