"use client";

import { FormInput } from "@/components/form/form-data";
import FormSection from "@/components/form/FormSection";

export default function ContactSection() {
  return (
    <FormSection title="Contact Information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput
          name="email"
          label="Email"
          placeholder="e.g. contact@example.com"
        />

        <FormInput
          name="phone"
          label="Phone"
          placeholder="e.g. +84 28 1234 5678"
        />

        <FormInput
          name="hotline"
          label="Hotline"
          placeholder="e.g. 1900 1234"
        />

        <FormInput
          name="website"
          label="Website"
          placeholder="e.g. https://example.com"
        />
      </div>
    </FormSection>
  );
}
