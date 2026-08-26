import { Wishlist } from "@/types/common/user/wishlist";

import { ProviderBooking } from "../provider-bookings";

import { Account } from "./account";
import { Payment } from "@/types/common/user/payment";

import { TwoFactorConfirmation } from "./token";
import { HotelInventoryLock } from "@/types/product-types/hotel/inventory/lock.types";
import { CarRentalReview } from "@/types/product-types/car_rental/review/review.types";
import { HotelReview } from "@/types/product-types/hotel/review";
import { HotelBooking } from "@/types/product-types/hotel/bookings/booking";
import { HotelFavorite } from "@/types/product-types/hotel/favorite";
import { CarRentalBooking } from "@/types/product-types/car_rental/booking/booking.types";
import { CarRentalFavorite } from "@/types/product-types/car_rental/favorite/favorite.types";
import { CarRentalInventoryLock } from "@/types/product-types/car_rental/trip/inventory-lock.types";
import { BusReview } from "@/types/product-types/bus/reviews/review.types";
import { BusFavorite } from "@/types/product-types/bus/favorite/favorites.types";
import { BusBooking } from "@/types/product-types/bus/booking/booking.types";
import { BusSeatInventoryLock } from "@/types/product-types/bus/routes/inventory-lock.types";
import { AirportTransferReview } from "@/types/product-types/airport-transfer/review/review.types";
import { AirportTransferFavorite } from "@/types/product-types/airport-transfer/favorite/favorite.types";
import { AirportTransferBooking } from "@/types/product-types/airport-transfer/booking/booking.types";
import { AirportTransferInventoryLock } from "@/types/product-types/airport-transfer/trip/inventory-lock.types";
import { YachtReview } from "@/types/product-types/yacht/reviews/review.types";
import { YachtFavorite } from "@/types/product-types/yacht/favorite/favorite.types";
import { YachtBooking } from "@/types/product-types/yacht/booking/booking.types";
import { YachtInventoryLock } from "@/types/product-types/yacht/trips/inventory-lock.types";
import { FlyFavorite } from "@/types/product-types/ticket-fly/favorite/favorite.types";
import { FlyBooking } from "@/types/product-types/ticket-fly/booking/booking.types";
import { FlyInventoryLock } from "@/types/product-types/ticket-fly/trip/inventory-lock.types";
import { PromotionUsage } from "@/types/common/commerce/promotion/promotion";
import { CouponUsage } from "@/types/common/commerce/coupon";
import { FlyAirlineRating } from "@/types/product-types/references/airline/airline.types";
import { FlySeatInventoryLock } from "@/types/product-types/references/airline/aircraft/inventory-lock.types";

export interface User {
  id: string;

  email: string;

  emailVerified?: Date | null;

  reSendemail: number;

  name: string;

  image?: string | null;

  banUntil?: Date | null;

  password: string;

  hashedRefreshToken?: string | null;

  isTwoFactorEnabled: boolean;

  role: Role;

  account?: Account | null;

  twoFactorConfirmation?: TwoFactorConfirmation | null;

  providers: ProviderBooking[];

  // Hotel
  hotelReviews: HotelReview[];
  hotelBookings: HotelBooking[];
  hotelFavorite: HotelFavorite[];
  hotelUserLock: HotelInventoryLock[];

  // Car Rental
  carrentalReviews: CarRentalReview[];
  carRentalBooking: CarRentalBooking[];
  carRentalFavorite: CarRentalFavorite[];
  carRentalLock: CarRentalInventoryLock[];

  // Bus
  busesReviews: BusReview[];
  BusFavorite: BusFavorite[];
  BusBooking: BusBooking[];
  busUserLock: BusSeatInventoryLock[];

  // Airport Transfer
  airportTransferReviews: AirportTransferReview[];
  airporttransferFavorite: AirportTransferFavorite[];
  airportTransferBooking: AirportTransferBooking[];
  airportTransferLock: AirportTransferInventoryLock[];

  // Yacht
  yachtReviews: YachtReview[];
  yachtFavorite: YachtFavorite[];
  yachtBooking: YachtBooking[];
  yachtLock: YachtInventoryLock[];

  // Fly
  airlineRating: FlyAirlineRating[];
  flyFavorite: FlyFavorite[];
  flyBooking: FlyBooking[];
  flyLock: FlyInventoryLock[];
  flyseatLock: FlySeatInventoryLock[];

  wishlists: Wishlist[];

  payment: Payment[];

  promotions: PromotionUsage[];

  coupons: CouponUsage[];
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
}
