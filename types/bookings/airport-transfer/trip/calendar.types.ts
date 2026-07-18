
export interface AirportTransferAvailabilityCalendar {
  id: string;

  availabilityId: string;

  date: string;

  available: boolean;

  totalVehicles: number;

  remainingVehicles: number;

  stopSell: boolean;

  minimumNoticeMinutes?: number;

  createdAt: string;
}