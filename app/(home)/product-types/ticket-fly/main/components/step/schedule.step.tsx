// step/schedule.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { WeekDay } from "@/types/common/enums";
import { FlyFormSchema } from "../form/schema/core/fly.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { EntityOption } from "@/components/form/entity-selector";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";
import FlyAircraftCreateDialog from "@/app/(home)/product-types/references/airline/aircraft/main/components/FlyAircraftCreateDialog";

const weekDayOptions = Object.values(WeekDay).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

interface ScheduleStepProps {
  aircraftData: FlyAircraft[];
}

export default function ScheduleStep({ aircraftData }: ScheduleStepProps) {
  const aircraftOptions: EntityOption<FlyAircraft>[] = aircraftData.map(
    (aircraft) => ({
      value: aircraft.id,
      label: aircraft.code ?? "",
      description: aircraft.manufacturer ?? undefined,
      data: aircraft,
    }),
  );
  return (
    <>
      <FormSection title="Schedule" description="Flight operating schedule">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="schedule.0.departureTime"
            label="Departure Time"
          />

          <FormInput<FlyFormSchema>
            name="schedule.0.arrivalTime"
            label="Arrival Time"
          />

          <FormInput<FlyFormSchema>
            name="schedule.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<FlyFormSchema>
            name="schedule.0.endDate"
            label="End Date"
            type="date"
          />

          <FormEntitySelector<FlyFormSchema, FlyAircraft>
            name="schedule.0.aircraftId"
            label="Aircraft"
            placeholder="Search aircraft..."
            searchPlaceholder="Search aircraft..."
            emptyText="No aircraft found"
            createText="Create aircraft"
            options={aircraftOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FlyAircraftCreateDialog {...props} />
            )}
          />

          <FormSwitch<FlyFormSchema> name="schedule.0.active" label="Active" />
        </div>
      </FormSection>

      <FormSection title="Operating Days" description="Weekly operating days">
        <div className="grid gap-6 md:grid-cols-2">
          {weekDayOptions.map((item, index) => (
            <FormSwitch<FlyFormSchema>
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
