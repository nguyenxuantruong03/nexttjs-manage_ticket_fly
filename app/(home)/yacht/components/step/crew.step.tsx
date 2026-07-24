// step/crew.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";

import { YachtCrewRole } from "@/types/bookings/yacht/enums";
import { YachtFormSchema } from "../schema/core/yacht.schema";

const crewRoleOptions = Object.values(YachtCrewRole).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function CrewStep() {
  return (
    <>
      {/* ======================================================
          CREW INFORMATION
      ====================================================== */}

      <FormSection title="Crew Information" description="Yacht crew members">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema> name="crew.0.name" label="Crew Name" />

          <FormSelect<YachtFormSchema>
            name="crew.0.role"
            label="Crew Role"
            options={crewRoleOptions}
          />

          <FormInput<YachtFormSchema> name="crew.0.avatar" label="Avatar URL" />

          <FormInput<YachtFormSchema>
            name="crew.0.experienceYears"
            label="Experience Years"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          LANGUAGES
      ====================================================== */}

      <FormSection title="Languages" description="Languages supported by crew">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="crew.0.languages.0"
            label="Language"
          />
        </div>
      </FormSection>
    </>
  );
}
