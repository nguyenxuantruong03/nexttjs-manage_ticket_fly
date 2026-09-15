"use client";

import { FieldValues, Path, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { IconPicker } from "@/components/common/icons/icon-picker";

interface FormIconProps<T extends FieldValues> {
  name: Path<T>;

  label?: string;

  placeholder?: string;

  disabled?: boolean;
}

export function FormIcon<T extends FieldValues>({
  name,
  label,
  placeholder = "Chọn icon...",
  disabled = false,
}: FormIconProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && <FormLabel>{label}</FormLabel>}

            <IconPicker
              value={field.value ?? null}
              onChange={field.onChange}
              placeholder={placeholder}
              disabled={disabled}
            />

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
