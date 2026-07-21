import {
  ProviderOperatingStatus,
  ProviderStatus,
  typeServiceBooking,
} from "@/types/bookings/provider-bookings";

export const serviceOptions = [
  {
    label: "Hotel",
    value: typeServiceBooking.HOTEL,
  },
  {
    label: "Car Rental",
    value: typeServiceBooking.CARRENTAL,
  },
  {
    label: "Airport Transfer",
    value: typeServiceBooking.AIRPORTTRANSFER,
  },
  {
    label: "Flight",
    value: typeServiceBooking.TICKETFLY,
  },
  {
    label: "Bus",
    value: typeServiceBooking.TICKETBUS,
  },
  {
    label: "Yacht",
    value: typeServiceBooking.YACHT,
  },
];

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