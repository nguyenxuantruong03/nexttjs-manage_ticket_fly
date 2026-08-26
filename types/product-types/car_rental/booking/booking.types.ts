import { User } from "@/types/users/auth/users";

import {
  CarRentalBookingStatus,
  CarRentalBookingType,
  CarRentalPaymentStatus,
} from "../enums";

import { CarRental } from "../core/car-rental.types";
import { CarRentalVehicle } from "../vehicle/vehicle.types";
import { CarRentalReview } from "../review/review.types";
import { CarRentalInventoryLock } from "../trip/inventory-lock.types";
import { CarRentalLocation } from "../trip/trip-location.types";
import { CarRentalAvailabilityCalendar } from "./availability-calendar.types";
import { CarRentalBookingDriver } from "./booking-driver.types";
import { CarRentalBookingExtra } from "./booking-extra.types";
import { CarRentalBookingStatusHistory } from "./booking-history.types";
import { CarRentalBookingInsurance } from "./booking-insurance";
import { CarRentalBookingPassenger } from "./booking-passenger.types";
import { CarRentalBookingPrice } from "./booking-price.types";
import { CarRentalPackageMapper } from "../carRental-package-mapper.type";

export interface CarRentalBooking {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  userId: string;
  user: User;

  rentalId: string;
  rental: CarRental;

  vehicleId: string | null;
  vehicle: CarRentalVehicle | null;

  packageId: string | null;
  package: CarRentalPackageMapper | null;

  carLocks: CarRentalInventoryLock[];

  // ======================================================
  // BOOKING INFO
  // ======================================================

  bookingCode: string;

  type: CarRentalBookingType;

  status: CarRentalBookingStatus;

  paymentStatus: CarRentalPaymentStatus;

  // ======================================================
  // RENTAL TIME
  // ======================================================

  pickupDate: Date;

  returnDate: Date;

  totalHours: number | null;

  totalDays: number | null;

  // ======================================================
  // LOCATION SNAPSHOT
  // ======================================================

  locations: CarRentalLocation[];

  // ======================================================
  // SNAPSHOT VEHICLE
  // ======================================================

  vehicleBrand: string | null;

  vehicleModel: string | null;

  vehicleType: string | null;

  vehicleTransmission: string | null;

  vehicleFuelType: string | null;

  licensePlate: string | null;

  year: string | null;

  color: string | null;

  // ======================================================
  // DRIVER OPTION
  // ======================================================

  driverRequired: boolean;

  // ======================================================
  // PRICE
  // ======================================================

  price: CarRentalBookingPrice | null;

  // ======================================================
  // EXTRA
  // ======================================================

  extras: CarRentalBookingExtra[];

  // ======================================================
  // DRIVER
  // ======================================================

  driver: CarRentalBookingDriver | null;

  // ======================================================
  // PASSENGER
  // ======================================================

  passengers: CarRentalBookingPassenger[];

  // ======================================================
  // STATUS LOG
  // ======================================================

  statusHistory: CarRentalBookingStatusHistory[];

  calendarDays: CarRentalAvailabilityCalendar[];

  reviews: CarRentalReview[];

  bookingInsurance: CarRentalBookingInsurance[];

  // ======================================================
  // EXPIRATION
  // ======================================================

  expiresAt: Date | null;

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}