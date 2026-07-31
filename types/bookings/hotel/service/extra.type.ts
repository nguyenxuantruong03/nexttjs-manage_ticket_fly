import { Hotel } from "../core/hotel.types";

export interface HotelExtra {
  id: string;

  hotelId: string;
  hotel: Hotel;

  name: string;

  description?: string | null;

  typeId?: string | null;
  type?: ExtraType | null;

  isMandatory: boolean;

  availableFor?: string | null;

  maxQuantity?: number | null;

  prices: HotelExtraPrice[];

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}

export interface ExtraType {
  id: string;

  name: string;

  description?: string | null;

  icon?: string | null;

  active: boolean;

  sortOrder: number;

  extras: HotelExtra[];

  createdAt: Date;

  updatedAt: Date;
}

export interface HotelExtraPrice {
  id: string;

  extraId: string;
  extra: HotelExtra;

  name?: string | null;

  price: number;

  active: boolean;

  createdAt: Date;
}
