import { DetailPage } from "@/components/detail/detail-page";

import { FlyAircraftTypeServerService } from "@/services/product-types/references/airline/aircraft/aircraft-type/server";

import { flyAircraftTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    aircraftTypeId: string;
  }>;
};

export default async function FlyAircraftTypeDetailPage({
  params,
}: Props) {
  const { aircraftTypeId } = await params;

  const flyAircraftTypeData =
    await FlyAircraftTypeServerService.getOne(aircraftTypeId);

  return (
    <DetailPage
      groups={flyAircraftTypeFieldGroups}
      data={flyAircraftTypeData}
      title={`Fly Aircraft Type ${flyAircraftTypeData.name}`}
    />
  );
}