import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferContactInformationDefaultValues = {
  hotline: "",

  whatsapp: "",

  telegram: "",

  emergencyPhone: "",

  supportEmail: "",
} satisfies NonNullable<
  Pick<AirportTransferFormSchema, "contactInformation">["contactInformation"]
>;
