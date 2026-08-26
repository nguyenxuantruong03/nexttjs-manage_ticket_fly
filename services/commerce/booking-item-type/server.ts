import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

export const BookingItemTypeServerService =
  createServerCrudApi<BookingItemType>(API.BOOKING_ITEM_TYPE);
