import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

export const HotelService = createCrudApi<Hotel>(clientHttp, API.HOTEL);
