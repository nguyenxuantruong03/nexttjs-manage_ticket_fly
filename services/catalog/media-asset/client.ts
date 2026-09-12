import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { MediaAsset } from "@/types/common/catalog/media-asset";
import {
  CreatePresignedUploadRequest,
  CreatePresignedUploadResponse,
} from "@/types/common/catalog/media.types";

// Giả định các kiểu dữ liệu này đã được khai báo ở đâu đó trong dự án của bạn:
// import { CreatePresignedUploadRequest, CreatePresignedUploadResponse } from "@/types/...";

export const MediaAssetService = {
  // Kế thừa các phương thức CRUD cơ bản từ createCrudApi
  ...createCrudApi<MediaAsset>(clientHttp, API.MEDIA_ASSET),

  // ======================================================
  // CREATE PRESIGNED UPLOAD
  // ======================================================
  createPresignedUpload: async (
    data: CreatePresignedUploadRequest,
  ): Promise<CreatePresignedUploadResponse> => {
    const response = await clientHttp.post<CreatePresignedUploadResponse>(
      `${API.MEDIA_ASSET}/presigned-upload`,
      data,
    );
    return response.data;
  },

  // ======================================================
  // GET PRESIGNED PREVIEW URL
  // ======================================================
  getPreviewUrl: async (key: string): Promise<{ url: string }> => {
    const response = await clientHttp.get<{ url: string }>(
      `${API.MEDIA_ASSET}/preview`,
      {
        params: {
          key,
        },
      },
    );
    return response.data;
  },

  // ======================================================
  // DELETE MEDIA OBJECT
  // ======================================================
  deleteObject: async (key: string): Promise<void> => {
    await clientHttp.delete(`${API.MEDIA_ASSET}/object`, {
      data: {
        key,
      },
    });
  },
};
