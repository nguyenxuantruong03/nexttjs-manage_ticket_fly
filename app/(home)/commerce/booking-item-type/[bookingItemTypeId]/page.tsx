import { DetailPage } from "@/components/detail/detail-page";

import { bookingItemTypeFieldGroups } from "../components/step/field-groups";

import { BookingItemTypeServerService } from "@/services/commerce/booking-item-type/server";

type Props = {
  params: Promise<{
    bookingItemTypeId: string;
  }>;
};

export default async function BookingItemTypeDetailPage({
  params,
}: Props) {
  const { bookingItemTypeId } = await params;

  const bookingItemTypeData =
    await BookingItemTypeServerService.getOne(bookingItemTypeId);

  return (
    <DetailPage
      groups={bookingItemTypeFieldGroups}
      data={bookingItemTypeData}
      title={`Booking Item Type ${bookingItemTypeData.name}`}
    />
  );
}
