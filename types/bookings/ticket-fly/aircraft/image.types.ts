import { FlyAircraftImageCategory } from "../enums";
import { FlyAircraft } from "./aircraft.types";


export interface FlyAircraftImage {
  id: string;

  aircraftId: string;
  aircraft?: FlyAircraft;

  url: string;

  category: FlyAircraftImageCategory;

  isPrimary: boolean;

  sortOrder: number;

  alt?: string;

  createdAt: Date;
}
