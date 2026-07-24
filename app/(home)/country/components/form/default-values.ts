import { Continent } from "@/types/bookings/location/city";
import { CountryFormSchema } from "./schema";

export const countryDefaultValues: CountryFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  officialName: "",

  slug: "",

  code: "",

  iso2: "",

  iso3: "",

  phoneCode: "",

  capital: "",

  // ======================================================
  // LOCATION
  // ======================================================

  continent: Continent.AFRICA,

  timezone: "",

  languages: [],

  // ======================================================
  // MEDIA
  // ======================================================

  flag: "",

  thumbnail: "",

  coverImage: "",

  // ======================================================
  // SEARCH
  // ======================================================

  aliases: [],

  keywords: [],

  priority: 0,

  featured: false,

  searchable: true,

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
};
