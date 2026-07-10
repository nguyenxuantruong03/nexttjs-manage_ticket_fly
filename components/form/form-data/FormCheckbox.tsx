"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "./FormField";
import { cn } from "@/lib/utils";

export interface FormCheckboxProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  checkboxClassName?: string;
}

export function FormCheckbox<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  disabled,
  className,
  checkboxClassName,
}: FormCheckboxProps<TFieldValues>) {
  return (
    <FormField<TFieldValues>
      name={name}
      label={undefined}
      description={description}
      className={className}
    >
      {({ field }) => (
        <div className="flex items-start space-x-3">
          <Checkbox
            checked={!!field.value}
            disabled={disabled}
            onCheckedChange={field.onChange}
            className={cn(checkboxClassName)}
          />

          {label && (
            <div className="space-y-1 leading-none">
              <label
                htmlFor={field.name}
                className="text-sm font-medium cursor-pointer"
              >
                {label}
                {required && (
                  <span className="ml-1 text-destructive">*</span>
                )}
              </label>
            </div>
          )}
        </div>
      )}
    </FormField>
  );
}

export default FormCheckbox;