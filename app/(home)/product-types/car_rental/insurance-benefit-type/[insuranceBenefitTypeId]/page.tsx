import { DetailPage } from "@/components/detail/detail-page";
import { carRentalInsuranceBenefitTypeFieldGroups } from "../components/step/field-groups";
import { CarRentalInsuranceBenefitTypeServerService } from "@/services/product-types/car-rental/insurance-benefit-type/server";

type Props = {
  params: Promise<{
    insuranceBenefitTypeId: string;
  }>;
};

export default async function CarRentalInsuranceBenefitTypeDetailPage({
  params,
}: Props) {
  const { insuranceBenefitTypeId } = await params;

  const insuranceBenefitTypeData =
    await CarRentalInsuranceBenefitTypeServerService.getOne(
      insuranceBenefitTypeId,
    );

  return (
    <DetailPage
      groups={carRentalInsuranceBenefitTypeFieldGroups}
      data={insuranceBenefitTypeData}
      title={`Car Rental Insurance Benefit Type ${insuranceBenefitTypeData.name}`}
    />
  );
}
