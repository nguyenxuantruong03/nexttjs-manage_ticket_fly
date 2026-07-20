"use client";

import { FieldValues } from "react-hook-form";

import FormSection from "@/components/form/FormSection";
import {
  FormDatePicker,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";
import FormCheckboxGroup from "@/components/form/form-data/FormCheckbokGroup";

export default function ScheduleSection<T extends FieldValues>() {
  return (
    <FormSection
      title="Schedule"
      description="Operating schedule"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<T>
          name={"schedules.0.departureTime" as any}
          label="Departure Time"
          placeholder="08:00"
        />

        <FormSwitch<T>
          name={"schedules.0.active" as any}
          label="Active"
        />

        <FormDatePicker<T>
          name={"schedules.0.startDate" as any}
          label="Start Date"
        />

        <FormDatePicker<T>
          name={"schedules.0.endDate" as any}
          label="End Date"
        />
      </div>

      <FormCheckboxGroup<T>
        name={"schedules.0.operatingDays" as any}
        label="Operating Days"
        columns={4}
        options={[
          { label: "Monday", value: "MONDAY" },
          { label: "Tuesday", value: "TUESDAY" },
          { label: "Wednesday", value: "WEDNESDAY" },
          { label: "Thursday", value: "THURSDAY" },
          { label: "Friday", value: "FRIDAY" },
          { label: "Saturday", value: "SATURDAY" },
          { label: "Sunday", value: "SUNDAY" },
        ]}
      />
    </FormSection>
  );
}