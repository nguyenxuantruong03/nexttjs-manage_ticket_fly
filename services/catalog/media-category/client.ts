import { createCrudApi } from "@/lib/api/createCrudApi";

import { API } from "@/lib/api/endpoints";

import { clientHttp } from "@/lib/http/client";

import { MediaCategory } from "@/types/common/catalog/media-category";

export const MediaCategoryService = createCrudApi<MediaCategory>(
  clientHttp,
  API.MEDIA_CATEGORY,
);
