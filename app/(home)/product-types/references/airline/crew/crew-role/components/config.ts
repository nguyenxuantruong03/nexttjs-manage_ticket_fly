"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlyCrewRoleFormSchema, FlyCrewRoleSchema } from "./form/schema";

import { flyCrewRoleDefaultValues } from "./form/default-values";

import { initFlyCrewRoleFormValues } from "./form/init-value";

import { flyCrewRoleSteps } from "./step/steps";

import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

export const flyCrewRoleFormConfig: EntityFormWizardConfig<
  FlyCrewRoleFormSchema,
  FlyCrewRole
> = {
  schema: FlyCrewRoleSchema,

  defaultValues: flyCrewRoleDefaultValues,

  initValues: initFlyCrewRoleFormValues,

  steps: flyCrewRoleSteps,

  draftEntity: DraftEntity.FlyCrewRole,

  messages: {
    create: "Fly crew role created",

    update: "Fly crew role updated",
  },

  redirectDefault: "/product-types/references/airline/crew/crew-role",
};
