"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { RatePlanTypeFormSchema, RatePlanTypeSchema } from "./form/schema";

import { ratePlanTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { HotelRatePlanType } from "@/types/bookings/hotel/pricing/rate-plan.types";
import { useCreateHotelRatePlanType } from "@/hooks/hotel/hotel-rate-plan-type";

// ======================================================
// PROPS
// ======================================================

interface RatePlanTypeCreateDialogProps extends EntityCreateDialogProps<HotelRatePlanType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function RatePlanTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: RatePlanTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createRatePlanType = useCreateHotelRatePlanType();

  const { form } = useAppForm<RatePlanTypeFormSchema>({
    schema: RatePlanTypeSchema,
    defaultValues: ratePlanTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...ratePlanTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: RatePlanTypeFormSchema) => {
    submit({
      mutation: createRatePlanType.mutateAsync(values),

      success: "Rate Plan Type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelRatePlanType> = {
          value: response.id,
          label: response.name,
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
      title="Create Rate Plan Type"
      description="Create a new rate plan type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createRatePlanType.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<RatePlanTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Rate plan type name"
            />

            <FormInput<RatePlanTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<RatePlanTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormInput<RatePlanTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<RatePlanTypeFormSchema> name="active" label="Active" />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createRatePlanType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createRatePlanType.isPending}>
              {createRatePlanType.isPending
                ? "Creating..."
                : "Create Rate Plan Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
