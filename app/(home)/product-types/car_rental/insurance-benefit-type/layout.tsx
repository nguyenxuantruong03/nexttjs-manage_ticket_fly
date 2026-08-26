import { DraftEntity } from "@/components/daft/draft-config";
import FormPage from "@/components/form/form";
import { FormPageProvider } from "@/components/form/form-context";

export default function LayoutCarRentalInsuranceBenefitType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPageProvider>
      <FormPage
        label="Car Rental Insurance Benefit Type"
        title="Manage Car Rental Insurance Benefit Type"
        link="/product-types/car-rental/insurance-benefit-type"
        action="Create"
        apiPath="car-rental-insurance-benefit-type"
        description="Car Rental Insurance Benefit Type"
        draft={{
          entity: DraftEntity.CarRentalInsuranceBenefitType,
        }}
      >
        <div className="flex-1 min-w-0 overflow-x-hidden">{children}</div>
      </FormPage>
    </FormPageProvider>
  );
}