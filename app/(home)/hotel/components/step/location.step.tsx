// step/location.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { HotelFormValues } from "../schema";

export default function LocationStep() {
  return (
    <>
      <FormSection
        title="Hotel Information"
        description="Provider and address information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="information.hotelId"
            label="Hotel ID"
            placeholder="Hotel ID"
          />

          <FormInput<HotelFormValues>
            name="information.providerBookingId"
            label="Provider Booking"
            placeholder="Provider Booking ID"
          />

          <FormInput<HotelFormValues>
            name="information.addressId"
            label="Address"
            placeholder="Address ID"
          />
        </div>
      </FormSection>

      <FormSection
        title="Nearby Places"
        description="Nearby attractions and important places"
      >
        <FormTextarea<HotelFormValues>
          name="nearbyPlaces"
          label="Nearby Places"
          placeholder="Nearby places (JSON)"
          rows={8}
        />
      </FormSection>

      <FormSection title="Area Guides" description="Area guide information">
        <FormTextarea<HotelFormValues>
          name="areaGuides"
          label="Area Guides"
          placeholder="Area guides (JSON)"
          rows={8}
        />
      </FormSection>
    </>
  );
}
