import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelRoomValues(
  hotel: Hotel,
): Pick<HotelSchemaForm, "roomTypes" | "facilities"> {
  return {
    roomTypes:
      hotel.roomTypes?.map((room) => ({
        categoryId: room.categoryId ?? "",

        bathroomTypeId: room.bathroomTypeId ?? "",

        viewId: room.viewId ?? "",

        code: room.code ?? "",

        name: room.name ?? "",

        description: room.description ?? "",

        roomSize: room.roomSize ?? undefined,

        bedCount: room.bedCount ?? undefined,

        bathroomCount: room.bathroomCount ?? undefined,

        floor: room.floor ?? undefined,

        maxGuests: room.maxGuests ?? undefined,

        maxAdults: room.maxAdults ?? undefined,

        maxChildren: room.maxChildren ?? undefined,

        smokingAllowed: room.smokingAllowed ?? false,

        balcony: room.balcony ?? false,

        kitchen: room.kitchen ?? false,

        accessible: room.accessible ?? false,

        active: room.active ?? true,

        sortOrder: room.sortOrder ?? 0,

        bedTypes:
          room.bedTypes?.map((bed) => ({
            bedTypeId: bed.bedTypeId ?? "",

            quantity: bed.quantity ?? 1,
          })) ?? [],

        facilities:
          room.facilities?.map((facility) => ({
            facilityId: facility.facilityId ?? "",

            quantity: facility.quantity ?? 1,

            note: facility.note ?? "",
          })) ?? [],

        medias:
          room.medias?.map((media) => ({
            mediaId: media.mediaId ?? "",

            categoryId: media.categoryId ?? "",

            isPrimary: media.isPrimary ?? false,

            sortOrder: media.sortOrder ?? 0,
          })) ?? [],
      })) ?? [],

    facilities:
      hotel.facilities?.map((facility) => ({
        facilityId: facility.facilityId ?? "",
      })) ?? [],
  } satisfies Pick<HotelSchemaForm, "roomTypes" | "facilities">;
}
