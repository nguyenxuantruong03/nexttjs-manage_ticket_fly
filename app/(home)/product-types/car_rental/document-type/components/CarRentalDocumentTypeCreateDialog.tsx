"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  CarRentalDocumentTypeFormSchema,
  CarRentalDocumentTypeSchema,
} from "./form/schema";

import { carRentalDocumentTypeDefaultValues } from "./form/default-values";

import { useCreateCarRentalDocumentType } from "@/hooks/product-types/car-rental/document-type";

import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface CarRentalDocumentTypeCreateDialogProps extends EntityCreateDialogProps<CarRentalDocumentType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function CarRentalDocumentTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: CarRentalDocumentTypeCreateDialogProps) {
  const createCarRentalDocumentType = useCreateCarRentalDocumentType();

  return (
    <EntityCreateFormDialog<
      CarRentalDocumentTypeFormSchema,
      Partial<CarRentalDocumentType>,
      CarRentalDocumentType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createCarRentalDocumentType}
      config={{
        schema: CarRentalDocumentTypeSchema,
        defaultValues: carRentalDocumentTypeDefaultValues,
        title: "Create Car Rental Document Type",
        description: "Create a new car rental document type",
        success: "Car rental document type created",
        submitText: "Create Document Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<CarRentalDocumentType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      {/* ====================================================== */}
      {/* BASIC */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<CarRentalDocumentTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Driver License"
        />

        <FormIcon<CarRentalDocumentTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<CarRentalDocumentTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the document type"
          />
        </div>
      </div>

      {/* ====================================================== */}
      {/* STATUS */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<CarRentalDocumentTypeFormSchema>
          name="active"
          label="Active"
        />

        <FormInput<CarRentalDocumentTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
