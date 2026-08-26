import { BoardingPassStatus } from "../enums";
import { BusTicket } from "./ticket.types";

export interface BusBoardingPass {
  id: string;

  ticketId: string;
  ticket: BusTicket;

  status: BoardingPassStatus;

  boardingTime: string | null;

  scannedAt: string | null;

  gate: string | null;

  platform: string | null;

  createdAt: string;

  updatedAt: string;
}
