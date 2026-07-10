"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import { Switch } from "@/components/ui/switch";
import { FormField } from "./FormField";
import { cn } from "@/lib/utils";

export interface FormSwitchProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  switchClassName?: string;
}

export function FormSwitch<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  disabled,
  className,
  switchClassName,
}: FormSwitchProps<TFieldValues>) {
  return (
    <FormField<TFieldValues>
      name={name}
      description={description}
      className={className}
    >
      {({ field }) => (
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-1">
            {label && (
              <label
                htmlFor={field.name}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {label}
                {required && <span className="ml-1 text-destructive">*</span>}
              </label>
            )}

            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>

          <Switch
            id={field.name}
            checked={!!field.value}
            disabled={disabled}
            onCheckedChange={field.onChange}
            className={cn(switchClassName)}
          />
        </div>
      )}
    </FormField>
  );
}

export default FormSwitch;
