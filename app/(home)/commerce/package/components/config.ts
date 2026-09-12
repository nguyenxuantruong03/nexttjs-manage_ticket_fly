import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Package } from "@/types/common/commerce/package/package.type";

import { PackageFormSchema, schema } from "./form/schema";

import { packageDefaultValues } from "./form/default-values";

import { initPackageFormValues } from "./form/init-value";

import { packageSteps } from "./step/steps";
import { PackageService } from "@/services/commerce/package/client";

export type PackageCreateInput = Parameters<typeof PackageService.create>[0];

export type PackageUpdateInput = Parameters<typeof PackageService.update>[1];

export const packageFormConfig: EntityFormWizardConfig<
  PackageFormSchema,
  Package,
  PackageCreateInput,
  PackageUpdateInput
> = {
  schema,

  defaultValues: packageDefaultValues,

  initValues: initPackageFormValues,

  steps: packageSteps,

  draftEntity: DraftEntity.Package,

  messages: {
    create: "Package created",

    update: "Package updated",
  },

  redirectDefault: "/commerce/package",
};
