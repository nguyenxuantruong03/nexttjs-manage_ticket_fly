import { ProviderBooking } from "@/types/bookings/provider-bookings";
import { ProviderBookingFormSchema } from "./schema";
import { providerBookingDefaultValues } from "./default-values";

export function initProviderBookingFormValues(
  providerBooking?: ProviderBooking,
): ProviderBookingFormSchema {
  if (!providerBooking) {
    return structuredClone(providerBookingDefaultValues);
  }

  return structuredClone(providerBooking);
}
