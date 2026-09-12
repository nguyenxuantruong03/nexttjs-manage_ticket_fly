import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import {
  AirportTransferFormSchema,
  AirportTransferSchema,
} from "./form/schema/core/schema";

import { airportTransferDefaultValues } from "./form/default-values";

import { airportTransferSteps } from "./step/steps";

import { initAirportTransferFormValues } from "./form/init-values";

import { AirportTransferService } from "@/services/product-types/airport-transfer/client";

// ======================================================
// API INPUT TYPES
// ======================================================

export type AirportTransferCreateInput = Parameters<
  typeof AirportTransferService.create
>[0];

export type AirportTransferUpdateInput = Parameters<
  typeof AirportTransferService.update
>[1];

// ======================================================
// FORM CONFIG
// ======================================================

export const airportTransferFormConfig: EntityFormWizardConfig<
  AirportTransferFormSchema,
  AirportTransfer,
  AirportTransferCreateInput,
  AirportTransferUpdateInput
> = {
  schema: AirportTransferSchema,

  defaultValues: airportTransferDefaultValues,

  initValues: initAirportTransferFormValues,

  steps: airportTransferSteps,

  draftEntity: DraftEntity.AirportTransfer,

  messages: {
    create: "Airport Transfer created",
    update: "Airport Transfer updated",
  },

  redirectDefault: "/airport-transfer",
};
