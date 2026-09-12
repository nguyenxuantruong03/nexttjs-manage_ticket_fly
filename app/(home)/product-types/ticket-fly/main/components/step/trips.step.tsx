"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";
import { FlyFormSchema } from "../form/schema/core/fly.schema";
import { FlyTripStatus } from "@/types/product-types/ticket-fly/enums";
import FlyAircraftCreateDialog from "@/app/(home)/product-types/references/airline/aircraft/main/components/FlyAircraftCreateDialog";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

const tripStatusOptions = Object.values(FlyTripStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

interface TripsStepProps {
  aircraftData: FlyAircraft[];
}

export default function TripsStep({ aircraftData }: TripsStepProps) {
  const aircraftOptions: EntityOption<FlyAircraft>[] = aircraftData.map(
    (aircraft) => ({
      value: aircraft.id,
      label: aircraft.code ?? "",
      description: aircraft.manufacturer ?? undefined,
      data: aircraft,
    }),
  );
  return (
    <FormSection title="Trip Information" description="Flight trip details">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyFormSchema>
          name="routes.0.trips.0.flightNumber"
          label="Flight Number"
        />
        <FormInput<FlyFormSchema>
          name="routes.0.trips.0.departureTime"
          label="Departure Time"
          type="datetime-local"
        />
        <FormInput<FlyFormSchema>
          name="routes.0.trips.0.arrivalTime"
          label="Arrival Time"
          type="datetime-local"
        />
        <FormInput<FlyFormSchema>
          name="routes.0.trips.0.durationMinutes"
          label="Duration Minutes"
          type="number"
        />
        <FormSelect<FlyFormSchema>
          name="routes.0.trips.0.status"
          label="Status"
          options={tripStatusOptions}
        />
        <FormInput<FlyFormSchema>
          name="routes.0.trips.0.availableSeats"
          label="Available Seats"
          type="number"
        />
        <FormEntitySelector<FlyFormSchema, FlyAircraft>
          name="routes.0.trips.0.aircraftId"
          label="Aircraft"
          placeholder="Search aircraft..."
          searchPlaceholder="Search aircraft..."
          emptyText="No aircraft found"
          createText="Create aircraft"
          options={aircraftOptions}
          enableCreate
          renderCreateDialog={(props) => <FlyAircraftCreateDialog {...props} />}
        />
        <FormInput<FlyFormSchema>
          name="routes.0.trips.0.scheduleId"
          label="Schedule ID"
        />
      </div>
    </FormSection>
  );
}
