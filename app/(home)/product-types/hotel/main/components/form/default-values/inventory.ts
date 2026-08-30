import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelInventoryDefaultValues = {
  inventories: [],
} satisfies Pick<HotelSchemaForm, "inventories">;
