"use client";

import { FormInput, FormSelect } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import {
  PromotionRuleFormSchema,
  schema as PromotionRuleSchema,
} from "./form/schema";

import { promotionRuleDefaultValues } from "./form/default-values";

import { useCreatePromotionRule } from "@/hooks/commerce/promotion-rule";

import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

import { Promotion } from "@/types/common/commerce/promotion/promotion";

import { BookingType } from "@/types/common/commerce/booking-type";

import { PriceCalculationType } from "@/types/common/enums";

import PromotionCreateDialog from "../../main/components/PromotionCreateDialog";

import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface PromotionRuleCreateDialogProps extends EntityCreateDialogProps<PromotionRule> {
  promotionData: Promotion[];
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PromotionRuleCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  promotionData,
  bookingTypeData,
}: PromotionRuleCreateDialogProps) {
  const createPromotionRule = useCreatePromotionRule();

  // ======================================================
  // OPTIONS
  // ======================================================

  const promotionOptions: EntityOption<Promotion>[] =
    promotionData?.map((promotion) => ({
      value: promotion.id,
      label: promotion.name,
      description: promotion.description ?? undefined,
      data: promotion,
    })) ?? [];

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  const discountTypeOptions = [
    {
      label: "Percentage",
      value: PriceCalculationType.PERCENTAGE,
    },
    {
      label: "Fixed",
      value: PriceCalculationType.FIXED,
    },
  ];

  return (
    <EntityCreateFormDialog<
      PromotionRuleFormSchema,
      Partial<PromotionRule>,
      PromotionRule
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createPromotionRule}
      config={{
        schema: PromotionRuleSchema,
        defaultValues: promotionRuleDefaultValues,
        title: "Create Promotion Rule",
        description: "Create a new promotion rule",
        success: "Promotion rule created",
        submitText: "Create Promotion Rule",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<PromotionRule> => ({
          value: response.id,
          label: response.promotion?.name ?? "Promotion Rule",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          PROMOTION
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
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
              {...props}
              bookingTypeData={bookingTypeData}
            />
          )}
        />
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<PromotionRuleFormSchema, BookingType>
          name="bookingTypeIds"
          label="Booking Types"
          placeholder="Search booking types..."
          searchPlaceholder="Search booking types..."
          emptyText="No booking types found"
          createText="Create booking type"
          options={bookingTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
        />
      </div>

      {/* ======================================================
          DISCOUNT
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSelect<PromotionRuleFormSchema>
          name="discountType"
          label="Discount Type"
          options={discountTypeOptions}
        />

        <FormInput<PromotionRuleFormSchema>
          name="value"
          label="Value"
          type="number"
          placeholder="0"
        />

        <FormInput<PromotionRuleFormSchema>
          name="maxDiscount"
          label="Maximum Discount"
          type="number"
          placeholder="Unlimited"
        />
      </div>

      {/* ======================================================
          AMOUNT
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PromotionRuleFormSchema>
          name="minimumAmount"
          label="Minimum Amount"
          type="number"
          placeholder="0"
        />

        <FormInput<PromotionRuleFormSchema>
          name="maximumAmount"
          label="Maximum Amount"
          type="number"
          placeholder="Unlimited"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
