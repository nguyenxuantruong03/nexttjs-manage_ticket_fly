import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { FlyAirport } from "@/types/bookings/ticket-fly/airport/airport.types";

export const FlyAirportService = createCrudApi<FlyAirport>(clientHttp, API.FLY_AIRPORT);
