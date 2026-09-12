"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlyAddonTypeFormSchema, FlyAddonTypeSchema } from "./form/schema";

import { flyAddonTypeDefaultValues } from "./form/default-values";

import { initFlyAddonTypeFormValues } from "./form/init-value";

import { flyAddonTypeSteps } from "./step/steps";

import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";
import { FlyAddonTypeService } from "@/services/product-types/references/airline/addon-type/client";

export type FlyAddonTypeCreateInput = Parameters<
  typeof FlyAddonTypeService.create
>[0];

export type FlyAddonTypeUpdateInput = Parameters<
  typeof FlyAddonTypeService.update
>[1];

export const flyAddonTypeFormConfig: EntityFormWizardConfig<
  FlyAddonTypeFormSchema,
  FlyAddonType,
  FlyAddonTypeCreateInput,
  FlyAddonTypeUpdateInput
> = {
  schema: FlyAddonTypeSchema,

  defaultValues: flyAddonTypeDefaultValues,

  initValues: initFlyAddonTypeFormValues,

  steps: flyAddonTypeSteps,

  draftEntity: DraftEntity.FlyAddonType,

  messages: {
    create: "Fly addon type created",

    update: "Fly addon type updated",
  },

  redirectDefault: "/product-types/ticket-fly/addon-type",
};
