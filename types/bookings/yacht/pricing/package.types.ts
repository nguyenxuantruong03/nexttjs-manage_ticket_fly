import { YachtPackageExtra } from "./package-extra.types";
import { YachtPackageImage } from "./package-image.types";
import { YachtDurationType } from "../enums";
import { YachtBooking } from "../booking/booking.types";

export interface YachtPackage {
  id: string;

  yachtId: string;

  bookings: YachtBooking[];

  name: string;

  description?: string | null;

  duration?: number | null;

  durationType: YachtDurationType;

  maxGuests?: number | null;

  price: number;

  includedItems: string[];
  extras: YachtPackageExtra[];
  images: YachtPackageImage[];

  active: boolean;

  createdAt: Date;
}