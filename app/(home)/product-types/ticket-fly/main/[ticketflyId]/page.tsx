import { TicketFlyServerService } from "@/services/product-types/ticket-fly/server";
import { flyFieldGroups } from "../components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";

type Props = {
  params: Promise<{
    ticketflyId: string;
  }>;
};

export default async function TicketFlyDetailPage({ params }: Props) {
  const { ticketflyId } = await params;

  const ticketFlyData = await TicketFlyServerService.getOne(ticketflyId);

  return (
    <DetailPage
      groups={flyFieldGroups}
      data={ticketFlyData}
      title={`Ticket Fly ${ticketFlyData.name}`}
    />
  );
}
