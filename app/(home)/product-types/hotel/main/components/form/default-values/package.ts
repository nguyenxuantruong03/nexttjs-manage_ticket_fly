import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelPackageDefaultValues = {
  hotelPackageMapper: [
    {
      packageId: "",
    },
  ],
} satisfies Pick<HotelSchemaForm, "hotelPackageMapper">;
