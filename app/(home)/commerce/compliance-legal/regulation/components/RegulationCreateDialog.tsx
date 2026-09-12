"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import {
  RegulationFormSchema,
  schema as RegulationSchema,
} from "./form/schema";

import { regulationDefaultValues } from "./form/default-values";

import { useCreateRegulation } from "@/hooks/commerce/compliance-legal/regulation";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { FormDatePicker } from "@/components/form/form-data";
import {
  Regulation,
  RegulationCategory,
} from "@/types/common/commerce/compliance-legal.type";
import RegulationCategoryCreateDialog from "../../regulation-category/components/RegulationCategoryCreateDialog";

// ======================================================
// PROPS
// ======================================================

interface RegulationCreateDialogProps extends EntityCreateDialogProps<Regulation> {
  regulationCategoryData: RegulationCategory[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function RegulationCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  regulationCategoryData,
}: RegulationCreateDialogProps) {
  const createRegulation = useCreateRegulation();

  const categoryOptions: EntityOption<RegulationCategory>[] =
    regulationCategoryData.map((category) => ({
      value: category.id,
      label: category.name,
      data: category,
    }));

  return (
    <EntityCreateFormDialog<
      RegulationFormSchema,
      Partial<Regulation>,
      Regulation
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createRegulation}
      config={{
        schema: RegulationSchema,
        defaultValues: regulationDefaultValues,
        title: "Create Regulation",
        description: "Create a new regulation",
        success: "Regulation created",
        submitText: "Create Regulation",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Regulation> => ({
          value: response.id,
          label: response.title ?? "Regulation",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<RegulationFormSchema>
          name="code"
          label="Code"
          placeholder="Enter regulation code"
        />

        <FormInput<RegulationFormSchema>
          name="version"
          label="Version"
          type="number"
          placeholder="1"
        />

        <FormInput<RegulationFormSchema>
          name="title"
          label="Title"
          placeholder="Enter regulation title"
        />

        <FormInput<RegulationFormSchema>
          name="content"
          label="Content"
          placeholder="Enter regulation content"
        />
      </div>

      {/* ======================================================
          CATEGORY
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntitySelector<RegulationFormSchema, RegulationCategory>
          name="categoryId"
          label="Category"
          placeholder="Select regulation category..."
          searchPlaceholder="Search regulation categories..."
          emptyText="No regulation categories found"
          createText="Create regulation category"
          options={categoryOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <RegulationCategoryCreateDialog {...props} />
          )}
        />
      </div>

      {/* ======================================================
          EFFECTIVE PERIOD
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormDatePicker<RegulationFormSchema>
          name="effectiveFrom"
          label="Effective From"
        />

        <FormDatePicker<RegulationFormSchema>
          name="effectiveTo"
          label="Effective To"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<RegulationFormSchema> name="isActive" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
