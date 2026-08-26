import { DetailPage } from "@/components/detail/detail-page";

import { FlyAirlineServerService } from "@/services/product-types/references/airline/server";

import { flyAirlineFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    airlineId: string;
  }>;
};

export default async function FlyAirlineDetailPage({ params }: Props) {
  const { airlineId } = await params;

  const flyAirlineData = await FlyAirlineServerService.getOne(airlineId);

  return (
    <DetailPage
      groups={flyAirlineFieldGroups}
      data={flyAirlineData}
      title={`Fly Airline ${flyAirlineData.name}`}
    />
  );
}
