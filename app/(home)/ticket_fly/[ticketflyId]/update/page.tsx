import { ProviderBookingServerService } from "@/services/provider-booking/server";
import { TicketFlyServerService } from "@/services/ticket-fly/server";
import TicketFlyForm from "../../components/TicketFlyForm";

type Props = {
  params: Promise<{
    ticketflyId: string;
  }>;
};

export default async function TicketFlyEditPage({ params }: Props) {
  const { ticketflyId } = await params;
  const TicketFlyData = await TicketFlyServerService.getOne(ticketflyId);

  return <TicketFlyForm initialData={TicketFlyData} />;
}
