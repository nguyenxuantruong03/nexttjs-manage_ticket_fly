import { DetailPage } from "@/components/detail/detail-page";
import { carRentalInsuranceTypeFieldGroups } from "../components/step/field-groups";
import { CarRentalInsuranceTypeServerService } from "@/services/product-types/car-rental/insurance-type/server";

type Props = {
  params: Promise<{
    insuranceTypeId: string;
  }>;
};

export default async function CarRentalInsuranceTypeDetailPage({
  params,
}: Props) {
  const { insuranceTypeId } = await params;

  const insuranceTypeData =
    await CarRentalInsuranceTypeServerService.getOne(insuranceTypeId);

  return (
    <DetailPage
      groups={carRentalInsuranceTypeFieldGroups}
      data={insuranceTypeData}
      title={`Car Rental Insurance Type ${insuranceTypeData.name}`}
    />
  );
}