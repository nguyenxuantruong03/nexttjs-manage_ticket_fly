"use client";

import FormSection from "@/components/form/FormSection";

import { PromotionRuleFormSchema } from "../form/schema";

import { Promotion } from "@/types/common/commerce/promotion/promotion";

import { EntityOption } from "@/components/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import PromotionCreateDialog from "../../../promotion/components/PromotionCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface PromotionStepProps {
  promotionData: Promotion[];
  bookingTypeData: BookingType[];
}

export default function PromotionStep({
  promotionData,
  bookingTypeData,
}: PromotionStepProps) {
  const promotionOptions: EntityOption<Promotion>[] =
    promotionData?.map((promotion) => ({
      value: promotion.id,
      label: promotion.name,
      description: promotion.description ?? undefined,
      data: promotion,
    })) ?? [];

  return (
    <FormSection
      title="Promotion"
      description="Select the promotion for this promotion rule"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<PromotionRuleFormSchema, Promotion>
          name="promotionId"
          label="Promotion"
          placeholder="Search promotion..."
          searchPlaceholder="Search promotion..."
          emptyText="No promotion found"
          createText="Create promotion"
          options={promotionOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <PromotionCreateDialog
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />
      </div>
    </FormSection>
  );
}
