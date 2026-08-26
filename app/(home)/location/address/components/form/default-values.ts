import { AddressPrecision } from "@/types/location/address";
import { AddressFormSchema } from "./schema";

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

  precision: AddressPrecision.CITY,

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail: "",
  coverImage: "",
  bannerImage: "",
  images: [],
  video: "",

  verified: false,
  active: false,
};
