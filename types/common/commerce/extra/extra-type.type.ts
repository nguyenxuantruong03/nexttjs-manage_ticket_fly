import { BookingType } from "@/types/common/commerce/booking-type";
import { Extra } from "./extra.type";

export interface ExtraType {
  id: string;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  name: string;
  slug: string;

  description: string | null;
  icon: string | null;

  active: boolean;
  sortOrder: number;

  extras: Extra[];

  createdAt: Date;
  updatedAt: Date;
}
