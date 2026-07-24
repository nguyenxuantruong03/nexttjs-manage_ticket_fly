"use client";

import { FormInput } from "@/components/form/form-data";
import FormSection from "@/components/form/FormSection";
import { ProviderBookingFormSchema } from "../form/schema";

export default function AddressSection() {
  return (
    <FormSection title="Address">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ProviderBookingFormSchema>
          name="address"
          label="Address"
          placeholder="Enter street address"
        />

        <FormInput<ProviderBookingFormSchema>
          name="city"
          label="City"
          placeholder="Enter city"
        />

        <FormInput<ProviderBookingFormSchema>
          name="state"
          label="State"
          placeholder="Enter state or province"
        />

        <FormInput<ProviderBookingFormSchema>
          name="country"
          label="Country"
          placeholder="Enter country"
        />

        <FormInput<ProviderBookingFormSchema>
          name="postalCode"
          label="Postal Code"
          placeholder="Enter postal code"
        />

        <FormInput<ProviderBookingFormSchema>
          name="latitude"
          type="number"
          label="Latitude"
          placeholder="e.g. 10.7769"
        />

        <FormInput<ProviderBookingFormSchema>
          name="longitude"
          type="number"
          label="Longitude"
          placeholder="e.g. 106.7009"
        />
      </div>
    </FormSection>
  );
}
