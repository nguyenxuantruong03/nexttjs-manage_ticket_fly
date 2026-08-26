import { FlyCrewAssignment } from "../../references/airline/crew/assignment.types";
import { FlyCabinClass } from "../fly-cabin-class";
import { FlyFare } from "../pricing/fare.types";
import { FlyInventoryLock } from "./inventory-lock.types";
import { FlyTrip } from "./trip.types";

export interface FlyInventory {
  id: string;

  tripId: string;
  trip?: FlyTrip;

  crewAssignments?: FlyCrewAssignment[];

  cabins?: FlyCabinInventory[];

  createdAt: Date;
  updatedAt: Date;
}

export interface FlyCabinInventory {
  id: string;

  inventoryId: string;
  inventory?: FlyInventory;

  cabinClassId: string;
  cabinClass?: FlyCabinClass;

  totalSeats: number;

  availableSeats: number;

  reservedSeats: number;

  blockedSeats: number;

  overbookLimit?: number;

  waitlistSeats?: number;

  fares?: FlyInventoryFare[];
}

export interface FlyInventoryFare {
  id: string;

  cabinInventoryId: string;
  cabinInventory?: FlyCabinInventory;

  fareId: string;
  fare?: FlyFare;

  locks?: FlyInventoryLock[];

  available: number;

  sold: number;

  hold: number;

  waitlist: number;
}