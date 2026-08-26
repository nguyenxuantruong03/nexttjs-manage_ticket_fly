import { Policy } from "@/types/common/features/policy/policy";
import { Hotel } from "./core/hotel.types";

export interface HotelPolicyMapper {
  id: string;

  hotelId: string;
  hotel?: Hotel;

  policyId: string;
  policy?: Policy;

  valueBoolean?: boolean | null;
  valueNumber?: number | null;
  valueText?: string | null;
  valueJson?: unknown | null;

  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}
