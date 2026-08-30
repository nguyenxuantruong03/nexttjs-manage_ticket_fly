import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelDiningDefaultValues = {
  mealOptions: [
    {
      mealTypeId: "",
      serviceTypeId: "",
      name: "",
      openingHours: "",
      capacity: undefined,
      description: "",
      location: "",
      dressCode: "",
      reservationRequired: false,
      active: true,

      prices: [
        {
          name: "",
          price: 0,
          currency: "",
          active: true,
        },
      ],
    },
  ],
} satisfies Pick<HotelSchemaForm, "mealOptions">;
