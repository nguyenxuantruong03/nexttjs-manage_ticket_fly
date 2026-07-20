import { ExtraPriceUnit } from "../enum/enums";


export interface HotelExtraPrice {
  id: string;

  extraId: string;

  price: number;


  unit: ExtraPriceUnit;

  active: boolean;

  createdAt: Date;
}