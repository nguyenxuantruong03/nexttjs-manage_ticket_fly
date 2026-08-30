import { HotelSchemaForm } from "../schema/core/hotel.schema";

import { hotelBasicDefaultValues } from "./basic";
import { hotelMediaDefaultValues } from "./media";
import { hotelRoomDefaultValues } from "./room";
import { hotelInventoryDefaultValues } from "./inventory";
import { hotelPackageDefaultValues } from "./package";
import { hotelPolicyDefaultValues } from "./policy";
import { hotelDetailDefaultValues } from "./detail";
import { hotelExtraDefaultValues } from "./extra";
import { hotelDiningDefaultValues } from "./dining";

export const hotelDefaultValues: HotelSchemaForm = {
  ...hotelBasicDefaultValues,
  ...hotelMediaDefaultValues,
  ...hotelInventoryDefaultValues,
  ...hotelRoomDefaultValues,
  ...hotelPackageDefaultValues,
  ...hotelPolicyDefaultValues,
  ...hotelDetailDefaultValues,
  ...hotelExtraDefaultValues,
  ...hotelDiningDefaultValues,
};
