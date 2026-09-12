import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { FeatureFlagFormSchema, schema } from "./form/schema";

import { featureFlagDefaultValues } from "./form/default-values";

import { initFeatureFlagFormValues } from "./form/init-value";

import { featureFlagSteps } from "./step/steps";
import { FeatureFlag } from "@/types/common/commerce/feature-flag.type";


export const featureFlagFormConfig: EntityFormWizardConfig<
  FeatureFlagFormSchema,
  FeatureFlag
> = {
  schema,

  defaultValues: featureFlagDefaultValues,

  initValues: initFeatureFlagFormValues,

  steps: featureFlagSteps,

  draftEntity: DraftEntity.FeatureFlag,

  messages: {
    create: "Feature flag created",

    update: "Feature flag updated",
  },

  redirectDefault: "/commerce/feature-flag",
};
