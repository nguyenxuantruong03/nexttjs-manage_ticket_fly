import { PriceCalculationType } from "@/types/common/enums";
import { YachtPrice } from "./price.types";

export interface YachtPriceOption {
  id: string;

  priceId: string;
  price: YachtPrice;

  name: string;

  duration: number | null;
  durationType: PriceCalculationType;

  minGuests: number | null;

  maxGuests: number | null;

  originalPrice: number | null;

  includedItems: string[];

  createdAt: Date;
}
