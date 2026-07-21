// step/notice.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

export default function NoticeStep() {
  return (
    <FormSection
      title="Flight Notice"
      description="Passenger notifications and important information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<TicketFlyFormValues> name="notice.title" label="Title" />

        <FormInput<TicketFlyFormValues> name="notice.content" label="Content" />

        <FormInput<TicketFlyFormValues>
          name="notice.baggageNotice"
          label="Baggage Notice"
        />

        <FormInput<TicketFlyFormValues>
          name="notice.checkInNotice"
          label="Check In Notice"
        />

        <FormInput<TicketFlyFormValues>
          name="notice.visaNotice"
          label="Visa Notice"
        />

        <FormInput<TicketFlyFormValues>
          name="notice.covidNotice"
          label="Covid Notice"
        />

        <FormInput<TicketFlyFormValues>
          name="notice.refundNotice"
          label="Refund Notice"
        />
      </div>
    </FormSection>
  );
}
