import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { BookingType } from "@/types/common/commerce/booking-type";

export const BookingTypeServerService = createServerCrudApi<BookingType>(
  API.BOOKING_TYPE,
);
