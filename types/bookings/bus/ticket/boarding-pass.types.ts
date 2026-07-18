import { BoardingPassStatus } from "../enums";

export interface BusBoardingPass {
  id: string;

  ticketId: string;

  status: BoardingPassStatus;

  boardingTime?: string;

  scannedAt?: string;

  gate?: string;

  platform?: string;

  createdAt: string;

  updatedAt: string;
}