import { DraftEntity } from "@/components/daft/draft-config";
import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";
import { RegulationCategoryFormSchema, schema } from "./form/schema";
import { regulationCategoryDefaultValues } from "./form/default-values";
import { initRegulationCategoryFormValues } from "./form/init-value";
import { regulationCategorySteps } from "./step/steps";
import { RegulationCategory } from "@/types/common/commerce/compliance-legal.type";

// ======================================================
// FORM CONFIG
// ======================================================

export const regulationCategoryFormConfig: EntityFormWizardConfig<
  RegulationCategoryFormSchema,
  RegulationCategory
> = {
  schema,
  defaultValues: regulationCategoryDefaultValues,
  initValues: initRegulationCategoryFormValues,
  steps: regulationCategorySteps,
  draftEntity: DraftEntity.RegulationCategory,
  messages: {
    create: "Regulation category created",
    update: "Regulation category updated",
  },
  redirectDefault: "/commerce/compliance-legal/regulation-category",
};
