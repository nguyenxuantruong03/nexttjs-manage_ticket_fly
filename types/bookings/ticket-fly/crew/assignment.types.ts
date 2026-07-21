import { FlyCrewDuty } from "../enums";
import { FlyInventory } from "../trip/inventory.types";
import { FlyTrip } from "../trip/trip.types";
import { FlyCrew } from "./crew.types";


export interface FlyCrewAssignment {
  id: string;

  crewId: string;

  crew?: FlyCrew;

  tripId: string;

  trip?: FlyTrip;

  inventoryId: string;
  inventory?: FlyInventory;
  duty: FlyCrewDuty;

  createdAt: Date;
}
