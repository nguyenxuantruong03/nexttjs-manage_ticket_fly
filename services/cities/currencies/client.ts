import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Currency } from "@/types/bookings/cities/currency";


export const CurrencyService = createCrudApi<Currency>(clientHttp, API.CURRENCY);
