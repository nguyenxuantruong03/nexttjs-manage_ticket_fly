import { DetailPage } from "@/components/detail/detail-page";

import { FlySeatTypeServerService } from "@/services/product-types/ticket-fly/seat-type/server";

import { flySeatTypeFieldGroups } from "../components/step/field-groups";

type Props = {
  params: Promise<{
    seatTypeId: string;
  }>;
};

export default async function FlySeatTypeDetailPage({ params }: Props) {
  const { seatTypeId } = await params;

  const flySeatTypeData =
    await FlySeatTypeServerService.getOne(seatTypeId);

  return (
    <DetailPage
      groups={flySeatTypeFieldGroups}
      data={flySeatTypeData}
      title={`Fly Seat Type ${flySeatTypeData.name}`}
    />
  );
}