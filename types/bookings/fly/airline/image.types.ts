import { FlyAirlineImageCategory } from "../enums";
import { FlyAirline } from "./airline.types";

export interface FlyAirlineImage {
  id: string;

  airlineId: string;

  airline?: FlyAirline;

  url: string;

  category: FlyAirlineImageCategory;

  isPrimary: boolean;

  createdAt: Date;
}