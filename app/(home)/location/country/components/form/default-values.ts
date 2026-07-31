import { Continent } from "@/types/bookings/location/city";
import { CountryFormSchema } from "./schema";

export const countryDefaultValues: CountryFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",
  currencyId: "",
  officialName: "",

  code: "",

  iso2: "",

  iso3: "",

  phoneCode: "",

  capital: "",

  // ======================================================
  // LOCATION
  // ======================================================

  continent: Continent.AFRICA,

  timezoneId: "",

  languageIds: [],

  // ======================================================
  // MEDIA
  // ======================================================

  flag: "",

  thumbnail: "",

  coverImage: "",

  // ======================================================
  // SEARCH
  // ======================================================

  tagIds: [],
  searchPriority: 0,

  featured: false,

  searchable: true,

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
};
