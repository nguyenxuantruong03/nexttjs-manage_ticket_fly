import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";

export const BusSeatTypeServerService =
  createServerCrudApi<BusSeatType>(API.BUS_SEAT_TYPE);