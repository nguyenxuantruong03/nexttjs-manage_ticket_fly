import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { YachtFormSchema } from "../form/schema/core/yacht.schema";

export default function NoticeStep() {
  return (
    <>
      <FormSection
        title="Booking Notice"
        description="Important information shown to customers"
      >
        <div className="grid gap-6">
          <FormInput<YachtFormSchema>
            name="notice.important"
            label="Important Notice"
          />
          <FormInput<YachtFormSchema>
            name="notice.beforeBooking"
            label="Before Booking Notice"
          />
          <FormInput<YachtFormSchema>
            name="notice.afterBooking"
            label="After Booking Notice"
          />
          <FormInput<YachtFormSchema>
            name="notice.safetyNotice"
            label="Safety Notice"
          />
        </div>
      </FormSection>
    </>
  );
}
