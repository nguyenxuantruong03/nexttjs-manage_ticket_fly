import { User } from "@/types/users/auth/users";


import { FlyInventoryLock } from "../trip/inventory-lock.types";

import { FlyBookingStatus } from "../enums";

import { FlyBookingStatusHistory } from "./history.types";
import { FlyPassenger } from "./passenger.types";
import { FlyBookingContact } from "./contact.types";
import { FlyBookingExtra } from "./booking-extra.type";

import { FlyPackageMapper } from "../fly-package-mapper.type";
import { FlySeatInventoryLock } from "../../references/airline/aircraft/inventory-lock.types";
import { FlyInterline } from "../../references/alliance/interline.types";
import { FlyItinerary } from "../../references/alliance/itinerary.types";

export interface FlyBooking {
  id: string;

  // ======================================================
  // BOOKING
  // ======================================================

  bookingNumber: string;

  // ======================================================
  // USER
  // ======================================================

  userId: string | null;
  user: User | null;

  // ======================================================
  // PACKAGE
  // ======================================================

  packageId: string | null;
  package: FlyPackageMapper | null;

  // ======================================================
  // CONTACT
  // ======================================================

  contact: FlyBookingContact | null;

  // ======================================================
  // PASSENGERS
  // ======================================================

  passengers: FlyPassenger[];

  // ======================================================
  // STATUS
  // ======================================================

  statusHistory: FlyBookingStatusHistory[];

  status: FlyBookingStatus;

  // ======================================================
  // EXTRAS
  // ======================================================

  extras: FlyBookingExtra[];

  // ======================================================
  // BOOKING INFORMATION
  // ======================================================

  totalPassengers: number;

  totalAmount: number;

  note: string | null;

  // ======================================================
  // INTERLINE / ITINERARY
  // ======================================================

  interlines: FlyInterline[];

  itineraries: FlyItinerary[];

  // ======================================================
  // INVENTORY
  // ======================================================

  seatInventoryLock: FlySeatInventoryLock[];

  FlyInventoryLock: FlyInventoryLock[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
