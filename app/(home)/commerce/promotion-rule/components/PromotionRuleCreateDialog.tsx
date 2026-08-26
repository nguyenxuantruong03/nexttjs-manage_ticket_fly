"use client";

import * as React from "react";

import { AppForm, FormInput, FormSelect } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

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

import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";

import PromotionCreateDialog from "../../promotion/components/PromotionCreateDialog";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPromotionRule = useCreatePromotionRule();

  const { form } = useAppForm<PromotionRuleFormSchema>({
    schema: PromotionRuleSchema,
    defaultValues: promotionRuleDefaultValues,
  });

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

  const bookingTypeOptions: EntityOption<BookingType>[] =
    bookingTypeData?.map((type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    })) ?? [];

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

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...promotionRuleDefaultValues,
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: PromotionRuleFormSchema) => {
    submit({
      mutation: createPromotionRule.mutateAsync(values),

      success: "Promotion rule created",

      onSuccess: (response) => {
        const result: EntityCreateResult<PromotionRule> = {
          value: response.id,
          label: response.promotion?.name ?? "Promotion Rule",
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Promotion Rule"
      description="Create a new promotion rule"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createPromotionRule.isPending}
      >
        <div className="space-y-6">
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
            <FormEntitySelector<PromotionRuleFormSchema, BookingType>
              name="bookingTypeId"
              label="Booking Type"
              placeholder="Search booking type..."
              searchPlaceholder="Search booking type..."
              emptyText="No booking type found"
              createText="Create booking type"
              options={bookingTypeOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <BookingTypeCreateDialog {...props} />
              )}
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

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createPromotionRule.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createPromotionRule.isPending}>
              {createPromotionRule.isPending
                ? "Creating..."
                : "Create Promotion Rule"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
