import {
  ProviderOperatingStatus,
  ProviderStatus,
} from "@/types/users/provider-bookings";

export const providerStatusOptions = [
  {
    label: "Pending",
    value: ProviderStatus.PENDING,
  },
  {
    label: "Active",
    value: ProviderStatus.ACTIVE,
  },
  {
    label: "Inactive",
    value: ProviderStatus.INACTIVE,
  },
  {
    label: "Blocked",
    value: ProviderStatus.BLOCKED,
  },
];

export const operatingStatusOptions = [
  {
    label: "Open",
    value: ProviderOperatingStatus.OPEN,
  },
  {
    label: "Temporarily Closed",
    value: ProviderOperatingStatus.TEMPORARILY_CLOSED,
  },
  {
    label: "Closed",
    value: ProviderOperatingStatus.CLOSED,
  },
  {
    label: "Maintenance",
    value: ProviderOperatingStatus.MAINTENANCE,
  },
  {
    label: "Holiday",
    value: ProviderOperatingStatus.HOLIDAY,
  },
  {
    label: "Sold Out",
    value: ProviderOperatingStatus.SOLD_OUT,
  },
];
