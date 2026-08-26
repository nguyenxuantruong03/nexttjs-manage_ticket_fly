"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  CarRentalInsuranceBenefitTypeFormSchema,
  CarRentalInsuranceBenefitTypeSchema,
} from "./form/schema";

import { carRentalInsuranceBenefitTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateCarRentalInsuranceBenefitType } from "@/hooks/product-types/car-rental/insurance-benefit-type";
import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

// ======================================================
// PROPS
// ======================================================

interface CarRentalInsuranceBenefitTypeCreateDialogProps extends EntityCreateDialogProps<InsuranceBenefitType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function CarRentalInsuranceBenefitTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: CarRentalInsuranceBenefitTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createCarRentalInsuranceBenefitType =
    useCreateCarRentalInsuranceBenefitType();

  const { form } = useAppForm<CarRentalInsuranceBenefitTypeFormSchema>({
    schema: CarRentalInsuranceBenefitTypeSchema,
    defaultValues: carRentalInsuranceBenefitTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...carRentalInsuranceBenefitTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: CarRentalInsuranceBenefitTypeFormSchema) => {
    submit({
      mutation: createCarRentalInsuranceBenefitType.mutateAsync(values),

      success: "Car rental insurance benefit type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<InsuranceBenefitType> = {
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
      title="Create Car Rental Insurance Benefit Type"
      description="Create a new car rental insurance benefit type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createCarRentalInsuranceBenefitType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CarRentalInsuranceBenefitTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Collision Damage Waiver"
            />

            <FormInput<CarRentalInsuranceBenefitTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<CarRentalInsuranceBenefitTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the insurance benefit type"
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<CarRentalInsuranceBenefitTypeFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<CarRentalInsuranceBenefitTypeFormSchema>
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
              disabled={createCarRentalInsuranceBenefitType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createCarRentalInsuranceBenefitType.isPending}
            >
              {createCarRentalInsuranceBenefitType.isPending
                ? "Creating..."
                : "Create Benefit Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
