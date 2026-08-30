import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Address } from "@/types/location/address";

import { AddressFormSchema, AddressSchema } from "./form/schema";

import { addressDefaultValues } from "./form/default-values";

import { initAddressFormValues } from "./form/init-value";

import { addressSteps } from "./step/steps";

export const addressFormConfig: EntityFormWizardConfig<
  AddressFormSchema,
  Address
> = {
  schema: AddressSchema,

  defaultValues: addressDefaultValues,

  initValues: initAddressFormValues,

  steps: addressSteps,

  draftEntity: DraftEntity.Address,

  messages: {
    create: "Address created",
    update: "Address updated",
  },

  redirectDefault: "/address",
};
