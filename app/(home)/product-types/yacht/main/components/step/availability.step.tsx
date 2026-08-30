import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormSchema } from "../form/schema/core/yacht.schema";

export default function AvailabilityStep() {
  return (
    <>
      <FormSection
        title="Availability"
        description="Yacht availability calendar"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="availability.calendar.0.date"
            label="Date"
            type="date"
          />
          <FormSwitch<YachtFormSchema>
            name="availability.calendar.0.available"
            label="Available"
          />
          <FormSwitch<YachtFormSchema>
            name="availability.calendar.0.booked"
            label="Booked"
          />
          <FormSwitch<YachtFormSchema>
            name="availability.calendar.0.stopSell"
            label="Stop Sell"
          />
        </div>
      </FormSection>
    </>
  );
}
