import { FlyAircraft } from "./aircraft.types";


export interface FlyAircraftFeatures {
  id: string;

  aircraftId: string;
  aircraft?: FlyAircraft;

  wifi?: boolean;

  powerOutlet?: boolean;

  usbPort?: boolean;

  entertainment?: boolean;

  liveTV?: boolean;

  recliningSeat?: boolean;

  lieFlatSeat?: boolean;

  mealService?: boolean;

  alcoholService?: boolean;

  blanket?: boolean;

  pillow?: boolean;
}
