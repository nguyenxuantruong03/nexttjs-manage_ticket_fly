// step/insurance.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import {
  CarRentalInsuranceType,
  CarRentalInsuranceBenefitType,
} from "@/types/bookings/car_rental/enums";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

const insuranceTypeOptions = Object.values(CarRentalInsuranceType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const benefitTypeOptions = Object.values(CarRentalInsuranceBenefitType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function InsuranceStep() {
  return (
    <>
      <FormSection title="Insurance" description="Rental insurance options">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="insurances.0.type"
            label="Insurance Type"
            options={insuranceTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.name"
            label="Insurance Name"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.pricePerDay"
            label="Price Per Day"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.fixedPrice"
            label="Fixed Price"
            type="number"
          />

          <FormSwitch<CarRentalFormSchema>
            name="insurances.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection
        title="Insurance Benefits"
        description="Insurance coverage details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="insurances.0.benefits.0.type"
            label="Benefit Type"
            options={benefitTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.benefits.0.title"
            label="Title"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.benefits.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.benefits.0.coverageAmount"
            label="Coverage Amount"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="insurances.0.benefits.0.excessAmount"
            label="Excess Amount"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
