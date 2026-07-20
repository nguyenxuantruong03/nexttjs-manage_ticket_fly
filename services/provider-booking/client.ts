import { API } from "@/lib/api/endpoints";

import { ProviderBooking } from "@/types/bookings/provider-bookings";
import { createCrudApi } from "@/lib/api/createCrudApi";
import { clientHttp } from "@/lib/http/client";

export const ProviderBookingService = createCrudApi<ProviderBooking>(
  clientHttp,
  API.PROVIDER_BOOKING,
);
