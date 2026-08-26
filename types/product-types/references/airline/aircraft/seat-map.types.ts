import { FlyAircraft } from "./aircraft.types";



export interface FlySeatMap {
  id: string;

  aircraftId: string;
  aircraft?: FlyAircraft;

  imageUrl?: string;

  svgUrl?: string;

  jsonLayout?: unknown;

  createdAt: Date;

  updatedAt: Date;
}