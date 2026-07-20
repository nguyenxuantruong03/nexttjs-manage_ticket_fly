import { MealPriceUnit } from "../enum/enums";


export interface HotelMealPrice {
  id: string;

  mealId: string;

  price: number;


  unit: MealPriceUnit;

  createdAt: Date;
}
