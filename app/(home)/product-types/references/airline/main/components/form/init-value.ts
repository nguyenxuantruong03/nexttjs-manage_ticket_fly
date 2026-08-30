import { FlyAirlineFormSchema } from "../schema/airline.schema";

import { flyAirlineDefaultValues } from "./default-values";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

export function initFlyAirlineFormValues(
  flyAirline?: FlyAirline,
): FlyAirlineFormSchema {
  if (!flyAirline) {
    return structuredClone(flyAirlineDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyAirline.name ?? "",

    legalName: flyAirline.legalName ?? "",

    iataCode: flyAirline.iataCode ?? "",

    icaoCode: flyAirline.icaoCode ?? "",

    callsign: flyAirline.callsign ?? "",

    country: flyAirline.country ?? "",

    website: flyAirline.website ?? "",

    hotline: flyAirline.hotline ?? "",

    email: flyAirline.email ?? "",

    logo: flyAirline.logo ?? "",

    banner: flyAirline.banner ?? "",

    description: flyAirline.description ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    active: flyAirline.active ?? true,

    // ======================================================
    // IMAGES
    // ======================================================

    images: (flyAirline.images ?? []).map((image) => ({
      mediaId: image.mediaId ?? "",

      categoryId: image.categoryId ?? null,

      isPrimary: image.isPrimary ?? false,

      sortOrder: image.sortOrder ?? 0,
    })),

    // ======================================================
    // ADDON
    // ======================================================

    addon: (flyAirline.addon ?? []).map((addon) => ({
      // ====================================================
      // RELATIONS
      // ====================================================

      airlineId: addon.airlineId ?? null,

      typeId: addon.typeId ?? "",

      // ====================================================
      // BASIC
      // ====================================================

      name: addon.name ?? "",

      description: addon.description ?? null,

      provider: addon.provider ?? null,

      image: addon.image ?? null,

      amount: addon.amount ?? 0,

      active: addon.active ?? true,

      // ====================================================
      // PASSENGER ADDONS
      // ====================================================

      passengerAddons: (addon.passengerAddons ?? []).map((passengerAddon) => ({
        passengerId: passengerAddon.passengerId ?? "",

        addonId: passengerAddon.addonId ?? "",

        quantity: passengerAddon.quantity ?? 0,

        unitPrice: passengerAddon.unitPrice ?? 0,

        totalPrice: passengerAddon.totalPrice ?? 0,

        metadata: passengerAddon.metadata ?? null,
      })),
    })),

    // ======================================================
    // INTERLINE
    // ======================================================

    interline: (flyAirline.interline ?? []).map((interline) => ({
      validatingAirlineId: interline.validatingAirlineId ?? "",

      baggageTransfer: interline.baggageTransfer ?? false,

      protectedConnection: interline.protectedConnection ?? false,
    })),

    // ======================================================
    // OPERATING CODESHARES
    // ======================================================

    operatingCodeshares: (flyAirline.operatingCodeshares ?? []).map(
      (codeshare) => ({
        tripId: codeshare.tripId ?? "",

        marketingAirlineId: codeshare.marketingAirlineId ?? "",

        marketingFlightNumber: codeshare.marketingFlightNumber ?? "",

        operatingAirlineId: codeshare.operatingAirlineId ?? "",

        operatingFlightNumber: codeshare.operatingFlightNumber ?? "",
      }),
    ),

    // ======================================================
    // MARKETING CODESHARES
    // ======================================================

    marketingCodeshares: (flyAirline.marketingCodeshares ?? []).map(
      (codeshare) => ({
        tripId: codeshare.tripId ?? "",

        marketingAirlineId: codeshare.marketingAirlineId ?? "",

        marketingFlightNumber: codeshare.marketingFlightNumber ?? "",

        operatingAirlineId: codeshare.operatingAirlineId ?? "",

        operatingFlightNumber: codeshare.operatingFlightNumber ?? "",
      }),
    ),

    // ======================================================
    // WIFI PACKAGE
    // ======================================================

    wifiPackage: (flyAirline.wifiPackage ?? []).map((wifiPackage) => ({
      airlineId: wifiPackage.airlineId ?? "",

      name: wifiPackage.name ?? "",

      dataLimitMb: wifiPackage.dataLimitMb ?? undefined,

      durationMinutes: wifiPackage.durationMinutes ?? undefined,

      amount: wifiPackage.amount ?? 0,
    })),
  };
}
