import { FlyAircraft } from "../aircraft/aircraft.types";
import { FlySeatInventoryLock } from "../aircraft/inventory-lock.types";
import { FlySchedule } from "../airline/schedule.types";
import { FlyCodeshare } from "../alliance/codeshare.types";
import { FlyConnection } from "../alliance/connection.types";
import { FlyItinerarySegment } from "../alliance/itinerary.types";
import { Fly } from "../core/fly.types";
import { FlyCrewAssignment } from "../crew/assignment.types";
import { FlyCrewSchedule } from "../crew/schedule.types";
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

  flyId: string;
  fly?: Fly;

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
