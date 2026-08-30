import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Package } from "@/types/common/commerce/package/package.type";

import { PackageFormSchema, schema } from "./form/schema";

import { packageDefaultValues } from "./form/default-values";

import { initPackageFormValues } from "./form/init-value";

import { packageSteps } from "./step/steps";

export const packageFormConfig: EntityFormWizardConfig<
  PackageFormSchema,
  Package
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
