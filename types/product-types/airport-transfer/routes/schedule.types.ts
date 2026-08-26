import { WeekDay } from "@/types/common/enums";
import { AirportTransferTrip } from "../trip/trip.types";
import { AirportTransfer } from "../core/airport-transfer.types";

export interface AirportTransferSchedule {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  transferId: string;
  transfer?: AirportTransfer;

  // ======================================================
  // SCHEDULE INFO
  // ======================================================

  departureTime: string;

  operatingDays: WeekDay[];

  startDate: string;

  endDate?: string;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  // ======================================================
  // RELATIONS
  // ======================================================

  trips: AirportTransferTrip[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;

  updatedAt: string;
}
