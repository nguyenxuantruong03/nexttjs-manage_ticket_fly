
export interface BusVehicleCapacity {
  id: string;

  vehicleId: string;

  totalSeats: number;

  sleeperBeds?: number;

  cabinRooms?: number;

  luggageCapacityKg?: number;

  createdAt: string;
}
