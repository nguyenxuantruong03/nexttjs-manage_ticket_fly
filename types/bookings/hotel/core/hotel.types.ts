// ======================================================
// HOTEL
// ======================================================

import { TagType } from "../../search/tag.types";
import { HotelStatus } from "../enum/enums";
import { HotelFacilityMapper } from "../facilities.types";
import {
  HotelAccessibility,
  HotelAward,
  HotelBrand,
  HotelContact,
  HotelDescription,
  HotelOpeningHour,
  HotelStarRating,
  HotelSustainability,
} from "../hotel-detail.type";
import { HotelInventory } from "../inventory/inventory.types";
import { HotelCheckPolicy, HotelPolicyMapper } from "../policy.type";
import { HotelRoomType } from "../room/room-type.types";
import { HotelDiningOption } from "../service/dinner-option.type";
import { HotelExtra } from "../service/extra.type";
import { HotelInformation } from "./hotel-information.types";
import { HotelMedia } from "./hotel-media.types";
// ======================================================
// HOTEL
// ======================================================

export interface Hotel {
  id: string;

  // Relations
  information?: HotelInformation | null;

  medias: HotelMedia[];

  inventories: HotelInventory[];

  roomTypes: HotelRoomType[];

  facilities: HotelFacilityMapper[];

  policies: HotelPolicyMapper[];

  checkinPolicy?: HotelCheckPolicy | null;

  accessibilities: HotelAccessibility[];

  awards: HotelAward[];

  extras: HotelExtra[];

  mealOptions: HotelDiningOption[];

  openingHours: HotelOpeningHour[];

  descriptions: HotelDescription[];

  contacts?: HotelContact | null;

  sustainabilities: HotelSustainability[];

  // Relations
  brandId?: string | null;

  brand?: HotelBrand | null;

  starRatingId?: string | null;

  starRating?: HotelStarRating | null;

  // Basic
  name: string;

  // Search

  tags: TagType[];

  // Status
  status: HotelStatus;

  // Ranking / Search
  featured: boolean;

  searchable: boolean;

  searchPriority: number;

  // Timestamp
  createdAt: string;

  updatedAt: string;
}
