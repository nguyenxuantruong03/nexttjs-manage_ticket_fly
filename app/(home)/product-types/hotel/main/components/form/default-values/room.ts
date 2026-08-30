import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelRoomDefaultValues = {
  // ROOM TYPES

  roomTypes: [
    {
      categoryId: "",
      bathroomTypeId: "",
      viewId: "",

      code: "",
      name: "",
      description: "",

      roomSize: undefined,
      bedCount: undefined,
      bathroomCount: undefined,
      floor: undefined,

      maxGuests: undefined,
      maxAdults: undefined,
      maxChildren: undefined,

      smokingAllowed: false,
      balcony: false,
      kitchen: false,
      accessible: false,

      active: true,
      sortOrder: 0,

      bedTypes: [
        {
          bedTypeId: "",
          quantity: 1,
        },
      ],

      facilities: [
        {
          facilityId: "",
          quantity: 1,
          note: "",
        },
      ],

      medias: [
        {
          mediaId: "",
          categoryId: "",
          isPrimary: true,
          sortOrder: 0,
        },
      ],
    },
  ],

  // HOTEL FACILITIES

  facilities: [
    {
      facilityId: "",
    },
  ],
} satisfies Pick<HotelSchemaForm, "roomTypes" | "facilities">;
