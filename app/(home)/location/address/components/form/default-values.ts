import { AddressFormSchema } from "./schema";
import { AddressPrecision } from "@/types/bookings/location/address";

export const addressDefaultValues: AddressFormSchema = {
  // ======================================================
  // ADDRESS
  // ======================================================

  name: "",

  houseNumber: "",

  street: "",

  wardId: "",

  districtId: "",



  postcode: "",

  // ======================================================
  // LOCATION
  // ======================================================

  countryId: "",

  cityId: "",

  latitude: 0,

  longitude: 0,

  plusCode: "",

  precision: AddressPrecision.ADDRESS,
};
