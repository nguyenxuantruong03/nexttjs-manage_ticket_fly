import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

export const BookingItemTypeService = createCrudApi<BookingItemType>(
  clientHttp,
  API.BOOKING_ITEM_TYPE,
);
