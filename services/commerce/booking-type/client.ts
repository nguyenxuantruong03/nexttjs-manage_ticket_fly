import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { BookingType } from "@/types/common/commerce/booking-type";

export const BookingTypeService = createCrudApi<BookingType>(
  clientHttp,
  API.BOOKING_TYPE,
);
