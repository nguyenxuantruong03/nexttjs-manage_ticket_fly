import { FlySeatAssignment } from "../booking/seat.types";
import { FlyCabinClass, FlySeatType } from "../enums";
import { FlyAircraft } from "./aircraft.types";
import { FlySeatInventoryLock } from "./inventory-lock.types";

export interface FlyCabin {
  id: string;

  aircraftId: string;
  aircraft?: FlyAircraft;

  class: FlyCabinClass;

  name?: string;

  rows?: number;

  totalSeats: number;

  seats?: FlySeat[];

  createdAt: Date;
}


export interface FlySeat {
  id: string;

  cabinId: string;
  cabin?: FlyCabin;

  seatNumber: string;

  row?: number;

  column?: string;

  type: FlySeatType;

  extraLegroom: boolean;

  emergencyExit: boolean;

  nearWindow?: boolean;

  nearAisle?: boolean;

  nearWing?: boolean;

  available: boolean;

  locks?: FlySeatInventoryLock[];

  seatAssignment?: FlySeatAssignment[];

  createdAt: Date;
}
