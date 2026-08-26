import { DetailPage } from "@/components/detail/detail-page";
import { busSeatTypeFieldGroups } from "../components/step/field-groups";
import { BusSeatTypeServerService } from "@/services/product-types/ticket-bus/seat-type/server";

type Props = {
  params: Promise<{
    seatTypeId: string;
  }>;
};

export default async function BusSeatTypeDetailPage({ params }: Props) {
  const { seatTypeId } = await params;

  const seatTypeData = await BusSeatTypeServerService.getOne(seatTypeId);

  return (
    <DetailPage
      groups={busSeatTypeFieldGroups}
      data={seatTypeData}
      title={`Bus Seat Type ${seatTypeData.name}`}
    />
  );
}
