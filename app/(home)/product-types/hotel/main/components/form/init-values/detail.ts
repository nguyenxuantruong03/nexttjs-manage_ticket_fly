import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelSchemaForm } from "../schema/core/hotel.schema";

export function initHotelDetailValues(
  hotel: Hotel,
): Pick<
  HotelSchemaForm,
  | "accessibilities"
  | "awards"
  | "openingHours"
  | "descriptions"
  | "contacts"
  | "sustainabilities"
> {
  return {
    accessibilities:
      hotel.accessibilities?.map((item) => ({
        accessibilityId: item.accessibilityId ?? "",
      })) ?? [],

    awards:
      hotel.awards?.map((award) => ({
        name: award.name ?? "",

        issuer: award.issuer ?? "",

        awardDate: award.awardDate ?? null,

        year: award.year ?? undefined,

        description: award.description ?? "",

        awardUrl: award.awardUrl ?? "",

        active: award.active ?? true,

        medias:
          award.medias?.map((media) => ({
            mediaId: media.mediaId ?? "",

            isPrimary: media.isPrimary ?? false,

            sortOrder: media.sortOrder ?? 0,
          })) ?? [],
      })) ?? [],

    openingHours:
      hotel.openingHours?.map((hour) => ({
        service: hour.service ?? "",

        day: hour.day ?? "",

        openTime: hour.openTime ?? "",

        closeTime: hour.closeTime ?? "",
      })) ?? [],

    descriptions:
      hotel.descriptions?.map((desc) => ({
        title: desc.title ?? "",

        content: desc.content ?? "",

        sortOrder: desc.sortOrder ?? 0,
      })) ?? [],

    contacts: hotel.contacts
      ? {
          phone: hotel.contacts.phone ?? "",

          email: hotel.contacts.email ?? "",

          website: hotel.contacts.website ?? "",
        }
      : null,

    sustainabilities:
      hotel.sustainabilities?.map((item) => ({
        sustainabilityId: item.sustainabilityId ?? "",
      })) ?? [],
  } satisfies Pick<
    HotelSchemaForm,
    | "accessibilities"
    | "awards"
    | "openingHours"
    | "descriptions"
    | "contacts"
    | "sustainabilities"
  >;
}
