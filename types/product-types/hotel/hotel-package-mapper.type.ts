import { Package } from "@/types/common/commerce/package/package.type";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";
import { HotelBooking } from "./bookings/booking";

export interface HotelPackageMapper {
  id: string;

  // ======================================================
  // HOTEL
  // ======================================================

  hotelId: string;
  hotel: Hotel;

  // ======================================================
  // PACKAGE
  // ======================================================

  packageId: string;
  package: Package;

  // ======================================================
  // BOOKING
  // ======================================================

  hotelBooking: HotelBooking[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
}
