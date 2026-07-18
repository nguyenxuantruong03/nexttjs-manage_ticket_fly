import { YachtDurationType } from "../enums";

export interface YachtPriceOption {
  id: string;

  priceId: string;

  name: string;

  duration?: number | null;

  durationType: YachtDurationType;

  minGuests?: number | null;

  maxGuests?: number | null;

  originalPrice?: number | null;

  includedItems: string[];

  createdAt: Date;
}