import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";
import { AirportTransferBooking } from "./booking/booking.types";
import { Package } from "@/types/common/commerce/package/package.type";

export interface AirportTransferPackageMapper {
  id: string;

  transferId: string;
  transfer?: AirportTransfer;

  packageId: string;
  package?: Package;

  airportTransferBooking: AirportTransferBooking[];

  createdAt: Date;
}
