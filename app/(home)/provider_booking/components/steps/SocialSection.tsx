"use client";

import { FormInput } from "@/components/form/form-data";
import FormSection from "@/components/form/FormSection";
import { ProviderBookingFormSchema } from "../form/schema";

export default function SocialSection() {
  return (
    <FormSection title="Social Media">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ProviderBookingFormSchema>
          name="facebook"
          label="Facebook"
          placeholder="https://facebook.com/your-page"
        />

        <FormInput<ProviderBookingFormSchema>
          name="instagram"
          label="Instagram"
          placeholder="https://instagram.com/your-account"
        />

        <FormInput<ProviderBookingFormSchema>
          name="youtube"
          label="YouTube"
          placeholder="https://youtube.com/@your-channel"
        />

        <FormInput<ProviderBookingFormSchema>
          name="linkedin"
          label="LinkedIn"
          placeholder="https://linkedin.com/company/your-company"
        />
      </div>
    </FormSection>
  );
}
