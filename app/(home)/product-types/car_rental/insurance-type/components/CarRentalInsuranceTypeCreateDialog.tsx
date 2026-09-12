"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { useCreateCarRentalInsuranceType } from "@/hooks/product-types/car-rental/insurance-type";

import {
  CarRentalInsuranceTypeFormSchema,
  CarRentalInsuranceTypeSchema,
} from "./form/schema";

import { carRentalInsuranceTypeDefaultValues } from "./form/default-values";

import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

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
  const createCarRentalInsuranceType = useCreateCarRentalInsuranceType();

  return (
    <EntityCreateFormDialog<
      CarRentalInsuranceTypeFormSchema,
      Partial<InsuranceType>,
      InsuranceType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createCarRentalInsuranceType}
      config={{
        schema: CarRentalInsuranceTypeSchema,
        defaultValues: carRentalInsuranceTypeDefaultValues,
        title: "Create Car Rental Insurance Type",
        description: "Create a new car rental insurance type",
        success: "Car rental insurance type created",
        submitText: "Create Insurance Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<InsuranceType> => ({
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
        <FormInput<CarRentalInsuranceTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Full Coverage"
        />

        <FormIcon<CarRentalInsuranceTypeFormSchema>
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
    </EntityCreateFormDialog>
  );
}
