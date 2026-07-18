

export interface YachtCapacity {
  id: string;

  vehicleId: string;

  guestCapacity: number;

  overnightCapacity?: number | null;

  cabinCount?: number | null;

  bathroomCount?: number | null;

  crewCapacity?: number | null;
}