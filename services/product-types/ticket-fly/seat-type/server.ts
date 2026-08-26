import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";

export const FlySeatTypeServerService = createServerCrudApi<FlySeatType>(
  API.FLY_SEAT_TYPE,
);
