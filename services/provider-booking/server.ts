import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";

import { ProviderBooking } from "@/types/bookings/provider-bookings";

export const ProviderBookingServerService =
  createServerCrudApi<ProviderBooking>(API.PROVIDER_BOOKING);
