import { Currency } from "@/types/common/enums";
import { YachtBookingExtra } from "../booking/booking-extra.types";
import { YachtExtraCategory, YachtExtraPricingType } from "../enums";
import { YachtPackageExtra } from "../pricing/package-extra.types";
import { YachtExtraImage } from "./extra-image.types";

export interface YachtExtra {
  id: string;

  yachtId: string;

  name: string;

  description?: string | null;

  category: YachtExtraCategory;
  bookingExtras: YachtBookingExtra[];
  pricingType: YachtExtraPricingType;
  packageExtras: YachtPackageExtra[];

  price: number;
  currency: Currency;

  active: boolean;
  images: YachtExtraImage[];
}

