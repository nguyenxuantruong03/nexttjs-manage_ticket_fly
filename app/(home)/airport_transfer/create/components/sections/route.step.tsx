"use client";

import { FieldValues } from "react-hook-form";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

export default function RouteSection<T extends FieldValues>() {
  return (
    <FormSection title="Route" description="Transfer route information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<T>
          name={"routes.0.type" as any}
          label="Route Type"
          options={[
            {
              label: "Airport → City",
              value: "airport_to_city",
            },
            {
              label: "City → Airport",
              value: "city_to_airport",
            },
            {
              label: "Airport → Airport",
              value: "airport_to_airport",
            },
            {
              label: "Hotel → Airport",
              value: "hotel_to_airport",
            },
            {
              label: "Airport → Hotel",
              value: "airport_to_hotel",
            },
            {
              label: "Custom",
              value: "custom",
            },
          ]}
        />

        {/* sau này replace bằng Address Combobox */}
        <FormInput<T>
          name={"routes.0.departureAddressId" as any}
          label="Departure Address"
        />

        <FormInput<T>
          name={"routes.0.arrivalAddressId" as any}
          label="Arrival Address"
        />

        <FormInput<T>
          name={"routes.0.distanceKm" as any}
          label="Distance (km)"
          type="number"
        />

        <FormInput<T>
          name={"routes.0.estimatedDuration" as any}
          label="Estimated Duration (minutes)"
          type="number"
        />

        <FormSwitch<T> name={"routes.0.active" as any} label="Active Route" />
      </div>
    </FormSection>
  );
}
