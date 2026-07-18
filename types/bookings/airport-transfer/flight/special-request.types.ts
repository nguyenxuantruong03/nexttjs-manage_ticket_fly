
export interface AirportTransferSpecialRequest {
  id: string;

  transferId: string;

  childSeat?: boolean;

  babySeat?: boolean;

  boosterSeat?: boolean;

  wheelchair?: boolean;

  petTransport?: boolean;

  bicycle?: boolean;

  skiEquipment?: boolean;

  golfBag?: boolean;

  additionalStop?: boolean;

  noteSupported: boolean;

  createdAt: string;
}
