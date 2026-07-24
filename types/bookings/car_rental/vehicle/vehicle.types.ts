import { CarRentalAvailabilityCalendar } from "../booking/availability-calendar.types";
import { CarRentalBooking } from "../booking/booking.types";
import { CarRental } from "../core/car-rental.types";
import {
  RentalFuelType,
  RentalTransmission,
  RentalVehicleStatus,
  RentalVehicleType,
} from "../enums";
import { CarRentalPrice } from "../pricing/price.types";
import { CarRentalInventoryLock } from "../trip/inventory-lock.types";
import { CarRentalVehicleCapacity } from "./vehicle-capacity.types";
import { CarRentalVehicleDocument } from "./vehicle-document.types";
import { CarRentalVehicleFeatures } from "./vehicle-feature.types";
import { CarRentalVehicleImage } from "./vehicle-image.types";
import { CarRentalVehicleLocation } from "./vehicle-location.types";
import { CarRentalVehicleMaintenance } from "./vehicle-maintenance.types";
import { CarRentalVehicleSpecification } from "./vehicle-specification.types";

export interface CarRentalVehicle {
  id: string;

  rentalId: string;
  rental?: CarRental;

  bookings?: CarRentalBooking[];
  price?: CarRentalPrice[];

  active: boolean;

  type: RentalVehicleType;
  status?: RentalVehicleStatus | null;

  brand?: string | null;

  model?: string | null;

  year?: number | null;

  color?: string | null;

  licensePlate?: string | null;

  transmission?: RentalTransmission | null;
  fuelType?: RentalFuelType | null;

  fuelCapacityLiters?: number | null;

  mileageKm?: number | null;

  mileageLimitPerDay?: number | null;

  unlimitedMileage?: boolean | null;

  capacity?: CarRentalVehicleCapacity | null;
  features?: CarRentalVehicleFeatures | null;
  specification?: CarRentalVehicleSpecification | null;
  locationCurrent?: CarRentalVehicleLocation | null;
  carLocks?: CarRentalInventoryLock[];
  images?: CarRentalVehicleImage[];
  maintenance?: CarRentalVehicleMaintenance[];
  document?: CarRentalVehicleDocument[];
  calendar?: CarRentalAvailabilityCalendar[];

  createdAt: Date;

  updatedAt: Date;
}
