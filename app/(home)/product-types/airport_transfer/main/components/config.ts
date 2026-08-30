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

export const airportTransferFormConfig: EntityFormWizardConfig<
  AirportTransferFormSchema,
  AirportTransfer
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
