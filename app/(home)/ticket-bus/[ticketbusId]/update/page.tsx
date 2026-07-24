import { TicketBusServerService } from "@/services/ticket-bus/server";
import TicketBusForm from "../../components/TicketBusForm";

type Props = {
  params: Promise<{
    ticketbusId: string;
  }>;
};

export default async function TicketBusEditPage({ params }: Props) {
  const { ticketbusId } = await params;
  const TicketBusData = await TicketBusServerService.getOne(ticketbusId);

  return <TicketBusForm initialData={TicketBusData} />;
}
