import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";

export const FlySeatTypeService = createCrudApi<FlySeatType>(
  clientHttp,
  API.FLY_SEAT_TYPE,
);