
export interface AirportTransferWaitingPolicy {
  id: string;

  transferId: string;

  freeWaitingMinutes?: number;

  airportFreeWaitingMinutes?: number;

  waitingFeePerHour?: number;

  maximumWaitingMinutes?: number;

  createdAt: string;
}
