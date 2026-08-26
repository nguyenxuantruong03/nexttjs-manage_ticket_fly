import { FlyPassenger } from "./passenger.types";
import { FlyMeal } from "./meal.types";

export interface FlyMealSelection {
  id: string;

  passengerId: string;
  passenger: FlyPassenger;

  mealId: string;
  meal: FlyMeal;

  quantity: number;

  amount: number | null;
}