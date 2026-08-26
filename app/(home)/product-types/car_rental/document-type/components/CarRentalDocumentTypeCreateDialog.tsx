"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  CarRentalDocumentTypeFormSchema,
  CarRentalDocumentTypeSchema,
} from "./form/schema";

import { carRentalDocumentTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useCreateCarRentalDocumentType } from "@/hooks/product-types/car-rental/document-type";
import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

// ======================================================
// PROPS
// ======================================================

interface CarRentalDocumentTypeCreateDialogProps
  extends EntityCreateDialogProps<CarRentalDocumentType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function CarRentalDocumentTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: CarRentalDocumentTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createCarRentalDocumentType =
    useCreateCarRentalDocumentType();

  const { form } = useAppForm<CarRentalDocumentTypeFormSchema>({
    schema: CarRentalDocumentTypeSchema,
    defaultValues: carRentalDocumentTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...carRentalDocumentTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: CarRentalDocumentTypeFormSchema) => {
    submit({
      mutation: createCarRentalDocumentType.mutateAsync(values),
      success: "Car rental document type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<CarRentalDocumentType> = {
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
      title="Create Car Rental Document Type"
      description="Create a new car rental document type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createCarRentalDocumentType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CarRentalDocumentTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Driver License"
            />

            <FormInput<CarRentalDocumentTypeFormSchema>
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

          {/* ======================================================
              STATUS
          ====================================================== */}

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

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createCarRentalDocumentType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createCarRentalDocumentType.isPending}
            >
              {createCarRentalDocumentType.isPending
                ? "Creating..."
                : "Create Document Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}