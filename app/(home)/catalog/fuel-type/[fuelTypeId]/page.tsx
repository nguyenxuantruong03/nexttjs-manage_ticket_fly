import { DetailPage } from "@/components/detail/detail-page";
import { FuelTypeServerService } from "@/services/catalog/fuel-type/server";
import { fuelTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    fuelTypeId: string;
  }>;
};

export default async function FuelTypeDetailPage({ params }: Props) {
  const { fuelTypeId } = await params;

  const fuelTypeData = await FuelTypeServerService.getOne(fuelTypeId);

  return (
    <DetailPage
      groups={fuelTypeFieldGroups}
      data={fuelTypeData}
      title={`Fuel Type ${fuelTypeData.name}`}
    />
  );
}
