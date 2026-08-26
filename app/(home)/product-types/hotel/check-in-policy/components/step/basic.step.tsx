"use client";

import FormSection from "@/components/form/FormSection";
import { FormCombobox } from "@/components/form/form-data";

import { HotelCheckInPolicySchemaForm } from "../form/schema";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

interface BasicStepProps {
  hotelData: Hotel[];
}

export default function BasicStep({ hotelData }: BasicStepProps) {
  return (
    <FormSection
      title="Check-In"
      description="Configure the hotel's check-in time"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCombobox<HotelCheckInPolicySchemaForm>
          name="hotelId"
          label="Hotel"
          options={hotelData.map((hotel) => ({
            label: hotel.name,
            value: hotel.id,
          }))}
        />
      </div>
    </FormSection>
  );
}
