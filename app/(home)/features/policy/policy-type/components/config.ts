import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import { PolicyTypeFormSchema, schema } from "./form/schema";

import { policyTypeDefaultValues } from "./form/default-values";

import { initPolicyTypeFormValues } from "./form/init-value";

import { policyTypeSteps } from "./step/steps";

export const policyTypeFormConfig: EntityFormWizardConfig<
  PolicyTypeFormSchema,
  PolicyType
> = {
  schema,

  defaultValues: policyTypeDefaultValues,

  initValues: initPolicyTypeFormValues,

  steps: policyTypeSteps,

  draftEntity: DraftEntity.PolicyType,

  messages: {
    create: "Policy type created",
    update: "Policy type updated",
  },

  redirectDefault: "/features/policy-type",
};
