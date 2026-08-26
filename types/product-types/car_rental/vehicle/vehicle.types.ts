import { CarRentalAvailabilityCalendar } from "../booking/availability-calendar.types";
import { CarRentalBooking } from "../booking/booking.types";
import { CarRental } from "../core/car-rental.types";
import {
  RentalFuelType,
  RentalTransmission,
  RentalVehicleStatus,
} from "../enums";
import { CarRentalPrice } from "../pricing/price.types";
import { CarRentalInventoryLock } from "../trip/inventory-lock.types";
import { CarRentalVehicleCapacity } from "./vehicle-capacity.types";
import { CarRentalVehicleDocument } from "./vehicle-document.types";
import { CarRentalVehicleFacilityMapper } from "./vehicle-facility.types";
import { CarRentalVehicleMedia } from "./vehicle-image.types";
import { CarRentalVehicleLocation } from "./vehicle-location.types";
import { CarRentalVehicleMaintenance } from "./vehicle-maintenance.types";
import { CarRentalVehicleSpecification } from "./vehicle-specification.types";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

export interface CarRentalVehicle {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  rentalId: string;
  rental: CarRental;

  bookings: CarRentalBooking[];
  price: CarRentalPrice[];

  vehicleTypeId: string | null;
  vehicleType: VehicleType | null;

  // ======================================================
  // BASIC
  // ======================================================

  active: boolean;

  status: RentalVehicleStatus | null;

  brand: string | null;
  model: string | null;
  year: number | null;
  color: string | null;
  licensePlate: string | null;

  transmission: RentalTransmission | null;
  fuelType: RentalFuelType | null;

  fuelCapacityLiters: number | null;
  mileageKm: number | null;
  mileageLimitPerDay: number | null;
  unlimitedMileage: boolean | null;

  // ======================================================
  // VEHICLE DATA
  // ======================================================

  capacity: CarRentalVehicleCapacity | null;

  facilities: CarRentalVehicleFacilityMapper[];

  specification: CarRentalVehicleSpecification | null;

  locationCurrent: CarRentalVehicleLocation | null;

  // ======================================================
  // INVENTORY
  // ======================================================

  carLocks: CarRentalInventoryLock[];

  // ======================================================
  // MEDIA
  // ======================================================

  medias: CarRentalVehicleMedia[];

  // ======================================================
  // OTHER
  // ======================================================

  maintenance: CarRentalVehicleMaintenance[];

  document: CarRentalVehicleDocument[];

  calendar: CarRentalAvailabilityCalendar[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;
  updatedAt: string;
}