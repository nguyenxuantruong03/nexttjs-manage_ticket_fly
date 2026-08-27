import { BookingType } from "../../commerce/booking-type";
import { Policy } from "./policy";

export interface PolicyType {
  id: string;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  name: string;
  slug: string;
  description?: string | null;
  icon?: string | null;

  policies?: Policy[];

  active: boolean;
  sortOrder: number;

  createdAt: Date;
  updatedAt: Date;
}
