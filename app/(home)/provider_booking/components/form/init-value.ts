import { ProviderBookingFormSchema } from "./schema";

import { providerBookingDefaultValues } from "./default-values";

import { ProviderBooking } from "@/types/users/provider-bookings";

export function initProviderBookingFormValues(
  providerBooking?: ProviderBooking,
): ProviderBookingFormSchema {
  if (!providerBooking) {
    return structuredClone(providerBookingDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    officialName: providerBooking.officialName ?? null,
    displayName: providerBooking.displayName ?? "",
    shortName: providerBooking.shortName ?? null,
    subtitle: providerBooking.subtitle ?? null,
    description: providerBooking.description ?? null,
    logo: providerBooking.logo ?? null,
    banner: providerBooking.banner ?? null,

    // ======================================================
    // COMPANY
    // ======================================================

    companyType: providerBooking.companyType ?? null,
    registrationNumber: providerBooking.registrationNumber ?? null,
    taxCode: providerBooking.taxCode ?? null,
    licenseNumber: providerBooking.licenseNumber ?? null,
    foundedYear: providerBooking.foundedYear ?? null,
    employeeCount: providerBooking.employeeCount ?? null,

    // ======================================================
    // CONTACT
    // ======================================================

    email: providerBooking.email ?? "",
    phone: providerBooking.phone ?? null,
    hotline: providerBooking.hotline ?? null,
    website: providerBooking.website ?? "",

    // ======================================================
    // ADDRESS
    // ======================================================

    addressId: providerBooking.addressId ?? null,

    // ======================================================
    // SOCIAL
    // ======================================================

    facebook: providerBooking.facebook ?? "",
    instagram: providerBooking.instagram ?? "",
    youtube: providerBooking.youtube ?? "",
    linkedin: providerBooking.linkedin ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    verified: providerBooking.verified ?? false,
    status: providerBooking.status,
    operatingStatus: providerBooking.operatingStatus,

    // ======================================================
    // OWNER
    // ======================================================

    userId: providerBooking.userId ?? "",

    // ======================================================
    // SERVICE
    // ======================================================

    bookingTypeIds:
      providerBooking.bookingTypes?.map((bookingType) => bookingType.id) ?? [],
  };
}
