import { CarRentalBookingStatus, CarRentalBookingType, CarRentalPaymentStatus } from "../enums";
import { CarRentalBookingInsurance } from "../insurance/booking-insurance.types";
import { CarRentalReview } from "../review/review.types";
import { CarRentalInventoryLock } from "../trip/inventory-lock.types";
import { CarRentalLocation } from "../trip/trip-location.types";
import { CarRentalAvailabilityCalendar } from "./availability-calendar.types";
import { CarRentalBookingDriver } from "./booking-driver.types";
import { CarRentalBookingExtra } from "./booking-extra.types";
import { CarRentalBookingStatusHistory } from "./booking-history.types";
import { CarRentalBookingPassenger } from "./booking-passenger.types";
import { CarRentalBookingPrice } from "./booking-price.types";

export interface CarRentalBooking {
  id: string;

  // Relations
  userId: string;
  rentalId: string;
  vehicleId?: string;

  carLocks: CarRentalInventoryLock[];

  // Booking
  bookingCode: string;
  type: CarRentalBookingType;
  status: CarRentalBookingStatus;
  paymentStatus: CarRentalPaymentStatus;

  // Rental Time
  pickupDate: string;
  returnDate: string;
  totalHours?: number;
  totalDays?: number;

  // Locations
  locations: CarRentalLocation[];

  // Vehicle Snapshot
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleType?: string;
  vehicleTransmission?: string;
  vehicleFuelType?: string;
  licensePlate?: string;
  year?: string;
  color?: string;

  // Driver
  driverRequired: boolean;
  driver?: CarRentalBookingDriver;
  // Price
  price?: CarRentalBookingPrice;
  // Extras
  extras: CarRentalBookingExtra[];
  // Passenger
  passengers: CarRentalBookingPassenger[];
  // History
  statusHistory: CarRentalBookingStatusHistory[];
  calendarDays: CarRentalAvailabilityCalendar[];
  reviews: CarRentalReview[];
  bookingInsurance: CarRentalBookingInsurance[];

  expiresAt?: string;

  createdAt: string;
  updatedAt: string;
}
