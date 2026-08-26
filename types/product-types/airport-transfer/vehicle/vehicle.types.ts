import { AirportTransfer } from "../core/airport-transfer.types";
import { AirportTransferBooking } from "../booking/booking.types";
import {
  AirportTransferTransmission,
  AirportTransferVehicleStatus,
} from "../enums";
import { AirportTransferVehicleAssignment } from "../trip/assignment.types";
import { AirportTransferInventoryLock } from "../trip/inventory-lock.types";
import { AirportTransferDriver } from "./driver.types";
import { AirportTransferVehicleAvailability } from "./vehicle-availability.types";
import { AirportTransferVehicleCapacity } from "./vehicle-capacity.types";
import { AirportTransferVehicleImage } from "./vehicle-image.types";
import { AirportTransferVehicleSpecification } from "./vehicle-specification.types";
import { FuelType } from "@/types/common/catalog/fuel-type";
import { AirportTransferVehicleFacilityMapper } from "../airport-transfer-vehicle-facility-mapper";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

export interface AirportTransferVehicle {
  id: string;

  transferId: string;

  transfer: AirportTransfer;

  name: string | null;

  manufacturer: string | null;

  model: string | null;

  year: number | null;

  color: string | null;

  licensePlate: string | null;

  transmission: AirportTransferTransmission | null;

  fuelTypeId: string | null;
  fuelType: FuelType | null;

  vehicleTypeId: string | null;
  vehicleType: VehicleType | null;

  status: AirportTransferVehicleStatus;

  capacity: AirportTransferVehicleCapacity | null;

  facilities: AirportTransferVehicleFacilityMapper[];

  specification: AirportTransferVehicleSpecification | null;

  images: AirportTransferVehicleImage[];

  availability: AirportTransferVehicleAvailability[];

  drivers: AirportTransferDriver[];

  bookings: AirportTransferBooking[];

  locks: AirportTransferInventoryLock[];

  assignments: AirportTransferVehicleAssignment[];

  createdAt: string;

  updatedAt: string;
}
