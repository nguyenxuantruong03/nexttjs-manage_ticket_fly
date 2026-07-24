// step/airline.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../schema/core/fly.schema";

export default function AirlineStep() {
  return (
    <>
      <FormSection
        title="Airline Information"
        description="Airline basic information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="airline.name"
            label="Airline Name"
          />

          <FormInput<FlyFormSchema>
            name="airline.legalName"
            label="Legal Name"
          />

          <FormInput<FlyFormSchema>
            name="airline.iataCode"
            label="IATA Code"
          />

          <FormInput<FlyFormSchema>
            name="airline.icaoCode"
            label="ICAO Code"
          />

          <FormInput<FlyFormSchema>
            name="airline.callsign"
            label="Callsign"
          />

          <FormInput<FlyFormSchema>
            name="airline.country"
            label="Country"
          />

          <FormInput<FlyFormSchema>
            name="airline.website"
            label="Website"
            type="url"
          />

          <FormInput<FlyFormSchema>
            name="airline.hotline"
            label="Hotline"
          />

          <FormInput<FlyFormSchema>
            name="airline.email"
            label="Email"
            type="email"
          />

          <FormInput<FlyFormSchema>
            name="airline.logo"
            label="Logo URL"
          />

          <FormInput<FlyFormSchema>
            name="airline.banner"
            label="Banner URL"
          />

          <FormSwitch<FlyFormSchema>
            name="airline.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection
        title="Airline Description"
        description="Airline introduction"
      >
        <div className="grid gap-6">
          <FormInput<FlyFormSchema>
            name="airline.description"
            label="Description"
          />
        </div>
      </FormSection>

      <FormSection title="Airline Images" description="Airline gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="airline.images.0.url"
            label="Image URL"
          />

          <FormInput<FlyFormSchema>
            name="airline.images.0.category"
            label="Image Category"
          />

          <FormSwitch<FlyFormSchema>
            name="airline.images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>

      <FormSection title="Wifi Package" description="Airline wifi service">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="airline.wifiPackage.0.name"
            label="Package Name"
          />

          <FormInput<FlyFormSchema>
            name="airline.wifiPackage.0.dataLimitMb"
            label="Data Limit (MB)"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="airline.wifiPackage.0.durationMinutes"
            label="Duration Minutes"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="airline.wifiPackage.0.amount"
            label="Amount"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Addons" description="Airline extra services">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="airline.addon.0.name"
            label="Addon Name"
          />

          <FormInput<FlyFormSchema>
            name="airline.addon.0.description"
            label="Description"
          />

          <FormInput<FlyFormSchema>
            name="airline.addon.0.type"
            label="Addon Type"
          />

          <FormInput<FlyFormSchema>
            name="airline.addon.0.provider"
            label="Provider"
          />

          <FormInput<FlyFormSchema>
            name="airline.addon.0.image"
            label="Image URL"
          />

          <FormInput<FlyFormSchema>
            name="airline.addon.0.amount"
            label="Amount"
            type="number"
          />

          <FormSwitch<FlyFormSchema>
            name="airline.addon.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
