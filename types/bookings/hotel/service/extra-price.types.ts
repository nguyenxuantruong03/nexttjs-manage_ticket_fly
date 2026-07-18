import { Currency } from "@/types/common/enums";
import { ExtraPriceUnit } from "../enum/enums";


export interface HotelExtraPrice {
  id: string;

  extraId: string;

  price: number;

  currency: Currency;

  unit: ExtraPriceUnit;

  active: boolean;

  createdAt: Date;
}