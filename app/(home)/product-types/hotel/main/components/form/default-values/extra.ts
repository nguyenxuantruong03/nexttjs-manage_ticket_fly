import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelExtraDefaultValues = {
  hotelExtraMapper: [
    {
      extraId: "",

      active: true,

      sortOrder: 0,
    },
  ],
} satisfies Pick<HotelSchemaForm, "hotelExtraMapper">;
