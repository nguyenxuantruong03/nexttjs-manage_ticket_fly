import { AirportTransferServerService } from "@/services/product-types/airport-transfer/server";
import { airportTransferFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    airporttransferId: string;
  }>;
};

export default async function AirportTransferDetailPage({ params }: Props) {
  const { airporttransferId } = await params;

  const airportTransferData =
    await AirportTransferServerService.getOne(airporttransferId);

  return (
    <DetailPage
      groups={airportTransferFieldGroups}
      data={airportTransferData}
      title={`Airport Transfer ${airportTransferData.name}`}
    />
  );
}
