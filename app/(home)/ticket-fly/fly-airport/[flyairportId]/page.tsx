import { DetailPage } from "@/components/detail/detail-page";
import { FlyAirportServerService } from "@/services/ticket-fly/fly-airport/server";
import { flyAirportFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    flyairportId: string;
  }>;
};

export default async function FlyAirportDetailPage({ params }: Props) {
  const { flyairportId } = await params;
  const flyAirportsData = await FlyAirportServerService.getOne(flyairportId);
  return (
    <DetailPage
      groups={flyAirportFieldGroups}
      data={flyAirportsData}
      title={`Fly Airport ${flyAirportsData.name}`}
    />
  );
}
