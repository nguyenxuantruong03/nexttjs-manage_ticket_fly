import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

export function initAirportTransferContactInformationValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "contactInformation">["contactInformation"] {
  return {
    hotline: airportTransfer.contactInformation?.hotline ?? "",

    whatsapp: airportTransfer.contactInformation?.whatsapp ?? "",

    telegram: airportTransfer.contactInformation?.telegram ?? "",

    emergencyPhone: airportTransfer.contactInformation?.emergencyPhone ?? "",

    supportEmail: airportTransfer.contactInformation?.supportEmail ?? "",
  };
}
