import { FlyAircraft } from "../../references/airline/aircraft/aircraft.types";
import { FlySeatInventoryLock } from "../../references/airline/aircraft/inventory-lock.types";
import { FlyCrewAssignment } from "../../references/airline/crew/assignment.types";
import { FlyCrewSchedule } from "../../references/airline/crew/schedule.types";
import { FlySchedule } from "../../references/airline/schedule.types";
import { FlyCodeshare } from "../../references/alliance/codeshare.types";
import { FlyConnection } from "../../references/alliance/connection.types";
import { FlyItinerarySegment } from "../../references/alliance/itinerary.types";
import { FlyTripStatus } from "../enums";
import { FlyCancellation } from "../operation/cancellation.types";
import { FlyDiversion } from "../operation/diversion.types";
import { FlyTripHistory } from "../operation/history.types";
import { FlyOperation } from "../operation/operation.types";
import { FlyTracking } from "../operation/tracking.types";
import { FlyRoute } from "../routes/route.types";
import { FlyInventory } from "./inventory.types";

export interface FlyTrip {
  id: string;

  routeId: string;
  route?: FlyRoute;

  flightNumber: string;
  departureTime: Date;
  arrivalTime: Date;
  durationMinutes: number;
  status: FlyTripStatus;
  availableSeats?: number;

  aircraftId?: string;
  aircraft?: FlyAircraft;
  scheduleId?: string;
  schedule?: FlySchedule;
  seatLocks?: FlySeatInventoryLock[];
  inventory?: FlyInventory;
  operation?: FlyOperation;
  tracking?: FlyTracking[];
  cancellation?: FlyCancellation;
  diversion?: FlyDiversion;
  codeshares?: FlyCodeshare[];
  firstConnections?: FlyConnection[];
  secondConnections?: FlyConnection[];
  crewSchedule?: FlyCrewSchedule[];
  crewAssignment?: FlyCrewAssignment[];
  history?: FlyTripHistory[];
  itinerarySegment?: FlyItinerarySegment[];

  createdAt: Date;

  updatedAt: Date;
}
