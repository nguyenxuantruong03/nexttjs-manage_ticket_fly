// step/notice.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { FlyFormSchema } from "../schema/core/fly.schema";

export default function NoticeStep() {
  return (
    <FormSection
      title="Flight Notice"
      description="Passenger notifications and important information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyFormSchema> name="notice.title" label="Title" />

        <FormInput<FlyFormSchema> name="notice.content" label="Content" />

        <FormInput<FlyFormSchema>
          name="notice.baggageNotice"
          label="Baggage Notice"
        />

        <FormInput<FlyFormSchema>
          name="notice.checkInNotice"
          label="Check In Notice"
        />

        <FormInput<FlyFormSchema>
          name="notice.visaNotice"
          label="Visa Notice"
        />

        <FormInput<FlyFormSchema>
          name="notice.covidNotice"
          label="Covid Notice"
        />

        <FormInput<FlyFormSchema>
          name="notice.refundNotice"
          label="Refund Notice"
        />
      </div>
    </FormSection>
  );
}
