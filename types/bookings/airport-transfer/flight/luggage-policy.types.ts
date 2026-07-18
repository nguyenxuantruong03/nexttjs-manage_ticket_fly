
export interface AirportTransferLuggagePolicy {
  id: string;

  transferId: string;

  checkedBaggage?: number;

  cabinBaggage?: number;

  oversizedAllowed?: boolean;

  oversizedFee?: number;

  sportsEquipmentAllowed?: boolean;

  strollerAllowed?: boolean;

  wheelchairAllowed?: boolean;

  createdAt: string;
}