"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { FormField } from "./FormField";
import { cn } from "@/lib/utils";

export interface FormInputProps<TFieldValues extends FieldValues> extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name" | "children"
> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  className?: string;
  inputClassName?: string;
}

export function FormInput<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  className,
  inputClassName,
  ...props
}: FormInputProps<TFieldValues>) {
  return (
    <FormField<TFieldValues>
      name={name}
      label={label}
      description={description}
      required={required}
      className={className}
    >
      {({ field }) => (
        <Input
          {...field}
          {...props}
          value={field.value ?? ""}
          className={cn(inputClassName)}
        />
      )}
    </FormField>
  );
}

export default FormInput;
