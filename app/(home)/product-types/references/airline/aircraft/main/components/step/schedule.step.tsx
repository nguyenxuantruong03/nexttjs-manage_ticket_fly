"use client";

import { useFieldArray, useFormContext, useController } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import {
  FormDatePicker,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FlyAircraftFormSchema } from "../schema/aircraft.schema";
import { WeekDay } from "@/types/common/enums";

const weekDays = Object.values(WeekDay);

function OperatingDaysField({ scheduleIndex }: { scheduleIndex: number }) {
  const { control } = useFormContext<FlyAircraftFormSchema>();

  const { field } = useController({
    control,
    name: `schedule.${scheduleIndex}.operatingDays`,
  });

  const selected: WeekDay[] = field.value ?? [];

  const toggleDay = (day: WeekDay) => {
    if (selected.includes(day)) {
      field.onChange(selected.filter((d) => d !== day));
    } else {
      field.onChange([...selected, day]);
    }
  };

  return (
    <div className="space-y-2 md:col-span-2">
      <label className="text-sm font-medium">Operating Days</label>

      <div className="flex flex-wrap gap-4">
        {weekDays.map((day) => (
          <label key={day} className="flex items-center gap-2 text-sm">
            {/* TODO: confirm Checkbox import path (@/components/ui/checkbox)
                matches the actual shadcn setup in this project */}
            <Checkbox
              checked={selected.includes(day)}
              onCheckedChange={() => toggleDay(day)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
}

export default function ScheduleStep() {
  const { control } = useFormContext<FlyAircraftFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "schedule",
  });

  return (
    <FormSection
      title="Schedule"
      description="Flight schedule and operating days for this aircraft"
    >
      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-4 rounded-lg border p-4">
            <div className="grid items-end gap-4 md:grid-cols-2">
              <FormInput<FlyAircraftFormSchema>
                name={`schedule.${index}.departureTime`}
                label="Departure Time"
                placeholder="08:00"
              />

              <FormInput<FlyAircraftFormSchema>
                name={`schedule.${index}.arrivalTime`}
                label="Arrival Time"
                placeholder="10:30"
              />

              <FormDatePicker<FlyAircraftFormSchema>
                name={`schedule.${index}.startDate`}
                label="Start Date"
              />

              <FormDatePicker<FlyAircraftFormSchema>
                name={`schedule.${index}.endDate`}
                label="End Date"
              />

              <OperatingDaysField scheduleIndex={index} />

              <FormSwitch<FlyAircraftFormSchema>
                name={`schedule.${index}.active`}
                label="Active"
              />
            </div>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => remove(index)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remove Schedule
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              departureTime: "",
              arrivalTime: "",
              startDate: new Date(),
              endDate: undefined,
              operatingDays: [],
              active: true,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Schedule
        </Button>
      </div>
    </FormSection>
  );
}
