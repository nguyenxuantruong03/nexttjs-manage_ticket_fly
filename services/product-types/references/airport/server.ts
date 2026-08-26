import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

export const FlyAirportServerService = createServerCrudApi<FlyAirport>(
  API.FLY_AIRPORT,
);
