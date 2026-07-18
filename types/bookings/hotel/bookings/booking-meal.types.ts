import { Currency } from "@/types/common/enums";

export interface HotelBookingMeal {
  id: string;

  bookingId: string;

  mealId?: string | null;

  name: string;

  quantity: number;

  price: number;

  total: number;

  currency: Currency;

  createdAt: Date;
}
