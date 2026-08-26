"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { AirportTransferFormSchema } from "../schema/core/schema";

export default function CapacityStep() {
  return (
    <>
      {/* Capacity */}
      <FormSection title="Capacity" description="Operation limits">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="capacity.maxTripsPerDay"
            label="Maximum Trips Per Day"
            type="number"
            placeholder="Enter maximum trips per day"
          />

          <FormInput<AirportTransferFormSchema>
            name="capacity.maxVehiclesPerDay"
            label="Maximum Vehicles Per Day"
            type="number"
            placeholder="Enter maximum vehicles per day"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="capacity.overbookingAllowed"
            label="Overbooking Allowed"
          />
        </div>
      </FormSection>
    </>
  );
}
