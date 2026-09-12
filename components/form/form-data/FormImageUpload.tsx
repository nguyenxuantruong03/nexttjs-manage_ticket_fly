"use client";

import { useEffect, useRef, useState } from "react";

import {
  useFormContext,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";

import { RefreshCw, Trash2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useS3Upload } from "@/hooks/catalog/media-asset/useS3Upload";
import { useDeleteMediaObject } from "@/hooks/catalog/media-asset/useDeleteMediaObject";
import { useMediaPreview } from "@/hooks/catalog/media-asset/useMediaPreview";

// ==========================================================
// TYPES
// ==========================================================

interface SingleImageValue {
  key: string | null;
  previewUrl: string | null;
}

interface MultiImageValue {
  key: string[];
  previewUrl: string[];
}

interface FormImageUploadProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;

  label?: string;

  folder?: string;

  /**
   * false = single image
   * true = multiple images
   */
  multiple?: boolean;

  /**
   * Maximum number of images.
   * Only applies when multiple=true.
   */
  maxFiles?: number;

  /**
   * Accepted file types.
   */
  accept?: string;
}

// ==========================================================
// COMPONENT
// ==========================================================

export function FormImageUpload<TFormValues extends FieldValues>({
  name,
  label = "Image",
  folder = "media",
  multiple = false,
  maxFiles,
  accept = "image/*",
}: FormImageUploadProps<TFormValues>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setValue, watch } = useFormContext<TFormValues>();

  const { upload, isUploading, progress, error: uploadError } = useS3Upload();

  const { mutateAsync: deleteMediaObject, isPending: isDeleting } =
    useDeleteMediaObject();

  // ==========================================================
  // FORM VALUE
  // ==========================================================

  const value = watch(name) as
    | SingleImageValue
    | MultiImageValue
    | null
    | undefined;

  // ==========================================================
  // CURRENT KEYS
  // ==========================================================

  const currentKeys: string[] = multiple
    ? Array.isArray((value as MultiImageValue | null)?.key)
      ? ((value as MultiImageValue).key ?? [])
      : []
    : typeof (value as SingleImageValue | null)?.key === "string"
      ? [(value as SingleImageValue).key as string]
      : [];

  // ==========================================================
  // STORED PREVIEW URLS
  // ==========================================================

  const storedPreviewUrls: string[] = multiple
    ? Array.isArray((value as MultiImageValue | null)?.previewUrl)
      ? ((value as MultiImageValue).previewUrl ?? [])
      : []
    : typeof (value as SingleImageValue | null)?.previewUrl === "string"
      ? [(value as SingleImageValue).previewUrl as string]
      : [];

  // ==========================================================
  // LOCAL PREVIEW
  // ==========================================================

  const [localPreviewUrls, setLocalPreviewUrls] = useState<string[]>([]);

  // ==========================================================
  // SINGLE SERVER PREVIEW
  // ==========================================================

  const currentSingleKey = !multiple ? (currentKeys[0] ?? null) : null;

  const currentSingleStoredPreview = !multiple
    ? (storedPreviewUrls[0] ?? null)
    : null;

  const shouldFetchSinglePreview =
    !multiple && Boolean(currentSingleKey) && !currentSingleStoredPreview;

  const {
    previewUrl: fetchedPreviewUrl,
    isLoading: isPreviewLoading,
    error: previewError,
  } = useMediaPreview(shouldFetchSinglePreview ? currentSingleKey : null);

  // ==========================================================
  // SYNC SERVER PREVIEW
  // ==========================================================

  useEffect(() => {
    if (
      multiple ||
      !currentSingleKey ||
      !fetchedPreviewUrl ||
      currentSingleStoredPreview
    ) {
      return;
    }

    setValue(
      name,
      {
        key: currentSingleKey,
        previewUrl: fetchedPreviewUrl,
      } as PathValue<TFormValues, Path<TFormValues>>,
      {
        shouldDirty: false,
        shouldTouch: false,
        shouldValidate: false,
      },
    );
  }, [
    multiple,
    currentSingleKey,
    fetchedPreviewUrl,
    currentSingleStoredPreview,
    name,
    setValue,
  ]);

  // ==========================================================
  // DISPLAY PREVIEW
  // ==========================================================

  const displayPreviewUrls = multiple
    ? [...localPreviewUrls, ...storedPreviewUrls]
    : ([
        localPreviewUrls[0] ??
          currentSingleStoredPreview ??
          fetchedPreviewUrl ??
          null,
      ].filter(Boolean) as string[]);

  // ==========================================================
  // CLEANUP LOCAL OBJECT URL
  // ==========================================================

  useEffect(() => {
    return () => {
      localPreviewUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [localPreviewUrls]);

  // ==========================================================
  // SELECT FILE
  // ==========================================================

  const handleSelectFile = () => {
    if (isUploading || isDeleting) {
      return;
    }

    inputRef.current?.click();
  };

  // ==========================================================
  // FILE CHANGE
  // ==========================================================

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) {
      return;
    }

    // ========================================================
    // SINGLE / MULTIPLE
    // ========================================================

    const selectedFiles = multiple ? files : files.slice(0, 1);

    // ========================================================
    // MAX FILES
    // ========================================================

    if (
      multiple &&
      maxFiles !== undefined &&
      currentKeys.length + selectedFiles.length > maxFiles
    ) {
      event.target.value = "";
      return;
    }

    // ========================================================
    // VALIDATE
    // ========================================================

    const invalidFile = selectedFiles.find(
      (file) => !file.type.startsWith("image/"),
    );

    if (invalidFile) {
      event.target.value = "";
      return;
    }

    // ========================================================
    // LOCAL PREVIEW
    // ========================================================

    const objectUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    if (multiple) {
      setLocalPreviewUrls((prev) => [...prev, ...objectUrls]);
    } else {
      if (localPreviewUrls.length) {
        localPreviewUrls.forEach((url) => {
          URL.revokeObjectURL(url);
        });
      }

      setLocalPreviewUrls(objectUrls);
    }

    try {
      // ======================================================
      // UPLOAD
      // ======================================================

      const results = await Promise.all(
        selectedFiles.map((file) => upload(file, folder)),
      );

      const newKeys = results.map((result) => result.key);

      const newPreviewUrls = results
        .map((result) => result.previewUrl)
        .filter((url): url is string => Boolean(url));

      // ======================================================
      // SINGLE
      // ======================================================

      if (!multiple) {
        const oldKey = currentKeys[0] ?? null;

        setValue(
          name,
          {
            key: newKeys[0],
            previewUrl: newPreviewUrls[0] ?? null,
          } as PathValue<TFormValues, Path<TFormValues>>,
          {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: false,
          },
        );

        // ====================================================
        // DELETE OLD
        // ====================================================

        if (oldKey && oldKey !== newKeys[0]) {
          try {
            await deleteMediaObject(oldKey);
          } catch (deleteError) {
            console.error("Failed to delete old image:", deleteError);
          }
        }

        // ====================================================
        // REMOVE LOCAL PREVIEW
        // ====================================================

        objectUrls.forEach((url) => {
          URL.revokeObjectURL(url);
        });

        setLocalPreviewUrls([]);

        return;
      }

      // ======================================================
      // MULTIPLE
      // ======================================================

      const nextKeys = [...currentKeys, ...newKeys];

      const nextPreviewUrls = [...storedPreviewUrls, ...newPreviewUrls];

      setValue(
        name,
        {
          key: nextKeys,
          previewUrl: nextPreviewUrls,
        } as PathValue<TFormValues, Path<TFormValues>>,
        {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: false,
        },
      );

      // ======================================================
      // REMOVE LOCAL PREVIEW
      // ======================================================

      objectUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });

      setLocalPreviewUrls([]);
    } catch (error) {
      console.error("Failed to upload image:", error);

      objectUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });

      setLocalPreviewUrls([]);
    } finally {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  // ==========================================================
  // DELETE
  // ==========================================================

  const handleDelete = async (index: number) => {
    if (isUploading || isDeleting) {
      return;
    }

    const key = currentKeys[index];

    // ========================================================
    // SINGLE
    // ========================================================

    if (!multiple) {
      if (!key) {
        setValue(
          name,
          {
            key: null,
            previewUrl: null,
          } as PathValue<TFormValues, Path<TFormValues>>,
          {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: false,
          },
        );

        return;
      }

      try {
        await deleteMediaObject(key);

        setValue(
          name,
          {
            key: null,
            previewUrl: null,
          } as PathValue<TFormValues, Path<TFormValues>>,
          {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: false,
          },
        );

        if (localPreviewUrls[0]) {
          URL.revokeObjectURL(localPreviewUrls[0]);
        }

        setLocalPreviewUrls([]);
      } catch (error) {
        console.error("Failed to delete image:", error);
      }

      return;
    }

    // ========================================================
    // MULTIPLE
    // ========================================================

    if (!key) {
      return;
    }

    try {
      await deleteMediaObject(key);

      const nextKeys = currentKeys.filter((_, keyIndex) => keyIndex !== index);

      const nextPreviewUrls = storedPreviewUrls.filter(
        (_, previewIndex) => previewIndex !== index,
      );

      setValue(
        name,
        {
          key: nextKeys,
          previewUrl: nextPreviewUrls,
        } as PathValue<TFormValues, Path<TFormValues>>,
        {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: false,
        },
      );
    } catch (error) {
      console.error("Failed to delete image:", error);
    }
  };

  // ==========================================================
  // LOADING
  // ==========================================================

  const isLoading = isUploading || isDeleting || isPreviewLoading;

  // ==========================================================
  // ERROR
  // ==========================================================

  const error = uploadError || previewError;

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="space-y-3">
      {/* ====================================================
          LABEL
      ==================================================== */}

      <label className="text-sm font-medium">{label}</label>

      {/* ====================================================
          INPUT
      ==================================================== */}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        disabled={isLoading}
        onChange={handleFileChange}
      />

      {/* ====================================================
          EMPTY
      ==================================================== */}

      {!displayPreviewUrls.length && (
        <button
          type="button"
          onClick={handleSelectFile}
          disabled={isLoading}
          className="
            flex
            h-64
            w-full
            flex-col
            items-center
            justify-center
            rounded-lg
            border
            border-dashed
            bg-muted/30
            transition
            hover:bg-muted/50
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isLoading ? (
            <>
              <RefreshCw
                className="
                  mb-3
                  h-8
                  w-8
                  animate-spin
                  text-muted-foreground
                "
              />

              <span className="text-sm font-medium">Loading...</span>
            </>
          ) : (
            <>
              <Upload
                className="
                  mb-3
                  h-8
                  w-8
                  text-muted-foreground
                "
              />

              <span className="text-sm font-medium">
                {multiple ? "Upload images" : "Upload image"}
              </span>

              <span className="mt-1 text-xs text-muted-foreground">
                PNG, JPG, WEBP
              </span>
            </>
          )}
        </button>
      )}

      {/* ====================================================
          PREVIEW
      ==================================================== */}

      {displayPreviewUrls.length > 0 && (
        <>
          {multiple ? (
            <div className="space-y-4">
              {/* ==================================================
                  IMAGE GRID
              ================================================== */}

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {displayPreviewUrls.map((previewUrl, index) => {
                  const key = currentKeys[index];

                  return (
                    <div
                      key={`${key ?? previewUrl}-${index}`}
                      className="
                          group
                          relative
                          aspect-square
                          overflow-hidden
                          rounded-lg
                          border
                          bg-muted/20
                        "
                    >
                      <img
                        src={previewUrl}
                        alt={`${label} ${index + 1}`}
                        className="
                            h-full
                            w-full
                            object-contain
                          "
                      />

                      {!isLoading && (
                        <Button
                          type="button"
                          size="icon"
                          variant="destructive"
                          className="
                              absolute
                              right-2
                              top-2
                              opacity-0
                              transition
                              group-hover:opacity-100
                            "
                          onClick={() => handleDelete(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}

                      {isDeleting && (
                        <div
                          className="
                              absolute
                              inset-0
                              flex
                              items-center
                              justify-center
                              bg-black/50
                            "
                        >
                          <span className="text-sm text-white">
                            Deleting...
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* ==================================================
                    ADD MORE
                ================================================== */}

                {(!maxFiles || currentKeys.length < maxFiles) && (
                  <button
                    type="button"
                    onClick={handleSelectFile}
                    disabled={isLoading}
                    className="
                      flex
                      aspect-square
                      flex-col
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-dashed
                      bg-muted/30
                      transition
                      hover:bg-muted/50
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    <Upload className="mb-2 h-6 w-6 text-muted-foreground" />

                    <span className="text-xs font-medium">Add images</span>
                  </button>
                )}
              </div>

              {/* ==================================================
                  UPLOADING
              ================================================== */}

              {isUploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Uploading...</span>

                    <span>{progress}%</span>
                  </div>

                  <div
                    className="
                      h-2
                      overflow-hidden
                      rounded-full
                      bg-muted
                    "
                  >
                    <div
                      className="
                        h-full
                        bg-primary
                        transition-all
                      "
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            // ==================================================
            // SINGLE
            // ==================================================

            <div
              className="
                relative
                overflow-hidden
                rounded-lg
                border
                bg-muted/20
              "
            >
              <img
                src={displayPreviewUrls[0]}
                alt={label}
                className="
                  h-64
                  w-full
                  object-contain
                "
              />

              {/* ==================================================
                  UPLOADING
              ================================================== */}

              {isUploading && (
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                    bg-black/50
                  "
                >
                  <span className="text-sm font-medium text-white">
                    Uploading {progress}%
                  </span>

                  <div
                    className="
                      mt-3
                      h-2
                      w-48
                      overflow-hidden
                      rounded-full
                      bg-white/30
                    "
                  >
                    <div
                      className="
                        h-full
                        bg-white
                        transition-all
                      "
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* ==================================================
                  PREVIEW LOADING
              ================================================== */}

              {isPreviewLoading && !isUploading && (
                <div
                  className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/30
                    "
                >
                  <RefreshCw
                    className="
                        h-6
                        w-6
                        animate-spin
                        text-white
                      "
                  />
                </div>
              )}

              {/* ==================================================
                  DELETING
              ================================================== */}

              {isDeleting && (
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/50
                  "
                >
                  <span className="text-sm text-white">Deleting...</span>
                </div>
              )}

              {/* ==================================================
                  ACTIONS
              ================================================== */}

              {!isLoading && (
                <div
                  className="
                    absolute
                    right-2
                    top-2
                    flex
                    gap-2
                  "
                >
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    onClick={handleSelectFile}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>

                  <Button
                    type="button"
                    size="icon"
                    variant="destructive"
                    onClick={() => handleDelete(0)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* ====================================================
          ERROR
      ==================================================== */}

      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
}

export default FormImageUpload;
