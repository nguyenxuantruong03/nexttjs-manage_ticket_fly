import { FlyMeal } from "./booking/meal.types";

export interface FlyMealType {
  id: string;

  name: string;
  slug: string
  description?: string;
  icon?: string;
  sortOrder: number;
  active: boolean;

  meals?: FlyMeal[];

  createdAt: Date;
  updatedAt: Date;
}