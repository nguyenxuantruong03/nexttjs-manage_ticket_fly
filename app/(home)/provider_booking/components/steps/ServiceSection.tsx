"use client";

import FormSection from "@/components/form/FormSection";
import FormCheckboxGroup from "@/components/form/form-data/FormCheckbokGroup";

import { typeServiceBooking } from "@/types/bookings/provider-bookings";

export default function ServiceSection() {
  return (
    <FormSection
      title="Services"
      description="Select all services provided by this provider"
    >
      <FormCheckboxGroup
        name="service"
        label="Services"
        options={[
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
        ]}
      />
    </FormSection>
  );
}
