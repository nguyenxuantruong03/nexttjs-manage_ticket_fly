import { DetailPage } from "@/components/detail/detail-page";
import { busFieldGroups } from "../components/step/field-groups";
import { TicketBusServerService } from "@/services/product-types/ticket-bus/server";

type Props = {
  params: Promise<{
    ticketbusId: string;
  }>;
};

export default async function TicketBusPage({ params }: Props) {
  const { ticketbusId } = await params;

  const ticketBusData = await TicketBusServerService.getOne(ticketbusId);

  return (
    <DetailPage
      groups={busFieldGroups}
      data={ticketBusData}
      title={`Ticket Bus ${ticketBusData.name}`}
    />
  );
}
