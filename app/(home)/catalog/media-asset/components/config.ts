import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { MediaAsset } from "@/types/common/catalog/media-asset";

import { MediaAssetFormSchema, schema } from "./form/schema";

import { mediaAssetDefaultValues } from "./form/default-values";

import { initMediaAssetFormValues } from "./form/init-value";

import { mediaAssetSteps } from "./step/steps";
import { MediaAssetService } from "@/services/catalog/media-asset/client";

// ======================================================
// FORM CONFIG
// ======================================================

export type MediaAssetCreateInput = Parameters<
  typeof MediaAssetService.create
>[0];

export type MediaAssetUpdateInput = Parameters<
  typeof MediaAssetService.update
>[1];

export const mediaAssetFormConfig: EntityFormWizardConfig<
  MediaAssetFormSchema,
  MediaAsset,
  MediaAssetCreateInput,
  MediaAssetUpdateInput
> = {
  schema,

  defaultValues: mediaAssetDefaultValues,

  initValues: initMediaAssetFormValues,

  steps: mediaAssetSteps,

  draftEntity: DraftEntity.MediaAsset,

  messages: {
    create: "Media asset created",
    update: "Media asset updated",
  },

  redirectDefault: "/catalog/media-asset",
};
