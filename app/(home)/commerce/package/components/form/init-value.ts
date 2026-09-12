import { PackageFormSchema } from "./schema";

import { packageDefaultValues } from "./default-values";

import { Package } from "@/types/common/commerce/package/package.type";

export function initPackageFormValues(
  packageData?: Package,
): PackageFormSchema {
  if (!packageData) {
    return structuredClone(packageDefaultValues);
  }

  return {
    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      packageData.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // BASIC
    // ======================================================

    name: packageData.name ?? "",

    description: packageData.description ?? null,

    // ======================================================
    // DURATION
    // ======================================================

    duration: packageData.duration ?? null,

    durationType: packageData.durationType ?? null,

    // ======================================================
    // CAPACITY
    // ======================================================

    maxGuests: packageData.maxGuests ?? null,

    // ======================================================
    // BASE PRICE
    // ======================================================

    price: packageData.price ?? 0,

    currencyId: packageData.currencyId ?? "",

    // ======================================================
    // CONTENT
    // ======================================================

    includedItems: packageData.includedItems ?? [],

    // ======================================================
    // MEDIA
    // ======================================================

    images:
      packageData.images?.map((image) => ({
        mediaId: image.mediaId,
        sortOrder: image.sortOrder,
      })) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: packageData.active ?? true,

    sortOrder: packageData.sortOrder ?? 0,
  };
}
