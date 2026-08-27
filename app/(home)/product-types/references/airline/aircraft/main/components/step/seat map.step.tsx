"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

export default function SeatMapStep() {
  return (
    <FormSection
      title="Seat Map"
      description="Visual seat map for the aircraft"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAircraftFormSchema>
          name="seatMap.imageUrl"
          label="Image URL"
          placeholder="https://.../seat-map.png"
        />

        <FormInput<FlyAircraftFormSchema>
          name="seatMap.svgUrl"
          label="SVG URL"
          placeholder="https://.../seat-map.svg"
        />
      </div>

      {/*
        TODO: seatMap.jsonLayout is z.unknown() - it likely needs a dedicated
        visual seat-map builder (drag/drop grid) rather than a plain input.
        Add that component here once it's shared, or confirm a JSON editor
        is acceptable for now.
      */}
    </FormSection>
  );
}
