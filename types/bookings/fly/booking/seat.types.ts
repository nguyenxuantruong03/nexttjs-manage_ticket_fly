import { FlySeat } from "../aircraft/cabin.types";
import { FlyPassenger } from "./passenger.types";

export interface FlySeatAssignment {
  id: string;

  passengerId: string;

  passenger?: FlyPassenger;

  seatId: string;

  seat?: FlySeat;

  paid: boolean;

  amount?: number;

  assignedAt: Date;
}