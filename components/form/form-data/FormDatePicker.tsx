"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FieldPath, FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FormField } from "./FormField";
import { cn } from "@/lib/utils";
import { useAppFormContext } from "./AppForm";

export interface FormDatePickerProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  buttonClassName?: string;
}

export function FormDatePicker<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  disabled,
  className,
  placeholder = "Chọn ngày",
  buttonClassName,
}: FormDatePickerProps<TFieldValues>) {
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
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              disabled={loading || disabled}
              className={cn(
                "w-full justify-start text-left font-normal",
                !field.value && "text-muted-foreground",
                buttonClassName
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />

              {field.value ? (
                format(new Date(field.value), "dd/MM/yyyy")
              ) : (
                placeholder
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={
                field.value ? new Date(field.value) : undefined
              }
              onSelect={field.onChange}
            />
          </PopoverContent>
        </Popover>
      )}
    </FormField>
  );
}

export default FormDatePicker;