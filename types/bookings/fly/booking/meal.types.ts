import { Currency } from "@/types/common/enums";
import { FlyAirline } from "../airline/airline.types";
import { FlyMealType } from "../enums";
import { FlyPassenger } from "./passenger.types";

export interface FlyMealSelection {
  id: string;

  passengerId: string;

  passenger?: FlyPassenger;

  mealId: string;

  meal?: FlyMeal;

  quantity: number;

  amount?: number;

  currency?: Currency;
}


export interface FlyMeal {
  id: string;

  airlineId: string;

  airline?: FlyAirline;

  name: string;

  description?: string;

  type: FlyMealType;

  image?: string;

  price?: number;

  currency?: Currency;

  selections?: FlyMealSelection[];

  active: boolean;
}