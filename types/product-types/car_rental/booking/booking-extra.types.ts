import { CarRentalBooking } from "../booking/booking.types";
import { CarRentalExtraMapper } from "../carRental-extra-mapper.type";

export interface CarRentalBookingExtra {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  bookingId: string;
  booking: CarRentalBooking;

  extraId: string | null;
  extra: CarRentalExtraMapper | null;

  // ======================================================
  // SNAPSHOT
  // ======================================================

  name: string;

  // Snapshot text, không FK cứng vào ExtraType
  // để không ảnh hưởng lịch sử khi danh mục Extra thay đổi/xóa
  typeName: string | null;

  quantity: number;

  unitPrice: number;

  totalPrice: number;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
}
