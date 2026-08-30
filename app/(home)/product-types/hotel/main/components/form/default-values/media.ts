import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelMediaDefaultValues = {
  // MEDIA

  medias: [
    {
      mediaId: "",

      categoryId: "",

      isPrimary: true,

      sortOrder: 0,
    },
  ],
} satisfies Pick<HotelSchemaForm, "medias">;
