import {
  ProviderOperatingStatus,
  ProviderStatus,
} from "@/types/bookings/provider-bookings";
import { ProviderBookingFormSchema } from "./schema";

export const providerBookingDefaultValues: ProviderBookingFormSchema = {
  officialName: "",
  displayName: "",
  shortName: "",

  subtitle: "",
  description: "",

  logo: "",
  banner: "",

  companyType: "",

  registrationNumber: "",
  taxCode: "",
  licenseNumber: "",

  foundedYear: undefined,
  employeeCount: undefined,

  email: "",
  phone: "",
  hotline: "",
  website: "",

  addressId: "",

  facebook: "",
  instagram: "",
  youtube: "",
  linkedin: "",

  verified: false,

  status: ProviderStatus.PENDING,

  operatingStatus: ProviderOperatingStatus.OPEN,

  userId: "",

  service: [],
};
