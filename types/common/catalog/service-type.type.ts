import { BookingType } from "@/types/common/commerce/booking-type";
import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";
import { Bus } from "@/types/product-types/bus/core/bus.types";
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";
import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";
import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

export interface ServiceType {
  id: string;

  bookingTypeId: string;

  bookingType?: BookingType;

  name: string;

  slug: string;

  description: string | null;

  icon: string | null;

  sortOrder: number;

  active: boolean;

  transfers: AirportTransfer[];
  hotels: Hotel[];
  yachts: Yacht[];
  buses: Bus[];
  carRentals: CarRental[];
  flies: Fly[];

  createdAt: Date;

  updatedAt: Date;
}
