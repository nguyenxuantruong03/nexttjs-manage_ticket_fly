"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "./FormField";
import { cn } from "@/lib/utils";

interface CheckboxOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface FormCheckboxGroupProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;

  options: CheckboxOption[];

  disabled?: boolean;

  className?: string;
  checkboxClassName?: string;

  columns?: 1 | 2 | 3 | 4;
}

export function FormCheckboxGroup<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  options,
  disabled,
  className,
  checkboxClassName,
  columns = 2,
}: FormCheckboxGroupProps<TFieldValues>) {
  return (
    <FormField<TFieldValues>
      name={name}
      label={label}
      description={description}
      className={className}
    >
      {({ field }) => {
        const values: string[] = Array.isArray(field.value) ? field.value : [];

        return (
          <div
            className={cn(
              "grid gap-3",
              columns === 1 && "grid-cols-1",
              columns === 2 && "grid-cols-2",
              columns === 3 && "grid-cols-3",
              columns === 4 && "grid-cols-4",
            )}
          >
            {options.map((option) => {
              const checked = values.includes(option.value);

              return (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 rounded-md border p-3 hover:bg-muted/50"
                >
                  <Checkbox
                    checked={checked}
                    disabled={disabled || option.disabled}
                    className={cn(checkboxClassName)}
                    onCheckedChange={(isChecked) => {
                      if (isChecked) {
                        field.onChange([...values, option.value]);
                      } else {
                        field.onChange(
                          values.filter((v) => v !== option.value),
                        );
                      }
                    }}
                  />

                  <span className="text-sm font-medium">
                    {option.label}
                    {required && (
                      <span className="ml-1 text-destructive">*</span>
                    )}
                  </span>
                </label>
              );
            })}
          </div>
        );
      }}
    </FormField>
  );
}

export default FormCheckboxGroup;
