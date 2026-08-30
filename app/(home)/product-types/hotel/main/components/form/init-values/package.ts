import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelPackageValues(
  hotel: Hotel,
): Pick<HotelSchemaForm, "hotelPackageMapper"> {
  return {
    hotelPackageMapper:
      hotel.hotelPackageMapper?.map((pkg) => ({
        packageId: pkg.packageId ?? "",
      })) ?? [],
  } satisfies Pick<HotelSchemaForm, "hotelPackageMapper">;
}
