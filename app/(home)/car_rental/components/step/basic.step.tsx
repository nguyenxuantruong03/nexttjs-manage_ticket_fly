// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { DriverOption } from "@/types/bookings/car_rental/enums";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

const driverOptionOptions = Object.values(DriverOption).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function BasicStep() {
  return (
    <>
      <FormSection title="Car Rental" description="General rental information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema> name="name" label="Rental Name" />

          <FormInput<CarRentalFormSchema> name="slug" label="Slug" />

          <FormSelect<CarRentalFormSchema>
            name="driverOption"
            label="Driver Option"
            options={driverOptionOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="providerBookingId"
            label="Provider Booking ID"
          />

          <FormInput<CarRentalFormSchema>
            name="searchText"
            label="Search Text"
          />

          <FormInput<CarRentalFormSchema>
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
          <FormInput<CarRentalFormSchema>
            name="aliases"
            label="Aliases"
            placeholder="Enter aliases separated by comma"
          />

          <FormInput<CarRentalFormSchema>
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
          <FormSwitch<CarRentalFormSchema> name="active" label="Active" />

          <FormSwitch<CarRentalFormSchema> name="featured" label="Featured" />
        </div>
      </FormSection>
    </>
  );
}
