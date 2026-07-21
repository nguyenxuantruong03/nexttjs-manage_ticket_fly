"use client";

import { FormInput } from "@/components/form/form-data";
import FormSection from "@/components/form/FormSection";

export default function SocialSection() {
  return (
    <FormSection title="Social Media">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput
          name="facebook"
          label="Facebook"
          placeholder="https://facebook.com/your-page"
        />

        <FormInput
          name="instagram"
          label="Instagram"
          placeholder="https://instagram.com/your-account"
        />

        <FormInput
          name="youtube"
          label="YouTube"
          placeholder="https://youtube.com/@your-channel"
        />

        <FormInput
          name="linkedin"
          label="LinkedIn"
          placeholder="https://linkedin.com/company/your-company"
        />
      </div>
    </FormSection>
  );
}
