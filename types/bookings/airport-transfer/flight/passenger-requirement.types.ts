
export interface AirportTransferPassengerRequirement {
  id: string;

  transferId: string;

  passportRequired?: boolean;

  phoneRequired: boolean;

  emailRequired: boolean;

  minimumPassenger?: number;

  maximumPassenger?: number;

  createdAt: string;
}