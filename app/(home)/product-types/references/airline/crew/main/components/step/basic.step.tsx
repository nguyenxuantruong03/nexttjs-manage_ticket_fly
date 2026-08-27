"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormDatePicker,
  FormInput,
  FormSelect,
} from "@/components/form/form-data";

import { Gender } from "@/types/common/enums";
import { FlyCrewFormSchema } from "../schema/crew.schema";

const genderOptions = Object.values(Gender).map((value) => ({
  label: value,
  value,
}));

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly crew information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyCrewFormSchema>
          name="firstName"
          label="First Name"
          placeholder="John"
        />

        <FormInput<FlyCrewFormSchema>
          name="lastName"
          label="Last Name"
          placeholder="Smith"
        />

        {/* TODO: confirm FormSelect exists with this options shape;
            swap for the actual enum-select component if different */}
        <FormSelect<FlyCrewFormSchema>
          name="gender"
          label="Gender"
          placeholder="Select gender"
          options={genderOptions}
        />

        <FormDatePicker<FlyCrewFormSchema>
          name="birthDate"
          label="Birth Date"
        />

        <FormInput<FlyCrewFormSchema>
          name="nationality"
          label="Nationality"
          placeholder="Vietnamese"
        />
      </div>
    </FormSection>
  );
}
