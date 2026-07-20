import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { AirportTransfer } from "@/types/bookings/airport-transfer/core/airport-transfer.types";

export const AirportTransferServerService =
  createServerCrudApi<AirportTransfer>(API.AIRPORT_TRANSFER);
