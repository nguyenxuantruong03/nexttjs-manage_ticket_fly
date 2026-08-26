"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  CarRentalInsuranceTypeFormSchema,
  CarRentalInsuranceTypeSchema,
} from "./form/schema";

import { carRentalInsuranceTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateCarRentalInsuranceType } from "@/hooks/product-types/car-rental/insurance-type";
import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";

// ======================================================
// PROPS
// ======================================================

interface CarRentalInsuranceTypeCreateDialogProps extends EntityCreateDialogProps<InsuranceType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function CarRentalInsuranceTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: CarRentalInsuranceTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createCarRentalInsuranceType = useCreateCarRentalInsuranceType();

  const { form } = useAppForm<CarRentalInsuranceTypeFormSchema>({
    schema: CarRentalInsuranceTypeSchema,
    defaultValues: carRentalInsuranceTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...carRentalInsuranceTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: CarRentalInsuranceTypeFormSchema) => {
    submit({
      mutation: createCarRentalInsuranceType.mutateAsync(values),

      success: "Car rental insurance type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<InsuranceType> = {
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
      title="Create Car Rental Insurance Type"
      description="Create a new car rental insurance type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createCarRentalInsuranceType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CarRentalInsuranceTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Full Coverage"
            />

            <FormInput<CarRentalInsuranceTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<CarRentalInsuranceTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the insurance type"
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<CarRentalInsuranceTypeFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<CarRentalInsuranceTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
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
              disabled={createCarRentalInsuranceType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createCarRentalInsuranceType.isPending}
            >
              {createCarRentalInsuranceType.isPending
                ? "Creating..."
                : "Create Insurance Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
