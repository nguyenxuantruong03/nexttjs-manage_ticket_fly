export interface CreatePresignedUploadRequest {
  filename: string;

  mimeType: string;

  folder: string;
}

export interface CreatePresignedUploadResponse {
  uploadUrl: string;
  key: string;
  previewUrl: string;
}

export interface UploadedMedia {
  key: string;
  previewUrl: string;
}
