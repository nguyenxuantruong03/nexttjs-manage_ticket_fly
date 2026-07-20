import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { AirportTransfer } from "@/types/bookings/airport-transfer/core/airport-transfer.types";

export const AirportTransferService = createCrudApi<AirportTransfer>(
  clientHttp,
  API.AIRPORT_TRANSFER,
);
