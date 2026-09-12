"use client";

import FormSection from "@/components/form/FormSection";

import { EntityOption } from "@/components/form/entity-selector";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { ExtraFormSchema } from "../form/schema";
import ExtraTypeCreateDialog from "../../../extra-type/components/ExtraTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface ExtraStepProps {
  extraTypeData: ExtraType[];
  bookingTypeData: BookingType[];
}

export default function ExtraStep({
  extraTypeData,
  bookingTypeData,
}: ExtraStepProps) {
  const extraTypeEntityOptions: EntityOption<ExtraType>[] = extraTypeData.map(
    (extraType) => ({
      value: extraType.id,
      label: extraType.name,
      description: extraType.description ?? undefined,
      data: extraType,
    }),
  );

  return (
    <FormSection
      title="Extra Type"
      description="Select the extra type for this extra"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<ExtraFormSchema, ExtraType>
          name="typeId"
          label="Extra Type"
          placeholder="Search extra type..."
          searchPlaceholder="Search extra type..."
          emptyText="No extra type found"
          options={extraTypeEntityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <ExtraTypeCreateDialog
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />
      </div>
    </FormSection>
  );
}
