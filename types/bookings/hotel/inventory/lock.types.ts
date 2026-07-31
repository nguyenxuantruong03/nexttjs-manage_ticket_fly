// hotel-inventory-lock.type.ts

import { User } from "../../auth/users";
import { InventoryLockReason, InventoryLockStatus } from "../enum/enums";
import { HotelRatePlan } from "../pricing/rate-plan.types";
import { HotelInventory } from "./inventory.types";

export interface HotelInventoryLock {
  id: string;

  inventoryId: string;
  inventory: HotelInventory;

  ratePlanId?: string | null;
  ratePlan?: HotelRatePlan | null;

  userId?: string | null;
  user?: User | null;

  quantity: number;

  status: InventoryLockStatus;

  reason: InventoryLockReason;

  startTime: Date;

  releasedAt?: Date | null;

  endTime: Date;

  expiresAt: Date;

  createdAt: Date;
}
