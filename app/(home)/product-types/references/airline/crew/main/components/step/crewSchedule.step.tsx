"use client";

import FormSection from "@/components/form/FormSection";

import { useFieldArray, useFormContext } from "react-hook-form";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { FormDatePicker, FormInput } from "@/components/form/form-data";
import FlyCrewDutyCreateDialog from "../../../crew-duty/components/FlyCrewDutyCreateDialog";
import { FlyCrewFormSchema } from "../schema/crew.schema";

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
            {/* startTime/endTime are z.date() in schedule.schema.ts -
                switched from FormInput text to FormDatePicker.
                TODO: confirm FormDatePicker supports a time component,
                otherwise a FormDateTimePicker is needed here */}
            <FormDatePicker<FlyCrewFormSchema>
              name={`crewSchedule.${index}.startTime`}
              label="Start Time"
            />

            <FormDatePicker<FlyCrewFormSchema>
              name={`crewSchedule.${index}.endTime`}
              label="End Time"
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

            <div className="md:col-span-2">
              <button
                type="button"
                onClick={() => remove(index)}
                className="rounded-md border px-4 py-2 text-sm"
              >
                Remove Schedule
              </button>
            </div>
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