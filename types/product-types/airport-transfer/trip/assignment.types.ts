import { AirportTransferDriver } from "../vehicle/driver.types";
import { AirportTransferVehicle } from "../vehicle/vehicle.types";
import { AirportTransferTrip } from "./trip.types";

export interface AirportTransferVehicleAssignment {
  id: string;

  tripId: string;
  trip: AirportTransferTrip;

  vehicleId: string;
  vehicle: AirportTransferVehicle;

  driverId?: string;
  driver?: AirportTransferDriver;
  assignedAt: string;
}
