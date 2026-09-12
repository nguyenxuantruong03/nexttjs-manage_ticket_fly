"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  RegulationCategoryFormSchema,
  schema as RegulationCategorySchema,
} from "./form/schema";

import { regulationCategoryDefaultValues } from "./form/default-values";

import { useCreateRegulationCategory } from "@/hooks/commerce/compliance-legal/regulation-category";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { RegulationCategory } from "@/types/common/commerce/compliance-legal.type";

// ======================================================
// PROPS
// ======================================================

interface RegulationCategoryCreateDialogProps extends EntityCreateDialogProps<RegulationCategory> {}

// ======================================================
// COMPONENT
// ======================================================

export default function RegulationCategoryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: RegulationCategoryCreateDialogProps) {
  const createRegulationCategory = useCreateRegulationCategory();

  return (
    <EntityCreateFormDialog<
      RegulationCategoryFormSchema,
      Partial<RegulationCategory>,
      RegulationCategory
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createRegulationCategory}
      config={{
        schema: RegulationCategorySchema,
        defaultValues: regulationCategoryDefaultValues,
        title: "Create Regulation Category",
        description: "Create a new regulation category",
        success: "Regulation category created",
        submitText: "Create Regulation Category",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<RegulationCategory> => ({
          value: response.id,
          label: response.name ?? "Regulation Category",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<RegulationCategoryFormSchema>
          name="code"
          label="Code"
          placeholder="Enter regulation category code"
        />

        <FormInput<RegulationCategoryFormSchema>
          name="name"
          label="Regulation Category Name"
          placeholder="Enter regulation category name"
        />

        <FormInput<RegulationCategoryFormSchema>
          name="description"
          label="Description"
          placeholder="Enter regulation category description"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<RegulationCategoryFormSchema>
          name="isActive"
          label="Active"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
