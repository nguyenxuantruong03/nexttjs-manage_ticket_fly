"use client";

import * as React from "react";

import { AppForm, FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { SustainabilityFormSchema, SustainabilitySchema } from "./form/schema";
import { sustainabilityDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { Sustainability } from "@/types/bookings/hotel/hotel-detail.type";
import { useCreateHotelSustainability } from "@/hooks/hotel/hotel-sustainability";

// ======================================================
// PROPS
// ======================================================

interface SustainabilityCreateDialogProps extends EntityCreateDialogProps<Sustainability> {}

// ======================================================
// COMPONENT
// ======================================================

export default function SustainabilityCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: SustainabilityCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createSustainability = useCreateHotelSustainability();

  const { form } = useAppForm<SustainabilityFormSchema>({
    schema: SustainabilitySchema,
    defaultValues: sustainabilityDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...sustainabilityDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: SustainabilityFormSchema) => {
    submit({
      mutation: createSustainability.mutateAsync(values),

      success: "Sustainability created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Sustainability> = {
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
      title="Create Sustainability"
      description="Create a new sustainability"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createSustainability.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4">
            <FormInput<SustainabilityFormSchema>
              name="name"
              label="Name"
              placeholder="Sustainability name"
            />

            <FormInput<SustainabilityFormSchema>
              name="description"
              label="Description"
              placeholder="Description"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createSustainability.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createSustainability.isPending}>
              {createSustainability.isPending
                ? "Creating..."
                : "Create Sustainability"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
