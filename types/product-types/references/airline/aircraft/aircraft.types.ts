import { FlyTrip } from "@/types/product-types/ticket-fly/trip/trip.types";
import { FlyAirline } from "../airline.types";
import { FlySchedule } from "../schedule.types";
import { FlyCabin } from "./cabin.types";
import { FlyAircraftImage } from "./image.types";
import { FlySeatMap } from "./seat-map.types";
import { FlyAircraftSpecification } from "./specification.types";
import { FlyAircraftFacilityMapper } from "./facility-mapper.types";

export interface FlyAircraft {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  trips: FlyTrip[];

  airlineId: string;
  airline: FlyAirline;

  // ======================================================
  // BASIC
  // ======================================================

  manufacturer: string | null;

  model: string | null;

  code: string | null;

  registrationNumber: string | null;

  active: boolean;

  // ======================================================
  // SPECIFICATION
  // ======================================================

  specification: FlyAircraftSpecification | null;

  // ======================================================
  // FACILITIES
  // ======================================================

  facilities: FlyAircraftFacilityMapper[];

  // ======================================================
  // CABIN / SEAT
  // ======================================================

  cabins: FlyCabin[];

  images: FlyAircraftImage[];

  seatMap: FlySeatMap | null;

  schedule: FlySchedule[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;

  updatedAt: string;
}
