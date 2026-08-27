"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

export default function SpecificationStep() {
  return (
    <FormSection
      title="Specification"
      description="Technical specifications of the aircraft"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAircraftFormSchema>
          name="specification.maxRangeKm"
          label="Max Range (km)"
          type="number"
          placeholder="6100"
        />

        <FormInput<FlyAircraftFormSchema>
          name="specification.cruiseSpeed"
          label="Cruise Speed (km/h)"
          type="number"
          placeholder="828"
        />

        <FormInput<FlyAircraftFormSchema>
          name="specification.maxPassengers"
          label="Max Passengers"
          type="number"
          placeholder="180"
        />

        <FormInput<FlyAircraftFormSchema>
          name="specification.engineType"
          label="Engine Type"
          placeholder="CFM56-5B"
        />

        <FormInput<FlyAircraftFormSchema>
          name="specification.engineCount"
          label="Engine Count"
          type="number"
          placeholder="2"
        />

        <FormInput<FlyAircraftFormSchema>
          name="specification.wingspan"
          label="Wingspan (m)"
          type="number"
          placeholder="35.8"
        />

        <FormInput<FlyAircraftFormSchema>
          name="specification.length"
          label="Length (m)"
          type="number"
          placeholder="37.57"
        />

        <FormInput<FlyAircraftFormSchema>
          name="specification.height"
          label="Height (m)"
          type="number"
          placeholder="11.76"
        />

        <FormInput<FlyAircraftFormSchema>
          name="specification.firstFlightYear"
          label="First Flight Year"
          type="number"
          placeholder="1987"
        />
      </div>
    </FormSection>
  );
}
