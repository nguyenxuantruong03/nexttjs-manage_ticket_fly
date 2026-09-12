"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  FeatureFlagFormSchema,
  schema as FeatureFlagSchema,
} from "./form/schema";

import { featureFlagDefaultValues } from "./form/default-values";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateFeatureFlag } from "@/hooks/commerce/feature-flag";
import { FeatureFlag } from "@/types/common/commerce/feature-flag.type";


// ======================================================
// PROPS
// ======================================================

interface FeatureFlagCreateDialogProps
  extends EntityCreateDialogProps<FeatureFlag> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FeatureFlagCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FeatureFlagCreateDialogProps) {
  const createFeatureFlag = useCreateFeatureFlag();

  return (
    <EntityCreateFormDialog<
      FeatureFlagFormSchema,
      Partial<FeatureFlag>,
      FeatureFlag
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFeatureFlag}
      config={{
        schema: FeatureFlagSchema,
        defaultValues: featureFlagDefaultValues,
        title: "Create Feature Flag",
        description: "Create a new feature flag",
        success: "Feature flag created",
        submitText: "Create Feature Flag",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FeatureFlag> => ({
          value: response.id,
          label: response.key ?? "Feature Flag",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<FeatureFlagFormSchema>
          name="key"
          label="Key"
          placeholder="feature.new-dashboard"
        />

        <FormInput<FeatureFlagFormSchema>
          name="description"
          label="Description"
          placeholder="Enter feature flag description"
        />
      </div>

      {/* ======================================================
          ROLLOUT
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<FeatureFlagFormSchema>
          name="rolloutPercent"
          label="Rollout Percent"
          type="number"
          placeholder="0"
        />

        <FormInput<FeatureFlagFormSchema>
          name="targetRegions"
          label="Target Regions"
          placeholder="VN, US, AU"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<FeatureFlagFormSchema>
          name="isEnabled"
          label="Enabled"
        />
      </div>
    </EntityCreateFormDialog>
  );
}