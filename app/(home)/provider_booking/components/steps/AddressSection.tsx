"use client";

import { FormInput } from "@/components/form/form-data";
import FormSection from "@/components/form/FormSection";

export default function AddressSection() {
  return (
    <FormSection title="Address">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput
          name="address"
          label="Address"
          placeholder="Enter street address"
        />

        <FormInput name="city" label="City" placeholder="Enter city" />

        <FormInput
          name="state"
          label="State"
          placeholder="Enter state or province"
        />

        <FormInput name="country" label="Country" placeholder="Enter country" />

        <FormInput
          name="postalCode"
          label="Postal Code"
          placeholder="Enter postal code"
        />

        <FormInput
          name="latitude"
          type="number"
          label="Latitude"
          placeholder="e.g. 10.7769"
        />

        <FormInput
          name="longitude"
          type="number"
          label="Longitude"
          placeholder="e.g. 106.7009"
        />
      </div>
    </FormSection>
  );
}
