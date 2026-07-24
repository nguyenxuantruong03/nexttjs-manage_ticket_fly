"use client";

import * as React from "react";
import { FieldPath, FieldValues } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import { FormField } from "./FormField";
import { cn } from "@/lib/utils";
import { useAppFormContext } from "./AppForm";

export interface FormTextareaProps<
  TFieldValues extends FieldValues,
> extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "name" | "children"
> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  className?: string;
  textareaClassName?: string;
}

export function FormTextarea<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  className,
  textareaClassName,
  ...props
}: FormTextareaProps<TFieldValues>) {
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
        <Textarea
          {...field}
          {...props}
          value={field.value ?? ""}
          className={cn(textareaClassName)}
          disabled={loading}
        />
      )}
    </FormField>
  );
}

export default FormTextarea;
