import { FlyCabinClass } from "../fly-cabin-class";
import { FlyInventoryFare } from "../trip/inventory.types";
import { FlyFareBaggage } from "./baggage.types";
import { FlyFarePriceBreakdown } from "./breakdown.types";
import { FlyPrice } from "./price.types";
import { FlyFareRule } from "./rule.types";
import { FlyFareTax } from "./tax.types";

export interface FlyFare {
  id: string;

  priceId: string;
  price?: FlyPrice;

  name: string;

  // Master FlyCabinClass
  cabinClassId: string;
  cabinClass?: FlyCabinClass;

  code?: string;

  refundable: boolean;

  changeable: boolean;

  priorityBoarding: boolean;

  loungeAccess: boolean;

  seatSelectionIncluded: boolean;

  mealsIncluded: boolean;

  wifiIncluded: boolean;

  baggage?: FlyFareBaggage;

  taxes?: FlyFareTax[];

  breakdown?: FlyFarePriceBreakdown;

  rules?: FlyFareRule[];

  inventoryFares?: FlyInventoryFare[];

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}