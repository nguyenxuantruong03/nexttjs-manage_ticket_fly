import {
  ProviderOperatingStatus,
  ProviderStatus,
} from "@/types/bookings/provider-bookings";
import { FormValues } from "./schema";

export const providerBookingDefaultValues: FormValues = {
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

  address: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",

  latitude: undefined,
  longitude: undefined,

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
