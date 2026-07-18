
export interface AirportTransferMeetAndGreet {
  id: string;

  transferId: string;

  available: boolean;

  included: boolean;

  additionalFee?: number;

  nameBoard: boolean;

  airportRepresentative?: boolean;

  multilingualSupport?: boolean;

  createdAt: string;
}