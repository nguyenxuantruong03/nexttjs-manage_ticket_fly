import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutCarRentalInsuranceType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Car Rental Insurance Type"
        title="Manage Car Rental Insurance Type"
        link="/product-types/car-rental/insurance-type"
        action="Create"
        apiPath="car-rental-insurance-type"
        description="Car Rental Insurance Type"
        draft={{
          entity: DraftEntity.CarRentalInsuranceType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}