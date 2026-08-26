import { City } from "./city";

import { Country } from "./country/country";
import { Ward } from "./ward";
import { District } from "./district";
import { Place } from "./place/place";
import { HotelInformation } from "@/app/(home)/product-types/hotel/main/components/schema/core/hotel-information.schema";
import { BusRouteStop } from "../product-types/bus/routes/stop.types";
import { BusBoardingPoint } from "../product-types/bus/routes/boarding-point.types";
import { BusDropoffPoint } from "../product-types/bus/routes/dropoff-point.types";
import { YachtRouteStop } from "../product-types/yacht/routes/route-stop.types";
import { YachtMarina } from "../product-types/yacht/marina/marina.types";
import { YachtBookingPickup } from "../product-types/yacht/booking/booking-pickup.types";
import { BusRoute } from "../product-types/bus/routes/route.types";
import { AirportTransferRoute } from "../product-types/airport-transfer/routes/route.types";
import { CarRentalLocation } from "../product-types/car_rental/trip/trip-location.types";
import { CarRentalVehicleLocation } from "../product-types/car_rental/vehicle/vehicle-location.types";
import { AirportTransferRouteStop } from "../product-types/airport-transfer/routes/route-stop.types";
import { ProviderBooking } from "../users/provider-bookings";
import { FlyAirport } from "../product-types/references/airport/airport.types";

export enum AddressPrecision {
  COUNTRY = "COUNTRY",
  CITY = "CITY",
  DISTRICT = "DISTRICT",
  WARD = "WARD",
  STREET = "STREET",
  HOUSE = "HOUSE",
  EXACT = "EXACT",
}

export interface Address {
  id: string;

  // ======================================================
  // ADDRESS
  // ======================================================
  name?: string | null;

  houseNumber?: string | null;
  street?: string | null;

  wardId?: string | null;
  ward?: Ward;

  districtId?: string | null;
  district: District;

  postcode?: string | null;

  countryId: string;
  country: Country;

  cityId: string;
  city?: City;

  // ======================================================
  // MAP
  // ======================================================
  latitude?: number | null;
  longitude?: number | null;

  plusCode?: string | null;

  precision: AddressPrecision;

  // ======================================================
  // RELATIONS
  // ======================================================

  hotelInformations?: HotelInformation[];
  airport?: FlyAirport[];
  busRouteStop?: BusRouteStop[];
  busBoardingPoint?: BusBoardingPoint[];
  busDropoffPoint?: BusDropoffPoint[];
  yachtRouteStop?: YachtRouteStop[];
  yachtMarina?: YachtMarina[];
  yachtBookingPickups?: YachtBookingPickup[];
  departureBusRoutes?: BusRoute[];
  arrivalBusRoutes?: BusRoute[];
  departureAirportTransferRoutes?: AirportTransferRoute[];
  arrivalAirportTransferRoutes?: AirportTransferRoute[];
  carRentalLocations?: CarRentalLocation[];
  carRentalVehicleLocation?: CarRentalVehicleLocation | null;
  airportTransferRouteStop?: AirportTransferRouteStop[];
  providerBooking?: ProviderBooking | null;
  place?: Place;

  active: boolean;
  verified: boolean;

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail?: string;
  coverImage?: string;
  bannerImage?: string;
  images: string[];
  video?: string;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
