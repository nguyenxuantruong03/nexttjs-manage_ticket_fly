import { Hotel } from "../core/hotel.types";

export interface HotelDiningOption {
  id: string;

  hotelId: string;
  hotel: Hotel;

  name: string;

  mealTypeId?: string | null;
  mealType?: DiningMealType | null;

  serviceTypeId?: string | null;
  serviceType?: DiningServiceType | null;

  openingHours?: string | null;

  capacity?: number | null;

  description?: string | null;

  location?: string | null;

  dressCode?: string | null;

  reservationRequired?: boolean | null;

  prices: HotelDiningPrice[];

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}

export interface HotelDiningPrice {
  id: string;

  diningId: string;
  dining: HotelDiningOption;

  name?: string | null;

  price: number;

  currency: string;

  active: boolean;

  createdAt: Date;
}

export interface DiningMealType {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;

  icon?: string | null;

  active: boolean;

  sortOrder: number;

  diningOptions: HotelDiningOption[];

  createdAt: Date;

  updatedAt: Date;
}

export interface DiningServiceType {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;

  icon?: string | null;

  active: boolean;

  sortOrder: number;

  diningOptions: HotelDiningOption[];

  createdAt: Date;

  updatedAt: Date;
}
