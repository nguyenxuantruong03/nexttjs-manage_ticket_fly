import { DetailPage } from "@/components/detail/detail-page";

import { FlyAircraftServerService } from "@/services/product-types/references/airline/aircraft/server";

import { flyAircraftFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    aircraftId: string;
  }>;
};

export default async function FlyAircraftDetailPage({ params }: Props) {
  const { aircraftId } = await params;

  const flyAircraftData = await FlyAircraftServerService.getOne(aircraftId);

  return (
    <DetailPage
      groups={flyAircraftFieldGroups}
      data={flyAircraftData}
      title={`Fly Aircraft ${
        flyAircraftData.model ||
        flyAircraftData.registrationNumber ||
        flyAircraftData.code ||
        flyAircraftData.id
      }`}
    />
  );
}
