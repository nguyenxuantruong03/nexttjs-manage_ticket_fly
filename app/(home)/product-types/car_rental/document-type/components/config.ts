import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  CarRentalDocumentTypeFormSchema,
  CarRentalDocumentTypeSchema,
} from "./form/schema";

import { carRentalDocumentTypeDefaultValues } from "./form/default-values";

import { initCarRentalDocumentTypeFormValues } from "./form/init-value";

import { carRentalDocumentTypeSteps } from "./step/steps";

import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

export const carRentalDocumentTypeFormConfig: EntityFormWizardConfig<
  CarRentalDocumentTypeFormSchema,
  CarRentalDocumentType
> = {
  // ======================================================
  // FORM
  // ======================================================

  schema: CarRentalDocumentTypeSchema,

  defaultValues: carRentalDocumentTypeDefaultValues,

  initValues: initCarRentalDocumentTypeFormValues,

  // ======================================================
  // WIZARD
  // ======================================================

  steps: carRentalDocumentTypeSteps,

  // ======================================================
  // DRAFT
  // ======================================================

  draftEntity: DraftEntity.CarRentalDocumentType,

  // ======================================================
  // MESSAGES
  // ======================================================

  messages: {
    create: "Car rental document type created",
    update: "Car rental document type updated",
  },

  // ======================================================
  // REDIRECT
  // ======================================================

  redirectDefault: "/car-rental/document-type",
};
