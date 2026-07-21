// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { DriverOption } from "@/types/bookings/car_rental/enums";
import { CarRentalFormValues } from "../schema/core/car-rental.schema";

const driverOptionOptions = Object.values(DriverOption).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function BasicStep() {
  return (
    <>
      <FormSection title="Car Rental" description="General rental information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues> name="name" label="Rental Name" />

          <FormInput<CarRentalFormValues> name="slug" label="Slug" />

          <FormSelect<CarRentalFormValues>
            name="driverOption"
            label="Driver Option"
            options={driverOptionOptions}
          />

          <FormInput<CarRentalFormValues>
            name="providerBookingId"
            label="Provider Booking ID"
          />

          <FormInput<CarRentalFormValues>
            name="searchText"
            label="Search Text"
          />

          <FormInput<CarRentalFormValues>
            name="searchPriority"
            label="Search Priority"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Search Metadata"
        description="Search aliases and keywords"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="aliases"
            label="Aliases"
            placeholder="Enter aliases separated by comma"
          />

          <FormInput<CarRentalFormValues>
            name="keywords"
            label="Keywords"
            placeholder="Enter keywords separated by comma"
          />
        </div>
      </FormSection>

      <FormSection
        title="Visibility"
        description="Rental availability and display settings"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<CarRentalFormValues> name="active" label="Active" />

          <FormSwitch<CarRentalFormValues> name="featured" label="Featured" />
        </div>
      </FormSection>
    </>
  );
}
