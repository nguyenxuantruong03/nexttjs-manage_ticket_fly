import { FlyPassenger } from "./passenger.types";

export interface FlyTicket {
  id: string;

  passengerId: string;

  passenger?: FlyPassenger;

  ticketNumber: string;

  pnr?: string;

  qrCode?: string;

  issuedAt?: Date;

  boardingPass?: FlyBoardingPass;

  createdAt: Date;
}


export interface FlyBoardingPass {
  id: string;

  ticketId: string;

  ticket?: FlyTicket;

  gate?: string;

  boardingTime?: Date;

  boardingGroup?: string;

  barcode?: string;
}