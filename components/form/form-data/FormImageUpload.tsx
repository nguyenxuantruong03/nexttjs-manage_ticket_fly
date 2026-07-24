"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import { ImagePlus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FormField } from "./FormField";
import { cn } from "@/lib/utils";
import { useAppFormContext } from "./AppForm";

export interface FormImageUploadProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;

  className?: string;
  previewClassName?: string;

  accept?: string;
}

export function FormImageUpload<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  disabled,
  className,
  previewClassName,
  accept = "image/*",
}: FormImageUploadProps<TFieldValues>) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { loading } = useAppFormContext();

  return (
    <FormField<TFieldValues>
      name={name}
      label={label}
      description={description}
      required={required}
      className={className}
    >
      {({ field }) => {
        const preview =
          field.value instanceof File
            ? URL.createObjectURL(field.value)
            : field.value || "";

        return (
          <div className="space-y-4">
            <input
              ref={inputRef}
              hidden
              type="file"
              accept={accept}
              disabled={loading || disabled}
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  field.onChange(file);
                }
              }}
            />

            {preview ? (
              <div
                className={cn(
                  "relative overflow-hidden rounded-lg border",
                  previewClassName,
                )}
              >
                <img
                  src={preview}
                  alt="preview"
                  className="h-48 w-full object-cover"
                />

                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  className="absolute right-2 top-2"
                  onClick={() => {
                    field.onChange(null);

                    if (inputRef.current) {
                      inputRef.current.value = "";
                    }
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                type="button"
                variant="outline"
                disabled={loading || disabled}
                className="h-40 w-full border-dashed"
                onClick={() => inputRef.current?.click()}
              >
                <div className="flex flex-col items-center gap-2">
                  <ImagePlus className="h-8 w-8" />
                  <span>Chọn ảnh</span>
                </div>
              </Button>
            )}
          </div>
        );
      }}
    </FormField>
  );
}

export default FormImageUpload;
