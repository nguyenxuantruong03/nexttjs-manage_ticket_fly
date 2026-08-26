// step/pickup-instructions.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";
import { PickupInstructionType } from "@/types/product-types/car_rental/enums";

const pickupTypeOptions = Object.values(PickupInstructionType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function PickupInstructionsStep() {
  return (
    <>
      <FormSection
        title="Pickup Instructions"
        description="Vehicle pickup guidance"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="pickupInstructions.0.type"
            label="Instruction Type"
            options={pickupTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="pickupInstructions.0.title"
            label="Title"
          />

          <FormInput<CarRentalFormSchema>
            name="pickupInstructions.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormSchema>
            name="pickupInstructions.0.location"
            label="Location"
          />

          <FormInput<CarRentalFormSchema>
            name="pickupInstructions.0.contactPhone"
            label="Contact Phone"
          />
        </div>
      </FormSection>
    </>
  );
}