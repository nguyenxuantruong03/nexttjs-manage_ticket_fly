import { Currency } from "@/types/common/enums";
import { MealPriceUnit } from "../enum/enums";


export interface HotelMealPrice {
  id: string;

  mealId: string;

  price: number;

  currency: Currency;

  unit: MealPriceUnit;

  createdAt: Date;
}
