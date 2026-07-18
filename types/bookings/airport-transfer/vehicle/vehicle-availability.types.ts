
export interface AirportTransferVehicleAvailability {
  id: string;

  vehicleId: string;

  startDate: string;

  endDate: string;

  available: boolean;

  note?: string;

  createdAt: string;
}