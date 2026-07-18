import { CarRentalBooking } from "../booking/booking.types";
import { DriverOption } from "../enums";
import { CarRentalExtra } from "../extra/extra.types";
import { CarRentalInsurance } from "../insurance/insurance.types";
import { CarRentalPolicies } from "../policies/policies.types";
import { CarRentalReview } from "../review/review.types";
import { CarRentalDriver } from "../trip/driver.types";
import { CarRentalPickupInstruction } from "../trip/pickup-instruction.types";
import { CarRentalTrip } from "../trip/trip.types";
import { CarRentalVehicle } from "../vehicle/vehicle.types";
import { CarRentalBusinessHour } from "./business-hour.types";
import { CarRentalFavorite } from "../favorite/favorite.types";
import { CarRentalImage } from "./image.types";


export interface CarRental {
  id: string;

  driverOption: DriverOption;
  trip?: CarRentalTrip;
  policies?: CarRentalPolicies;
  vehicle: CarRentalVehicle[];
  reviews: CarRentalReview[];
  images: CarRentalImage[];
  extras: CarRentalExtra[];
  bookings: CarRentalBooking[];
  insurances: CarRentalInsurance[];
  businessHours: CarRentalBusinessHour[];
  pickupInstructions: CarRentalPickupInstruction[];
  drivers: CarRentalDriver[];
  favorites: CarRentalFavorite[];

  active: boolean;

  name: string;

  slug: string;

  aliases: string[];

  keywords: string[];

  searchText?: string;

  featured: boolean;

  searchPriority: number;

  providerBookingId: string;

  createdAt: string;

  updatedAt: string;
}
