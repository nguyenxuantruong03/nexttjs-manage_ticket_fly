"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FlyCrewFormSchema } from "../form/schema";

import { useFieldArray, useFormContext } from "react-hook-form";
import { FlyTrip } from "@/types/product-types/ticket-fly/trip/trip.types";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import FlyCrewDutyCreateDialog from "../../../crew-duty/components/FlyCrewDutyCreateDialog";

interface CrewScheduleStepProps {
  dutyData: FlyCrewDuty[];
}

export default function CrewScheduleStep({ dutyData }: CrewScheduleStepProps) {
  const { control } = useFormContext<FlyCrewFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "crewSchedule",
  });

  const dutyEntityOptions: EntityOption<FlyCrewDuty>[] = dutyData.map(
    (duty) => ({
      value: duty.id,
      label: duty.name,
      description: duty.description ?? undefined,
      data: duty,
    }),
  );

  return (
    <FormSection
      title="Crew Schedule"
      description="Manage the schedule and duty assignments for this crew member"
    >
      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="grid gap-6 md:grid-cols-2">
            <FormInput<FlyCrewFormSchema>
              name={`crewSchedule.${index}.startTime`}
              label="Start Time"
              placeholder="2026-08-25T08:00"
            />

            <FormInput<FlyCrewFormSchema>
              name={`crewSchedule.${index}.endTime`}
              label="End Time"
              placeholder="2026-08-25T16:00"
            />

            <FormEntitySelector<FlyCrewFormSchema, FlyCrewDuty>
              name={`crewSchedule.${index}.dutyId`}
              label="Duty"
              placeholder="Search duty..."
              searchPlaceholder="Search duty..."
              emptyText="No duty found"
              options={dutyEntityOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <FlyCrewDutyCreateDialog {...props} />
              )}
            />

            <FormInput<FlyCrewFormSchema>
              name={`crewSchedule.${index}.tripId`}
              label="Trip ID"
              placeholder="Enter trip ID"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            append({
              crewId: "",
              startTime: new Date(),
              endTime: new Date(),
              dutyId: "",
              tripId: "",
            })
          }
          className="rounded-md border px-4 py-2"
        >
          Add Schedule
        </button>
      </div>
    </FormSection>
  );
}
