import { BookingType } from "@/types/common/commerce/booking-type";
import { City } from "@/types/location/city";
import { Country } from "@/types/location/country/country";
import { Place } from "@/types/location/place/place";
import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";
import { Bus } from "@/types/product-types/bus/core/bus.types";
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";
import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";
import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

export interface SearchTag {
  id: string;

  name: string;

  slug: string;

  bookingTypes: BookingType[];
  bookingTypeIds: string[];

  city: City[];

  country: Country[];

  hotel: Hotel[];

  airportTransfer: AirportTransfer[];

  fly: Fly[];

  bus: Bus[];

  carRental: CarRental[];

  yacht: Yacht[];

  place: Place[];

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}
