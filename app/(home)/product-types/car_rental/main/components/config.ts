import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";
import { DraftEntity } from "@/components/daft/draft-config";

import {
  CarRentalFormSchema,
  CarRentalSchema,
} from "./form/schema/core/car-rental.schema";

import { defaultCarRentalValues } from "./form/default-values";
import { carRentalSteps } from "./step/steps";
import { initCarRentalFormValues } from "./form/init-values";

import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalService } from "@/services/product-types/car-rental/client";

// ======================================================
// API INPUT TYPES
// ======================================================

export type CarRentalCreateInput = Parameters<
  typeof CarRentalService.create
>[0];

export type CarRentalUpdateInput = Parameters<
  typeof CarRentalService.update
>[1];

// ======================================================
// FORM CONFIG
// ======================================================

export const carRentalFormConfig: EntityFormWizardConfig<
  CarRentalFormSchema,
  CarRental,
  CarRentalCreateInput,
  CarRentalUpdateInput
> = {
  schema: CarRentalSchema,

  defaultValues: defaultCarRentalValues,

  initValues: initCarRentalFormValues,

  steps: carRentalSteps,

  draftEntity: DraftEntity.CarRental,

  messages: {
    create: "Car Rental created",
    update: "Car Rental updated",
  },

  redirectDefault: "/car-rental",
};
