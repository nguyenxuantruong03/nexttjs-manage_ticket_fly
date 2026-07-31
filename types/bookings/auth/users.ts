import { Wishlist } from "@/types/common/wishlist";
import { AirportTransferBooking } from "../airport-transfer/booking/booking.types";
import { AirportTransferFavorite } from "../airport-transfer/favorite/favorite.types";
import { AirportTransferReview } from "../airport-transfer/review/review.types";
import { AirportTransferInventoryLock } from "../airport-transfer/trip/inventory-lock.types";
import { BusBooking } from "../bus/booking/booking.types";
import { BusFavorite } from "../bus/favorite/favorites.types";
import { BusReview } from "../bus/reviews/review.types";
import { BusSeatInventoryLock } from "../bus/routes/inventory-lock.types";
import { CarRentalBooking } from "../car_rental/booking/booking.types";
import { CarRentalFavorite } from "../car_rental/favorite/favorite.types";
import { CarRentalReview } from "../car_rental/review/review.types";
import { CarRentalInventoryLock } from "../car_rental/trip/inventory-lock.types";
import { FlySeatInventoryLock } from "../ticket-fly/aircraft/inventory-lock.types";
import { FlyAirlineRating } from "../ticket-fly/airline/airline.types";
import { FlyBooking } from "../ticket-fly/booking/booking.types";
import { FlyFavorite } from "../ticket-fly/favorite/favorite.types";
import { FlyInventoryLock } from "../ticket-fly/trip/inventory-lock.types";
// import { HotelBooking } from "../hotel/bookings/booking.types";
// import { HotelFavorite } from "../hotel/favorite.types";
import { HotelInventoryLock } from "../hotel/inventory/lock.types";
// import { HotelReview } from "../hotel/review.types";
import { ProviderBooking } from "../provider-bookings";
import { YachtBooking } from "../yacht/booking/booking.types";
import { YachtFavorite } from "../yacht/favorite/favorite.types";
import { YachtReview } from "../yacht/reviews/review.types";
import { YachtInventoryLock } from "../yacht/trips/inventory-lock.types";
import { Account } from "./account";
import { Payment } from "@/types/common/payment";
import { PromotionUsage } from "@/types/common/promotion";
import { CouponUsage } from "@/types/common/coupon";
import { TwoFactorConfirmation } from "./token";

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
  // hotelReviews: HotelReview[];
  // hotelBookings: HotelBooking[];
  // hotelFavorite: HotelFavorite[];
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
