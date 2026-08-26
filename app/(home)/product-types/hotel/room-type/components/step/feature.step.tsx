"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import { RoomTypeFormSchema } from "../form/schema";

export default function FeaturesStep() {
  return (
    <FormSection
      title="Features"
      description="Configure room features and settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<RoomTypeFormSchema>
          name="smokingAllowed"
          label="Smoking Allowed"
          description="Allow smoking in this room"
        />

        <FormSwitch<RoomTypeFormSchema>
          name="balcony"
          label="Balcony"
          description="Room has a private balcony"
        />

        <FormSwitch<RoomTypeFormSchema>
          name="kitchen"
          label="Kitchen"
          description="Room includes a kitchen or kitchenette"
        />

        <FormSwitch<RoomTypeFormSchema>
          name="accessible"
          label="Accessible"
          description="Suitable for guests with accessibility needs"
        />

        <FormSwitch<RoomTypeFormSchema>
          name="active"
          label="Active"
          description="Room type is available for booking"
        />

        <FormInput<RoomTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}