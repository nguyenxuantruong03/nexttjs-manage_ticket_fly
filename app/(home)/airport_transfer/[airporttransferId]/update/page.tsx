import { AirportTransferServerService } from "@/services/airport-transfer/server";
import AirportTransferForm from "../../components/AirrportTransferForm";

type Props = {
  params: Promise<{
    airporttransferId: string;
  }>;
};

export default async function AirportTransferEditPage({ params }: Props) {
  const { airporttransferId } = await params;
  const airportTransferData =
    await AirportTransferServerService.getOne(airporttransferId);

  return <AirportTransferForm initialData={airportTransferData} />;
}
