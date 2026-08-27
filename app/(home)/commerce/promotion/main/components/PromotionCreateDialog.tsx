"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormTextarea,
  FormSelect,
} from "@/components/form/form-data";
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

import { PromotionFormSchema, schema as PromotionSchema } from "./form/schema";

import { promotionDefaultValues } from "./form/default-values";
import { useCreatePromotion } from "@/hooks/commerce/promotion";

import {
  Promotion,
  PromotionStatus,
} from "@/types/common/commerce/promotion/promotion";

import { BookingType } from "@/types/common/commerce/booking-type";
import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

// ======================================================
// PROPS
// ======================================================

interface PromotionCreateDialogProps extends EntityCreateDialogProps<Promotion> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PromotionCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: PromotionCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPromotion = useCreatePromotion();

  const { form } = useAppForm<PromotionFormSchema>({
    schema: PromotionSchema,
    defaultValues: promotionDefaultValues,
  });

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...promotionDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: PromotionFormSchema) => {
    submit({
      mutation: createPromotion.mutateAsync(values),

      success: "Promotion created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Promotion> = {
          value: response.id,
          label: response.name ?? "Promotion",
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Promotion"
      description="Create a new promotion"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createPromotion.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<PromotionFormSchema>
              name="code"
              label="Code"
              placeholder="SUMMER2026"
            />

            <FormInput<PromotionFormSchema>
              name="name"
              label="Name"
              placeholder="Summer Promotion"
            />

            <div className="md:col-span-2">
              <FormTextarea<PromotionFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the promotion..."
              />
            </div>
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormEntityMultiSelector<PromotionFormSchema, BookingType>
              name="bookingTypeIds"
              label="Booking Types"
              placeholder="Search booking types..."
              searchPlaceholder="Search booking types..."
              emptyText="No booking types found"
              createText="Create booking type"
              options={bookingTypeOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <BookingTypeCreateDialog {...props} />
              )}
            />
          </div>

          {/* ======================================================
              DATE
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<PromotionFormSchema>
              name="startDate"
              label="Start Date"
              type="datetime-local"
            />

            <FormInput<PromotionFormSchema>
              name="endDate"
              label="End Date"
              type="datetime-local"
            />
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSelect<PromotionFormSchema>
              name="status"
              label="Status"
              options={[
                {
                  label: "Draft",
                  value: PromotionStatus.draft,
                },
                {
                  label: "Active",
                  value: PromotionStatus.active,
                },
                {
                  label: "Paused",
                  value: PromotionStatus.paused,
                },
                {
                  label: "Expired",
                  value: PromotionStatus.expired,
                },
              ]}
            />
          </div>

          {/* ======================================================
              USAGE
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<PromotionFormSchema>
              name="usageLimit"
              label="Usage Limit"
              type="number"
              placeholder="Unlimited"
            />

            <FormInput<PromotionFormSchema>
              name="usedCount"
              label="Used Count"
              type="number"
              placeholder="0"
            />
          </div>

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createPromotion.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createPromotion.isPending}>
              {createPromotion.isPending ? "Creating..." : "Create Promotion"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
