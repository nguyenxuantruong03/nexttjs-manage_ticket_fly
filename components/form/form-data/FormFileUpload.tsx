"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";
import { FileText, Trash2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FormField } from "./FormField";
import { useAppFormContext } from "./AppForm";

export interface FormFileUploadProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;

  className?: string;

  accept?: string;
}

export function FormFileUpload<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  disabled,
  className,
  accept = "*",
}: FormFileUploadProps<TFieldValues>) {
    const { loading } = useAppFormContext();
  
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <FormField<TFieldValues>
      name={name}
      label={label}
      description={description}
      required={required}
      className={className}
    >
      {({ field }) => {
        const file = field.value instanceof File ? field.value : null;

        return (
          <div className="space-y-4">
            <input
              ref={inputRef}
              hidden
              type="file"
              accept={accept}
              disabled={loading || disabled}
              onChange={(e) => {
                const selected = e.target.files?.[0];

                if (selected) {
                  field.onChange(selected);
                }
              }}
            />

            {!file ? (
              <Button
                type="button"
                variant="outline"
                className="h-32 w-full border-dashed"
                disabled={loading || disabled}
                onClick={() => inputRef.current?.click()}
              >
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8" />
                  <span>Chọn tệp</span>
                </div>
              </Button>
            ) : (
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <FileText className="h-8 w-8 shrink-0" />

                  <div className="overflow-hidden">
                    <p className="truncate text-sm font-medium">{file.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)}
                      {" MB"}
                    </p>
                  </div>
                </div>

                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
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
            )}
          </div>
        );
      }}
    </FormField>
  );
}

export default FormFileUpload;
