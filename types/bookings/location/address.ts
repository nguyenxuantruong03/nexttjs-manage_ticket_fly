import { Invoice } from "@/types/common/payment";
import { City } from "./city";
import { ProviderBooking } from "../provider-bookings";
import { AirportTransferRouteStop } from "../airport-transfer/routes/route-stop.types";
import { CarRentalVehicleLocation } from "../car_rental/vehicle/vehicle-location.types";
import { CarRentalLocation } from "../car_rental/trip/trip-location.types";
import { AirportTransferRoute } from "../airport-transfer/routes/route.types";
import { BusRoute } from "../bus/routes/route.types";
import { YachtBookingPickup } from "../yacht/booking/booking-pickup.types";
import { YachtMarina } from "../yacht/marina/marina.types";
import { YachtRouteStop } from "../yacht/routes/route-stop.types";
import { BusDropoffPoint } from "../bus/routes/dropoff-point.types";
import { BusBoardingPoint } from "../bus/routes/boarding-point.types";
import { BusRouteStop } from "../bus/routes/stop.types";
import { FlyAirport } from "../ticket-fly/airport/airport.types";
import { HotelInformation } from "../hotel/core/hotel-information.types";
import { Country } from "./country";
import { Ward } from "./ward";
import { District } from "./district";
import { Place } from "./place";

export enum AddressPrecision {
  COUNTRY = "COUNTRY",
  CITY = "CITY",
  DISTRICT = "DISTRICT",
  STREET = "STREET",
  ADDRESS = "ADDRESS",
  POINT = "POINT",
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
  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
