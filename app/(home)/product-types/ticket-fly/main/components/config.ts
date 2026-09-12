"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { FlyDefaultValues } from "./form/default-values";

import { flySteps } from "./step/steps";

import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";
import { initTicketFlyFormValues } from "./form/init-values";
import { TicketFlySchema, FlyFormSchema } from "./form/schema/core/fly.schema";
import { TicketFlyService } from "@/services/product-types/ticket-fly/client";

export type FlyCreateInput = Parameters<typeof TicketFlyService.create>[0];
export type FlyUpdateInput = Parameters<typeof TicketFlyService.update>[1];

export const ticketFlyFormConfig: EntityFormWizardConfig<
  FlyFormSchema,
  Fly,
  FlyCreateInput,
  FlyUpdateInput
> = {
  schema: TicketFlySchema,

  defaultValues: FlyDefaultValues,

  initValues: initTicketFlyFormValues,

  steps: flySteps,

  draftEntity: DraftEntity.Ticketflight,

  messages: {
    create: "Ticket created",

    update: "Ticket updated",
  },

  redirectDefault: "/ticket",
};
