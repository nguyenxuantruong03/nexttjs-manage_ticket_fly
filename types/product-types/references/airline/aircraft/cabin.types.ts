import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";
import { FlyAircraft } from "./aircraft.types";
import { FlySeatInventoryLock } from "./inventory-lock.types";
import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";
import { FlySeatAssignment } from "@/types/product-types/ticket-fly/booking/seat.types";

export interface FlyCabin {
  id: string;

  aircraftId: string;
  aircraft: FlyAircraft;

  cabinClassId: string;
  cabinClass: FlyCabinClass;

  name: string | null;

  rows: number | null;

  totalSeats: number;

  seats: FlySeat[];

  createdAt: string;
}

export interface FlySeat {
  id: string;

  cabinId: string;
  cabin: FlyCabin;

  seatNumber: string;

  row: number | null;

  column: string | null;

  typeId: string;
  type: FlySeatType;

  extraLegroom: boolean;

  emergencyExit: boolean;

  nearWindow: boolean | null;

  nearAisle: boolean | null;

  nearWing: boolean | null;

  available: boolean;

  locks: FlySeatInventoryLock[];

  seatAssignment: FlySeatAssignment[];

  createdAt: string;
}
