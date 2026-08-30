"use client";

import {
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { BrandFormSchema, BrandSchema } from "./form/schema";

import { brandDefaultValues } from "./form/default-values";

import { useCreateHotelBrand } from "@/hooks/product-types/hotel/hotel-brand";

import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createBrand = useCreateHotelBrand();

  return (
    <EntityCreateFormDialog<BrandFormSchema, HotelBrand>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createBrand}
      config={{
        schema: BrandSchema,
        defaultValues: brandDefaultValues,
        title: "Create Brand",
        description: "Create a new brand",
        success: "Brand created",
        submitText: "Create Brand",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<HotelBrand> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
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
    </EntityCreateFormDialog>
  );
}
