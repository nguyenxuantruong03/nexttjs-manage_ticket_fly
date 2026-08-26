import { ProviderBooking } from "../../../users/provider-bookings";
import { SearchTag } from "../../../searchs/search/tag.types";
import { CarRentalBooking } from "../booking/booking.types";
import { CarRentalBusinessHour } from "./business-hour.types";
import { CarRentalDriver } from "../trip/driver.types";
import { CarRentalFavorite } from "../favorite/favorite.types";
import { CarRentalInsurance } from "../insurance/insurance.types";
import { CarRentalMedia } from "./image.types";
import { CarRentalPickupInstruction } from "../trip/pickup-instruction.types";
import { CarRentalPolicyMapper } from "../policies/policies.types";
import { CarRentalRequiredDocumentType } from "../policies/required-documents.types";
import { CarRentalReview } from "../review/review.types";
import { CarRentalTrip } from "../trip/trip.types";
import { CarRentalVehicle } from "../vehicle/vehicle.types";
import { DriverOption } from "../enums";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { CarRentalExtraMapper } from "../carRental-extra-mapper.type";
import { CarRentalPackageMapper } from "../carRental-package-mapper.type";

export interface CarRental {
  id: string;

  // ======================================================
  // CONFIGURATION
  // ======================================================

  driverOption: DriverOption;

  serviceTypeId: string;
  serviceType: ServiceType;

  bookingItemTypeId: string;
  bookingItemType: BookingItemType;

  // ======================================================
  // RELATIONS
  // ======================================================

  trip: CarRentalTrip | null;

  policies: CarRentalPolicyMapper[];
  requiredDocuments: CarRentalRequiredDocumentType[];

  vehicle: CarRentalVehicle[];
  reviews: CarRentalReview[];
  medias: CarRentalMedia[];

  carRentalExtraMapper: CarRentalExtraMapper[];

  bookings: CarRentalBooking[];
  insurances: CarRentalInsurance[];

  businessHours: CarRentalBusinessHour[];
  pickupInstructions: CarRentalPickupInstruction[];

  drivers: CarRentalDriver[];
  favorites: CarRentalFavorite[];

  carRentalPackageMapper: CarRentalPackageMapper[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  // ======================================================
  // SEARCH METADATA
  // ======================================================

  name: string;
  slug: string;

  aliases: string[];
  keywords: string[];
  searchText: string;

  tagIds: string[];
  tags: SearchTag[];

  searchable: boolean;
  featured: boolean;
  searchPriority: number;

  ratingAverage: number;
  reviewCount: number;
  bookingCount: number;
  favoriteCount: number;

  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: string;
  providerBooking: ProviderBooking;

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;
  updatedAt: Date;
}