"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  YachtCrewRoleSchema,
  YachtCrewRoleFormSchema,
} from "./form/schema";

import { yachtCrewRoleDefaultValues } from "./form/default-values";

import { initYachtCrewRoleFormValues } from "./form/init-value";

import { yachtCrewRoleSteps } from "./step/steps";

import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

export const yachtCrewRoleFormConfig: EntityFormWizardConfig<
  YachtCrewRoleFormSchema,
  YachtCrewRole
> = {
  schema: YachtCrewRoleSchema,

  defaultValues: yachtCrewRoleDefaultValues,

  initValues: initYachtCrewRoleFormValues,

  steps: yachtCrewRoleSteps,

  draftEntity: DraftEntity.YachtCrewRole,

  messages: {
    create: "Yacht crew role created",

    update: "Yacht crew role updated",
  },

  redirectDefault: "yacht/crew-role",
};