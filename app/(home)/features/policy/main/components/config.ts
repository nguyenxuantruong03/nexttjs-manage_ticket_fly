import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Policy } from "@/types/common/features/policy/policy";

import { PolicyFormSchema, schema } from "./form/schema";

import { policyDefaultValues } from "./form/default-values";

import { initPolicyFormValues } from "./form/init-value";

import { policySteps } from "./step/steps";

export const policyFormConfig: EntityFormWizardConfig<
  PolicyFormSchema,
  Policy
> = {
  schema,

  defaultValues: policyDefaultValues,

  initValues: initPolicyFormValues,

  steps: policySteps,

  draftEntity: DraftEntity.Policy,

  messages: {
    create: "Policy created",
    update: "Policy updated",
  },

  redirectDefault: "/features/policy",
};
