import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";
import { AirportTransferBookingExtra } from "./booking/booking-extra.types";
import { Extra } from "@/types/common/commerce/extra/extra.type";

export interface AirportTransferExtraMapper {
  id: string;

  transferId: string;
  transfer: AirportTransfer;

  extraId: string;
  extra: Extra;

  airportTransferBookingExtra: AirportTransferBookingExtra[];

  active: boolean;

  sortOrder: number;

  createdAt: string;

  updatedAt: string;
}