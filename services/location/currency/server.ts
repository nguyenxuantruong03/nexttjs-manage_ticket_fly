import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Currency } from "@/types/location/currency";

export const CurrencyServerService = createServerCrudApi<Currency>(
  API.CURRENCY,
);
