// step/schedule.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { WeekDay } from "@/types/common/enums";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

const weekDayOptions = Object.values(WeekDay).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function ScheduleStep() {
  return (
    <>
      <FormSection title="Schedule" description="Flight operating schedule">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="schedule.0.departureTime"
            label="Departure Time"
          />

          <FormInput<TicketFlyFormValues>
            name="schedule.0.arrivalTime"
            label="Arrival Time"
          />

          <FormInput<TicketFlyFormValues>
            name="schedule.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<TicketFlyFormValues>
            name="schedule.0.endDate"
            label="End Date"
            type="date"
          />

          <FormInput<TicketFlyFormValues>
            name="schedule.0.aircraftId"
            label="Aircraft ID"
          />

          <FormSwitch<TicketFlyFormValues>
            name="schedule.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection title="Operating Days" description="Weekly operating days">
        <div className="grid gap-6 md:grid-cols-2">
          {weekDayOptions.map((item, index) => (
            <FormSwitch<TicketFlyFormValues>
              key={item.value}
              name={`schedule.0.operatingDays.${index}`}
              label={item.label}
            />
          ))}
        </div>
      </FormSection>
    </>
  );
}
