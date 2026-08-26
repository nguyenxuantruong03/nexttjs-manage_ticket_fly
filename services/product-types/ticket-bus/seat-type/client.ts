import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";

export const BusSeatTypeService = createCrudApi<BusSeatType>(
  clientHttp,
  API.BUS_SEAT_TYPE,
);