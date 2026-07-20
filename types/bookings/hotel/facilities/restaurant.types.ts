import { RetaurentCategory } from "../enum/enums";



export interface HotelRestaurant {
  id: string;

  facilitiesId: string;

  name: string;

  cuisineTypes: string[];

  breakfast?: boolean | null;
  lunch?: boolean | null;
  dinner?: boolean | null;
  buffet?: boolean | null;

  reservation?: boolean | null;
  capacity?: number | null;

  opening?: string | null;

  images: HotelRestaurantImage[];

  price: number;
}

export interface HotelRestaurantImage {
  id: string;

  restaurantId: string;

  url: string;

  category: RetaurentCategory;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;
}