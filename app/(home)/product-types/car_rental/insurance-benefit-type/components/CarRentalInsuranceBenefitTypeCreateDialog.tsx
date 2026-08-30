"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useCreateCarRentalInsuranceBenefitType } from "@/hooks/product-types/car-rental/insurance-benefit-type";

import {
  CarRentalInsuranceBenefitTypeFormSchema,
  CarRentalInsuranceBenefitTypeSchema,
} from "./form/schema";

import { carRentalInsuranceBenefitTypeDefaultValues } from "./form/default-values";

import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createCarRentalInsuranceBenefitType =
    useCreateCarRentalInsuranceBenefitType();

  return (
    <EntityCreateFormDialog<
      CarRentalInsuranceBenefitTypeFormSchema,
      InsuranceBenefitType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createCarRentalInsuranceBenefitType}
      config={{
        schema: CarRentalInsuranceBenefitTypeSchema,
        defaultValues: carRentalInsuranceBenefitTypeDefaultValues,
        title: "Create Car Rental Insurance Benefit Type",
        description: "Create a new car rental insurance benefit type",
        success: "Car rental insurance benefit type created",
        submitText: "Create Benefit Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<InsuranceBenefitType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
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
    </EntityCreateFormDialog>
  );
}
