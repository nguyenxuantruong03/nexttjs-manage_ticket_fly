"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  PriceRuleTypeFormSchema,
  schema as PriceRuleTypeSchema,
} from "./form/schema";

import { priceRuleTypeDefaultValues } from "./form/default-values";

import { useCreatePriceRuleType } from "@/hooks/commerce/price-rule-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

// ======================================================
// PROPS
// ======================================================

interface PriceRuleTypeCreateDialogProps extends EntityCreateDialogProps<PriceRuleType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PriceRuleTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: PriceRuleTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPriceRuleType = useCreatePriceRuleType();

  const { form } = useAppForm<PriceRuleTypeFormSchema>({
    schema: PriceRuleTypeSchema,
    defaultValues: priceRuleTypeDefaultValues,
  });

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...priceRuleTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: PriceRuleTypeFormSchema) => {
    submit({
      mutation: createPriceRuleType.mutateAsync(values),

      success: "Price rule type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<PriceRuleType> = {
          value: response.id,
          label: response.name ?? "Price Rule Type",
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
      title="Create Price Rule Type"
      description="Create a new price rule type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createPriceRuleType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Basic</h3>

              <p className="text-sm text-muted-foreground">
                Basic price rule type information
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormInput<PriceRuleTypeFormSchema>
                name="name"
                label="Name"
                placeholder="Enter price rule type name"
              />

              <FormInput<PriceRuleTypeFormSchema>
                name="icon"
                label="Icon"
                placeholder="Enter price rule type icon"
              />

              <div className="md:col-span-2">
                <FormTextarea<PriceRuleTypeFormSchema>
                  name="description"
                  label="Description"
                  placeholder="Describe the price rule type..."
                />
              </div>
            </div>
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Booking Type</h3>

              <p className="text-sm text-muted-foreground">
                Select the booking type for this price rule type
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormEntityMultiSelector<PriceRuleTypeFormSchema, BookingType>
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
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Status</h3>

              <p className="text-sm text-muted-foreground">
                Price rule type configuration
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormSwitch<PriceRuleTypeFormSchema>
                name="active"
                label="Active"
              />

              <FormInput<PriceRuleTypeFormSchema>
                name="sortOrder"
                label="Sort Order"
                type="number"
                placeholder="0"
              />
            </div>
          </div>

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createPriceRuleType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createPriceRuleType.isPending}>
              {createPriceRuleType.isPending
                ? "Creating..."
                : "Create Price Rule Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
