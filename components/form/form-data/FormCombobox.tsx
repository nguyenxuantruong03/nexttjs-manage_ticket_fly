"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { FieldPath, FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FormField } from "./FormField";
import { cn } from "@/lib/utils";
import { useAppFormContext } from "./AppForm";

export interface ComboboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface FormComboboxProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  options: ComboboxOption[];
}

export function FormCombobox<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  disabled,
  className,
  placeholder = "Chọn...",
  searchPlaceholder = "Tìm kiếm...",
  emptyText = "Không có dữ liệu.",
  options,
}: FormComboboxProps<TFieldValues>) {
  const [open, setOpen] = React.useState(false);
  const { loading } = useAppFormContext();
  return (
    <FormField<TFieldValues>
      name={name}
      label={label}
      description={description}
      required={required}
      className={className}
    >
      {({ field }) => {
        const selected = options.find((item) => item.value === field.value);

        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                role="combobox"
                disabled={loading || disabled}
                className="w-full justify-between"
              >
                <span className="truncate">
                  {selected?.label ?? placeholder}
                </span>

                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
              <Command>
                <CommandInput placeholder={searchPlaceholder} />

                <CommandList>
                  <CommandEmpty>{emptyText}</CommandEmpty>

                  <CommandGroup>
                    {options.map((item) => (
                      <CommandItem
                        key={item.value}
                        value={item.label}
                        disabled={loading || item.disabled}
                        onSelect={() => {
                          field.onChange(item.value);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            item.value === field.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />

                        {item.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        );
      }}
    </FormField>
  );
}

export default FormCombobox;
