import { HotelBookingMeal } from "../bookings/booking-meal.types";
import { HotelMealType } from "../enum/enums";
import { HotelMealPrice } from "./meal-price.types";

export interface HotelMealOption {
  id: string;

  hotelId: string;

  name: string;

  description?: string | null;

  type: HotelMealType;

  prices: HotelMealPrice[];

  bookingMeals: HotelBookingMeal[];

  active: boolean;

  createdAt: Date;
}
