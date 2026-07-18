import { AirportTransferBooking } from "../booking/booking.types";
import {
  AirportTransferFuelType,
  AirportTransferTransmission,
  AirportTransferVehicleStatus,
  AirportTransferVehicleType,
} from "../enums";
import { AirportTransferVehicleAssignment } from "../trip/assignment.types";
import { AirportTransferInventoryLock } from "../trip/inventory-lock.types";
import { AirportTransferDriver } from "./driver.types";
import { AirportTransferVehicleAvailability } from "./vehicle-availability.types";
import { AirportTransferVehicleCapacity } from "./vehicle-capacity.types";
import { AirportTransferVehicleFeatures } from "./vehicle-features.types";
import { AirportTransferVehicleImage } from "./vehicle-image.types";
import { AirportTransferVehicleSpecification } from "./vehicle-specification.types";

export interface AirportTransferVehicle {
  id: string;

  transferId: string;

  type: AirportTransferVehicleType;

  name?: string;

  manufacturer?: string;

  model?: string;

  year?: number;

  color?: string;

  licensePlate?: string;

  transmission?: AirportTransferTransmission;

  fuelType?: AirportTransferFuelType;

  status: AirportTransferVehicleStatus;

  capacity?: AirportTransferVehicleCapacity;

  features?: AirportTransferVehicleFeatures;

  specification?: AirportTransferVehicleSpecification;

  images: AirportTransferVehicleImage[];

  availability: AirportTransferVehicleAvailability[];

  drivers: AirportTransferDriver[];

  bookings: AirportTransferBooking[];

  locks: AirportTransferInventoryLock[];

  assignments: AirportTransferVehicleAssignment[];

  createdAt: string;

  updatedAt: string;
}
