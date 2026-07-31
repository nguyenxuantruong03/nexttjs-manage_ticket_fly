import { Hotel } from "./core/hotel.types";
import { HotelRatePlanPolicy } from "./pricing/rate-plan.types";

export interface HotelPolicyMapper {
  id: string;

  hotelId: string;
  hotel: Hotel;

  policyId: string;
  policy: HotelPolicy;
}

export interface HotelPolicy {
  id: string;

  name: string;

  typeId: string;
  type: HotelPolicyType;

  description: string;

  hotels: HotelPolicyMapper[];

  rateplans: HotelRatePlanPolicy[];
}

export interface HotelCheckPolicy {
  id: string;

  hotelId: string;
  hotel: Hotel;

  checkInFrom?: string | null;

  checkInUntil?: string | null;

  checkOutUntil?: string | null;

  minimumAge?: number | null;

  createdAt: Date;
}

export interface HotelPolicyType {
  id: string;

  name: string;


  description?: string | null;

  icon?: string | null;

  policies: HotelPolicy[];

  active: boolean;

  sortOrder: number;

  createdAt: Date;

  updatedAt: Date;
}
