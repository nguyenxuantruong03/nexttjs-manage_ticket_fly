import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Timezone } from "@/types/bookings/location/timezone";

export const TimezoneService = createCrudApi<Timezone>(clientHttp, API.TIMEZONE);
