import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { ServiceType } from "@/types/common/catalog/service-type.type";

import { ServiceTypeFormSchema, schema } from "./form/schema";

import { serviceTypeDefaultValues } from "./form/default-values";

import { initServiceTypeFormValues } from "./form/init-value";

import { serviceTypeSteps } from "./step/steps";

export const serviceTypeFormConfig: EntityFormWizardConfig<
  ServiceTypeFormSchema,
  ServiceType
> = {
  schema,

  defaultValues: serviceTypeDefaultValues,

  initValues: initServiceTypeFormValues,

  steps: serviceTypeSteps,

  draftEntity: DraftEntity.ServiceType,

  messages: {
    create: "Service type created",

    update: "Service type updated",
  },

  redirectDefault: "/catalog/service-type",
};
