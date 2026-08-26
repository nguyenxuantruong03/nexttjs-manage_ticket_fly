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

import { BrandFormSchema, BrandSchema } from "./form/schema";

import { brandDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateHotelBrand } from "@/hooks/product-types/hotel/hotel-brand";
import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

// ======================================================
// PROPS
// ======================================================

interface BrandCreateDialogProps extends EntityCreateDialogProps<HotelBrand> {}

// ======================================================
// COMPONENT
// ======================================================

export default function BrandCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BrandCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createBrand = useCreateHotelBrand();

  const { form } = useAppForm<BrandFormSchema>({
    schema: BrandSchema,
    defaultValues: brandDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...brandDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: BrandFormSchema) => {
    submit({
      mutation: createBrand.mutateAsync(values),

      success: "Brand created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelBrand> = {
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
      title="Create Brand"
      description="Create a new brand"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createBrand.isPending}>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<BrandFormSchema>
              name="name"
              label="Name"
              placeholder="Brand name"
            />

            <FormInput<BrandFormSchema>
              name="logo"
              label="Logo"
              placeholder="Logo URL"
            />

            <div className="md:col-span-2">
              <FormTextarea<BrandFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormSwitch<BrandFormSchema> name="active" label="Active" />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createBrand.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createBrand.isPending}>
              {createBrand.isPending ? "Creating..." : "Create Brand"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
