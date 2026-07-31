import { Hotel } from "./core/hotel.types";
import { MediaAsset } from "./media.type";

export interface Accessibility {
  id: string;

  name: string;

  description?: string | null;

  hotels: HotelAccessibility[];
}

export interface HotelAccessibility {
  id: string;

  hotelId: string;
  hotel: Hotel;

  accessibilityId: string;
  accessibility: Accessibility;
}

export interface HotelBrand {
  id: string;

  name: string;

  

  description?: string | null;

  logo?: string | null;

  hotels: Hotel[];

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}

export interface HotelAward {
  id: string;

  hotelId: string;
  hotel: Hotel;

  name: string;

  issuer?: string | null;

  awardDate?: Date | null;

  year?: number | null;

  description?: string | null;

  awardUrl?: string | null;

  medias: HotelAwardMedia[];

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}

export interface HotelAwardMedia {
  id: string;

  awardId: string;
  award: HotelAward;

  mediaId: string;
  media: MediaAsset;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;
}

export interface HotelContact {
  id: string;

  hotelId: string;
  hotel: Hotel;

  phone?: string | null;

  email?: string | null;

  website?: string | null;

  createdAt: Date;
}

export interface HotelDescription {
  id: string;

  hotelId: string;
  hotel: Hotel;

  title: string;

  content: string;

  sortOrder: number;

  createdAt: Date;
}

export interface HotelStarRating {
  id: string;

  name: string;

  star: number;

  description?: string | null;

  hotels: Hotel[];

  createdAt: Date;
}

export interface HotelOpeningHour {
  id: string;

  hotelId: string;
  hotel: Hotel;

  service: string;

  day: string;

  openTime?: string | null;

  closeTime?: string | null;
}

export interface Sustainability {
  id: string;

  name: string;

  

  description?: string | null;

  hotels: HotelSustainability[];
}

export interface HotelSustainability {
  id: string;

  hotelId: string;
  hotel: Hotel;

  sustainabilityId: string;
  sustainability: Sustainability;
}
