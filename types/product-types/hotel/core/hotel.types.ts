import { ServiceType } from "@/types/common/catalog/service-type.type";
import { HotelBooking } from "../bookings/booking";
import { HotelStatus } from "../enum/enums";
import { HotelFacilityMapper } from "../facility-mapper";
import { HotelFavorite } from "../favorite";
import { HotelCheckInPolicy } from "../hotel-check-in-policy.type";
import {
  HotelAccessibility,
  HotelAward,
  HotelBrand,
  HotelContact,
  HotelDescription,
  HotelOpeningHour,
  HotelStarRating,
  HotelSustainability,
} from "../hotel-detail";
import { HotelInventory } from "../inventory/inventory.types";
import { HotelPolicyMapper } from "../policy-mapper";
import { HotelReview } from "../review";
import { HotelRoomType } from "../room/room-type.types";
import { HotelDiningOption } from "../service/dinner-option.type";
import { HotelInformation } from "./hotel-information.types";
import { HotelMedia } from "./hotel-media.types";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { HotelPackageMapper } from "../hotel-package-mapper.type";
import { HotelExtraMapper } from "../hotel-extra-mapper.type";
import { SearchTag } from "@/types/searchs/search/tag.types";

export interface Hotel {
  id: string;

  // ======================================================
  // SERVICE / BOOKING TYPE
  // ======================================================

  serviceTypeId: string;
  serviceType: ServiceType;

  bookingItemTypeId: string;
  bookingItemType: BookingItemType;

  // ======================================================
  // HOTEL INFORMATION
  // ======================================================

  information: HotelInformation | null;
  medias: HotelMedia[];
  inventories: HotelInventory[];

  // ======================================================
  // ROOMS
  // ======================================================

  roomTypes: HotelRoomType[];

  // ======================================================
  // PACKAGE
  // ======================================================

  hotelPackageMapper: HotelPackageMapper[];

  // ======================================================
  // REVIEWS / POLICIES
  // ======================================================

  reviews: HotelReview[];
  facilities: HotelFacilityMapper[];
  policies: HotelPolicyMapper[];
  checkinPolicy: HotelCheckInPolicy | null;
  accessibilities: HotelAccessibility[];
  awards: HotelAward[];

  // ======================================================
  // EXTRAS
  // ======================================================

  hotelExtraMapper: HotelExtraMapper[];

  // ======================================================
  // BOOKINGS
  // ======================================================

  bookings: HotelBooking[];

  // ======================================================
  // SERVICES
  // ======================================================

  mealOptions: HotelDiningOption[];
  favorites: HotelFavorite[];
  openingHours: HotelOpeningHour[];
  descriptions: HotelDescription[];
  contacts: HotelContact | null;
  sustainabilities: HotelSustainability[];

  // ======================================================
  // BRAND / STAR RATING
  // ======================================================

  brandId: string | null;
  brand: HotelBrand | null;

  starRatingId: string | null;
  starRating: HotelStarRating | null;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;
  slug: string;
  aliases: string[];
  keywords: string[];

  // ======================================================
  // SEARCH
  // ======================================================

  tagIds: string[];
  tags: SearchTag[];

  searchText: string;
  featured: boolean;
  searchable: boolean;
  searchPriority: number;
  ratingAverage: number;
  reviewCount: number;
  bookingCount: number;
  favoriteCount: number;
  status: HotelStatus;
  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
  updatedAt: Date;
}
