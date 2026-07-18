import { FlyAirline } from "../airline/airline.types";
import { FlySchedule } from "../airline/schedule.types";
import { FlyTrip } from "../trip/trip.types";
import { FlyCabin } from "./cabin.types";
import { FlyAircraftFeatures } from "./feature.types";
import { FlyAircraftImage } from "./image.types";
import { FlySeatMap } from "./seat-map.types";
import { FlyAircraftSpecification } from "./specification.types";


export interface FlyAircraft {
  id: string;

  trips?: FlyTrip[];

  airlineId: string;
  airline?: FlyAirline;

  manufacturer?: string;
  model?: string;

  code?: string;

  registrationNumber?: string;

  active: boolean;

  specification?: FlyAircraftSpecification;

  features?: FlyAircraftFeatures;

  cabins?: FlyCabin[];

  images?: FlyAircraftImage[];

  seatMap?: FlySeatMap;

  schedule?: FlySchedule[];

  createdAt: Date;

  updatedAt: Date;
}