"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormField } from "./FormField";
import { cn } from "@/lib/utils";
import { useAppFormContext } from "./AppForm";

export interface SelectOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface FormSelectProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  options: SelectOption[];
}

export function FormSelect<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  placeholder = "Chọn...",
  required,
  disabled,
  className,
  triggerClassName,
  options,
}: FormSelectProps<TFieldValues>) {
    const { loading } = useAppFormContext();
  
  return (
    <FormField<TFieldValues>
      name={name}
      label={label}
      description={description}
      required={required}
      className={className}
    >
      {({ field }) => (
        <Select
          value={field.value ?? ""}
          onValueChange={field.onChange}
          disabled={loading || disabled}
        >
          <SelectTrigger className={cn(triggerClassName)}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>

          <SelectContent>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={loading || option.disabled}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </FormField>
  );
}

export default FormSelect;
