import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelDiningValues(
  hotel: Hotel,
): Pick<HotelSchemaForm, "mealOptions"> {
  return {
    mealOptions:
      hotel.mealOptions?.map((meal) => ({
        mealTypeId: meal.mealTypeId ?? "",

        serviceTypeId: meal.serviceTypeId ?? "",

        name: meal.name ?? "",

        openingHours: meal.openingHours ?? "",

        capacity: meal.capacity ?? undefined,

        description: meal.description ?? "",

        location: meal.location ?? "",

        dressCode: meal.dressCode ?? "",

        reservationRequired: meal.reservationRequired ?? false,

        active: meal.active ?? true,

        prices:
          meal.prices?.map((price) => ({
            name: price.name ?? "",

            price: price.price ?? 0,

            currency: price.currency ?? "USD",

            active: price.active ?? true,
          })) ?? [],
      })) ?? [],
  } satisfies Pick<HotelSchemaForm, "mealOptions">;
}
