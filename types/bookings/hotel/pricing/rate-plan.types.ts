import { HotelRatePlanType, MealPlan } from "../enum/enums";
import { HotelInventoryLock } from "../inventory/lock.types";
import { HotelPolicies } from "../policies/policy.types";
import { HotelRoomPrice } from "./price.types";

export interface HotelRatePlanCancellation {
  id: string;

  ratePlanId: string;

  freeCancellation: boolean;

  beforeHours?: number | null;

  cancellationFee?: number | null;
}

export interface HotelRatePlan {
  id: string;

  inventoryId: string;

  name: string;

  description?: string | null;

  type: HotelRatePlanType;

  code?: string | null;

  mealPlan?: MealPlan | null;

  policies?: HotelPolicies | null;

  refundable: boolean;

  cancellationPolicy?: HotelRatePlanCancellation | null;

  price?: HotelRoomPrice | null;

  active: boolean;

  createdAt: Date;

  updatedAt: Date;

  locks: HotelInventoryLock[];
}
