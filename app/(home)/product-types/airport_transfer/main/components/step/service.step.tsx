"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { AirportTransferFormSchema } from "../form/schema/core/schema";

export default function ServiceStep() {
  return (
    <>
      {/* Contact Information */}
      <FormSection
        title="Contact Information"
        description="Support contact details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="contactInformation.hotline"
            label="Hotline"
            placeholder="Enter hotline number"
          />

          <FormInput<AirportTransferFormSchema>
            name="contactInformation.whatsapp"
            label="WhatsApp"
            placeholder="Enter WhatsApp number"
          />

          <FormInput<AirportTransferFormSchema>
            name="contactInformation.telegram"
            label="Telegram"
            placeholder="Enter Telegram username"
          />

          <FormInput<AirportTransferFormSchema>
            name="contactInformation.emergencyPhone"
            label="Emergency Phone"
            placeholder="Enter emergency phone number"
          />

          <FormInput<AirportTransferFormSchema>
            name="contactInformation.supportEmail"
            label="Support Email"
            placeholder="Enter support email"
          />
        </div>
      </FormSection>
    </>
  );
}
