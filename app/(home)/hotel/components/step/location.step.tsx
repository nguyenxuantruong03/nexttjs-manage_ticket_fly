// step/location.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { HotelFormSchema } from "../schema";

export default function LocationStep() {
  return (
    <>
      <FormSection
        title="Hotel Information"
        description="Provider and address information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormSchema>
            name="information.hotelId"
            label="Hotel ID"
            placeholder="Hotel ID"
          />

          <FormInput<HotelFormSchema>
            name="information.providerBookingId"
            label="Provider Booking"
            placeholder="Provider Booking ID"
          />

          <FormInput<HotelFormSchema>
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
        <FormTextarea<HotelFormSchema>
          name="nearbyPlaces"
          label="Nearby Places"
          placeholder="Nearby places (JSON)"
          rows={8}
        />
      </FormSection>

      <FormSection title="Area Guides" description="Area guide information">
        <FormTextarea<HotelFormSchema>
          name="areaGuides"
          label="Area Guides"
          placeholder="Area guides (JSON)"
          rows={8}
        />
      </FormSection>
    </>
  );
}
