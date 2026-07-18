import { Invoice } from "@/types/common/payment";
import { City } from "./cities";
import { ProviderBooking } from "../provider-bookings";
import { HotelNearbyPlace } from "../hotel/content/nearby-place.types";
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
import { FlyAirport } from "../fly/airport/airport.types";
import { HotelInformation } from "../hotel/core/hotel-information.types";

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
  ward?: string | null;
  district?: string | null;
  administrativeArea?: string | null;
  region?: string | null;

  postcode?: string | null;

  countryCode: string;

  cityId: string;

  city?: City;

  // ======================================================
  // MAP
  // ======================================================
  latitude?: number | null;
  longitude?: number | null;

  timezone?: string | null;

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
  invoicePayment?: Invoice | null;
  hotelNearbyPlace?: HotelNearbyPlace | null;
  providerBooking?: ProviderBooking | null;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
