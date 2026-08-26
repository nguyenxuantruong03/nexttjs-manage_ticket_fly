import { DetailPage } from "@/components/detail/detail-page";
import { VehicleTypeServerService } from "@/services/catalog/vehicle-type/server";
import { vehicleTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    vehicleTypeId: string;
  }>;
};

export default async function VehicleTypeDetailPage({ params }: Props) {
  const { vehicleTypeId } = await params;

  const vehicleTypeData = await VehicleTypeServerService.getOne(vehicleTypeId);

  return (
    <DetailPage
      groups={vehicleTypeFieldGroups}
      data={vehicleTypeData}
      title={`Vehicle Type ${vehicleTypeData.name}`}
    />
  );
}
