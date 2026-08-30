import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelDetailDefaultValues = {
  // ACCESSIBILITY

  accessibilities: [
    {
      accessibilityId: "",
    },
  ],

  // AWARDS

  awards: [
    {
      name: "",

      issuer: "",

      awardDate: new Date(),

      year: undefined,

      description: "",

      awardUrl: "",

      active: true,

      medias: [
        {
          mediaId: "",

          isPrimary: true,

          sortOrder: 0,
        },
      ],
    },
  ],

  // OPENING HOURS

  openingHours: [
    {
      service: "",

      day: "",

      openTime: "",

      closeTime: "",
    },
  ],

  // DESCRIPTIONS

  descriptions: [
    {
      title: "",

      content: "",

      sortOrder: 0,
    },
  ],

  // CONTACT

  contacts: {
    phone: "",

    email: "",

    website: "",
  },

  // SUSTAINABILITY

  sustainabilities: [
    {
      sustainabilityId: "",
    },
  ],
} satisfies Pick<
  HotelSchemaForm,
  | "accessibilities"
  | "awards"
  | "openingHours"
  | "descriptions"
  | "contacts"
  | "sustainabilities"
>;
