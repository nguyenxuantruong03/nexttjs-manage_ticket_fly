import { Policy } from "@/types/common/features/policy/policy";
import { HotelInventory } from "../inventory/inventory.types";
import { HotelInventoryLock } from "../inventory/lock.types";
import { HotelRoomPrice } from "./price.types";

export interface HotelRatePlan {
  id: string;

  inventoryId: string;
  inventory?: HotelInventory;

  name: string;
  code?: string | null;
  description?: string | null;

  typeId?: string | null;
  type?: HotelRatePlanType | null;

  mealPlanId?: string | null;
  mealPlan?: MealPlan | null;

  policies?: HotelRatePlanPolicy[];

  refundable: boolean;

  cancellationPolicy?: HotelRatePlanCancellation | null;

  price?: HotelRoomPrice | null;

  locks?: HotelInventoryLock[];

  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export interface HotelRatePlanCancellation {
  id: string;

  ratePlanId: string;
  ratePlan?: HotelRatePlan;

  freeCancellation: boolean;

  beforeHours?: number | null;
  cancellationFee?: number | null;
}

export interface HotelRatePlanType {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;
  icon?: string | null;

  active: boolean;
  sortOrder: number;

  ratePlans?: HotelRatePlan[];

  createdAt: Date;
  updatedAt: Date;
}

export interface MealPlan {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;
  icon?: string | null;

  active: boolean;
  sortOrder: number;

  ratePlans?: HotelRatePlan[];

  createdAt: Date;
  updatedAt: Date;
}

export interface HotelRatePlanPolicy {
  id: string;

  ratePlanId: string;
  ratePlan?: HotelRatePlan;

  policyId: string;
  policy?: Policy;
}
