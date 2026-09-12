"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { BusFormSchema, BusSchema } from "./form/schema/core/bus.schema";

import { busDefaultValues } from "./form/default-values";

import { busSteps } from "./step/steps";

import { Bus } from "@/types/product-types/bus/core/bus.types";
import { initTicketBusFormValues } from "./form/init-values";
import { TicketBusService } from "@/services/product-types/ticket-bus/client";

export type BusCreateInput = Parameters<typeof TicketBusService.create>[0];
export type BusUpdateInput = Parameters<typeof TicketBusService.update>[1];

export const ticketBusFormConfig: EntityFormWizardConfig<
  BusFormSchema,
  Bus,
  BusCreateInput,
  BusUpdateInput
> = {
  schema: BusSchema,

  defaultValues: busDefaultValues,

  initValues: initTicketBusFormValues,

  steps: busSteps,

  draftEntity: DraftEntity.Ticketbus,

  messages: {
    create: "Bus created",

    update: "Bus updated",
  },

  redirectDefault: "/bus",
};
