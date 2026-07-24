"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { FormField } from "./FormField";
import { cn } from "@/lib/utils";
import { useAppFormContext } from "./AppForm";

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
  disabled?: boolean;
}

export function FormInput<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  className,
  inputClassName,
  disabled,
  ...props
}: FormInputProps<TFieldValues>) {
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
        <Input
          {...field}
          {...props}
          value={field.value ?? ""}
          className={cn(inputClassName)}
          disabled={loading || disabled}
        />
      )}
    </FormField>
  );
}

export default FormInput;
