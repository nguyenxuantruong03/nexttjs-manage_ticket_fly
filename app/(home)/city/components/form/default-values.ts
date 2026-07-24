import { CityFormSchema } from "./schema";
import { CityStatus } from "@/types/bookings/location/city";

export const cityDefaultValues: CityFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  nativeName: "",

  slug: "",

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

  timezone: "UTC",

  utcOffset: "",


  // ======================================================
  // SEARCH
  // ======================================================

  priority: 0,

  displayOrder: 0,

  popularityScore: 0,

  featured: false,

  popular: false,

  searchable: true,

  aliases: [],

  keywords: [],

  tags: [],


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
  // SEO
  // ======================================================

  seoTitle: "",

  seoDescription: "",

  seoKeywords: [],


  // ======================================================
  // STATUS
  // ======================================================

  verified: false,

  status: CityStatus.ACTIVE,
};