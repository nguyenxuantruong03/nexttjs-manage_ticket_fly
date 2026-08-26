import { bookingTypeFieldGroups } from "@/app/(home)/commerce/booking-type/components/step/field-groups";
import { DetailPage } from "@/components/detail/detail-page";
import { BookingTypeServerService } from "@/services/commerce/booking-type/server";

type Props = {
  params: Promise<{
    bookingTypeId: string;
  }>;
};

export default async function BookingTypeDetailPage({ params }: Props) {
  const { bookingTypeId } = await params;

  const bookingTypeData =
    await BookingTypeServerService.getOne(bookingTypeId);

  return (
    <DetailPage
      groups={bookingTypeFieldGroups}
      data={bookingTypeData}
      title={`Booking Type ${bookingTypeData.name}`}
    />
  );
}