// step/operation.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { WeekDay } from "@/types/common/enums";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";
import { DriverOption } from "@/types/product-types/car_rental/enums";

const weekDayOptions = Object.values(WeekDay).map((value) => ({
  label: value.toUpperCase(),
  value,
}));

const driverOptionOptions = Object.values(DriverOption).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function OperationStep() {
  return (
    <>
      <FormSection
        title="Driver Option"
        description="Rental driver configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="driverOption"
            label="Driver Option"
            options={driverOptionOptions}
          />
        </div>
      </FormSection>

      <FormSection
        title="Business Hours"
        description="Rental operating schedule"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="businessHours.0.day"
            label="Day"
            options={weekDayOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="businessHours.0.openTime"
            label="Open Time"
            type="time"
          />

          <FormInput<CarRentalFormSchema>
            name="businessHours.0.closeTime"
            label="Close Time"
            type="time"
          />

          <FormSwitch<CarRentalFormSchema>
            name="businessHours.0.closed"
            label="Closed"
          />
        </div>
      </FormSection>
    </>
  );
}