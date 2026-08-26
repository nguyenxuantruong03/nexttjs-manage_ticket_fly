import { API } from "@/lib/api/endpoints";

import { createCrudApi } from "@/lib/api/createCrudApi";
import { clientHttp } from "@/lib/http/client";
import { ProviderBooking } from "@/types/users/provider-bookings";

export const ProviderBookingService = createCrudApi<ProviderBooking>(
  clientHttp,
  API.PROVIDER_BOOKING,
);
