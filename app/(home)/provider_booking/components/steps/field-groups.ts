import { FieldPath } from "react-hook-form";

import { ProviderBookingFormSchema } from "../form/schema";

type ProviderBookingFieldPath = FieldPath<ProviderBookingFormSchema>;

export const providerBookingFieldGroups: Record<
  string,
  readonly ProviderBookingFieldPath[]
> = {
  basic: [
    "displayName",
    "officialName",
    "shortName",
    "subtitle",
    "description",
    "logo",
    "banner",
  ],

  company: [
    "companyType",
    "registrationNumber",
    "taxCode",
    "licenseNumber",
    "foundedYear",
    "employeeCount",
  ],

  contact: ["email", "phone", "hotline", "website"],

  address: [
    "address",
    "city",
    "state",
    "country",
    "postalCode",
    "latitude",
    "longitude",
  ],

  social: ["facebook", "instagram", "youtube", "linkedin"],

  service: ["service"],
};
