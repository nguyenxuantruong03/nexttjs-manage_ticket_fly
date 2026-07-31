// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { DriverOption } from "@/types/bookings/car_rental/enums";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/bookings/search-prioty-score";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";
import { SearchTag } from "@/types/bookings/search/tag.types";

interface BasicStepProps {
  searchTagData: SearchTag[];
}

const driverOptionOptions = Object.values(DriverOption).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function BasicStep({ searchTagData }: BasicStepProps) {
  return (
    <>
      <FormSection title="Car Rental" description="General rental information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema> name="name" label="Rental Name" />

          <FormSelect<CarRentalFormSchema>
            name="driverOption"
            label="Driver Option"
            options={driverOptionOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="providerBookingId"
            label="Provider Booking ID"
          />

          <FormSelect<CarRentalFormSchema>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select search priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />
        </div>
      </FormSection>

      <FormSection title="Search Metadata" description="Search">
        <div className="grid gap-6 md:grid-cols-2">
          <FormMultiCombobox<CarRentalFormSchema>
            name="tagIds"
            label="Tags"
            placeholder="Select tags..."
            searchPlaceholder="Search tags..."
            options={searchTagData.map((tag) => ({
              label: tag.name,
              value: tag.id,
            }))}
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
