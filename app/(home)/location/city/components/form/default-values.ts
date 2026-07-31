import { CityFormSchema } from "./schema";
import { CityStatus } from "@/types/bookings/location/city";

export const cityDefaultValues: CityFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  nativeName: "",

  code: "",

  iataCode: "",

  subtitle: "",

  shortDescription: "",

  description: "",


  // ======================================================
  // COUNTRY
  // ======================================================

  countryId: "",

  administrativeArea: "",

  region: "",

  isCapital: false,


  // ======================================================
  // LOCATION
  // ======================================================

  latitude: 0,

  longitude: 0,

  elevation: 0,

  timezoneId: "",

  // ======================================================
  // SEARCH
  // ======================================================

  searchPriority: 0,

  displayOrder: 0,

  popularityScore: 0,

  featured: false,

  popular: false,

  searchable: true,

  tagIds: [],


  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail: "",

  coverImage: "",

  bannerImage: "",

  images: [],

  video: "",


  // ======================================================
  // TRAVEL
  // ======================================================

  bestMonths: [],

  rainyMonths: [],


  // ======================================================
  // STATUS
  // ======================================================

  verified: false,

  status: CityStatus.ACTIVE,
};