"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  FlyAllianceFormSchema,
  FlyAllianceSchema,
} from "./schema/alliance.schema";

import { flyAllianceDefaultValues } from "./form/default-values";

import { initFlyAllianceFormValues } from "./form/init-value";

import { flyAllianceSteps } from "./step/steps";

import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";
import { FlyAllianceService } from "@/services/product-types/references/alliance/client";

export type FlyAllianceCreateInput = Parameters<
  typeof FlyAllianceService.create
>[0];

export type FlyAllianceUpdateInput = Parameters<
  typeof FlyAllianceService.update
>[1];

export const flyAllianceFormConfig: EntityFormWizardConfig<
  FlyAllianceFormSchema,
  FlyAlliance,
  FlyAllianceCreateInput,
  FlyAllianceUpdateInput
> = {
  schema: FlyAllianceSchema,

  defaultValues: flyAllianceDefaultValues,

  initValues: initFlyAllianceFormValues,

  steps: flyAllianceSteps,

  draftEntity: DraftEntity.FlyAlliance,

  messages: {
    create: "Fly Alliance created",

    update: "Fly Alliance updated",
  },

  redirectDefault: "/product-types/references/alliance",
};
