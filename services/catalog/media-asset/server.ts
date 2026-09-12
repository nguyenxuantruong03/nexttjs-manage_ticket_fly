import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";

import { MediaAsset } from "@/types/common/catalog/media-asset";

export const MediaAssetServerService = createServerCrudApi<MediaAsset>(
  API.MEDIA_ASSET,
);
