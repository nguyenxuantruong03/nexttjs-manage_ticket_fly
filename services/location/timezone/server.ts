import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Timezone } from "@/types/bookings/location/timezone";

export const TimezoneServerService = createServerCrudApi<Timezone>(
  API.TIMEZONE,
);
