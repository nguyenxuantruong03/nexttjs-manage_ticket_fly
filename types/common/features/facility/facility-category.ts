import { BookingType } from "../../commerce/booking-type";
import { Facility } from "./facility";

export interface FacilityCategory {
  id: string;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  name: string;
  slug: string;
  description?: string | null;
  icon?: string | null;

  facilities?: Facility[];

  active: boolean;
  sortOrder: number;

  createdAt: Date;
  updatedAt: Date;
}
