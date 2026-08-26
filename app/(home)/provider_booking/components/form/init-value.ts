import { ProviderBookingFormSchema } from "./schema";
import { providerBookingDefaultValues } from "./default-values";
import { ProviderBooking } from "@/types/users/provider-bookings";

export function initProviderBookingFormValues(
  providerBooking?: ProviderBooking,
): ProviderBookingFormSchema {
  if (!providerBooking) {
    return structuredClone(providerBookingDefaultValues);
  }

  return structuredClone(providerBooking);
}
