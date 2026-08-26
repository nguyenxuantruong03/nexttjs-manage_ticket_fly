"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlyCabinClassFormSchema } from "../form/schema";


export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly cabin class information"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <FormInput<FlyCabinClassFormSchema>
          name="name"
          label="Name"
          placeholder="Business Class"
        />


        <FormInput<FlyCabinClassFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />


        <div className="md:col-span-2">

          <FormInput<FlyCabinClassFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the fly cabin class"
          />

        </div>

      </div>
    </FormSection>
  );
}