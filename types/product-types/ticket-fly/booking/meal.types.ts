import { FlyAirline } from "../../references/airline/airline.types";
import { FlyMealType } from "../fly-meal-type";
import { FlyMealSelection } from "./meal-selection";

export interface FlyMeal {
  id: string;

  airlineId: string;
  airline: FlyAirline;

  name: string;

  description: string | null;

  typeId: string;
  type: FlyMealType;

  image: string | null;

  price: number | null;

  selections: FlyMealSelection[];

  active: boolean;
}
