import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { RouteType } from "@/types/common/catalog/route-type.type";

import { RouteTypeFormSchema, schema } from "./form/schema";

import { routeTypeDefaultValues } from "./form/default-values";

import { initRouteTypeFormValues } from "./form/init-value";

import { routeTypeSteps } from "./step/steps";

export const routeTypeFormConfig: EntityFormWizardConfig<
  RouteTypeFormSchema,
  RouteType
> = {
  schema,

  defaultValues: routeTypeDefaultValues,

  initValues: initRouteTypeFormValues,

  steps: routeTypeSteps,

  draftEntity: DraftEntity.RouteType,

  messages: {
    create: "Route type created",

    update: "Route type updated",
  },

  redirectDefault: "/catalog/route-type",
};
