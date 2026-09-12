import { createServerCrudApi } from "@/lib/api/createServerCrudApi";

import { API } from "@/lib/api/endpoints";

import { MediaCategory } from "@/types/common/catalog/media-category";

export const MediaCategoryServerService = createServerCrudApi<MediaCategory>(
  API.MEDIA_CATEGORY,
);
