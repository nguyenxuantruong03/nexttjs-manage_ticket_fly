"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { FieldPath, FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
import { useAppFormContext } from "./AppForm";

export interface MultiComboboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface FormMultiComboboxProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;

  label?: React.ReactNode;

  description?: React.ReactNode;

  required?: boolean;

  disabled?: boolean;

  className?: string;

  placeholder?: string;

  searchPlaceholder?: string;

  emptyText?: string;

  options: MultiComboboxOption[];
}

export function FormMultiCombobox<TFieldValues extends FieldValues>({
  name,
  label,
  description,
  required,
  disabled,
  className,

  placeholder = "Select...",

  searchPlaceholder = "Search...",

  emptyText = "No data.",

  options,
}: FormMultiComboboxProps<TFieldValues>) {
  const { loading } = useAppFormContext();

  const [open, setOpen] = React.useState(false);

  return (
    <FormField<TFieldValues>
      name={name}
      label={label}
      description={description}
      required={required}
      className={className}
    >
      {({ field }) => {
        const values: string[] = Array.isArray(field.value) ? field.value : [];

        const selectedOptions = options.filter((item) =>
          values.includes(item.value),
        );

        const toggleValue = (value: string) => {
          if (values.includes(value)) {
            field.onChange(values.filter((v) => v !== value));
          } else {
            field.onChange([...values, value]);
          }
        };

        const removeValue = (value: string) => {
          field.onChange(values.filter((v) => v !== value));
        };

        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                disabled={loading || disabled}
                role="combobox"
                className={cn(
                  "min-h-11 h-auto w-full justify-between px-3 py-2",
                  open && "ring-2 ring-ring",
                )}
              >
                <div className="flex flex-1 flex-wrap gap-1 text-left">
                  {selectedOptions.length === 0 && (
                    <span className="text-muted-foreground">{placeholder}</span>
                  )}

                  {selectedOptions.map((option) => (
                <Badge
                  key={option.value}
                  variant="secondary"
                  className="
                    flex items-center gap-1
                    rounded-md
                    border
                    bg-primary/10
                    px-2 py-1
                    text-primary
                    transition-colors
                    hover:bg-primary/15
                  "
                >
                  <span className="max-w-36 truncate">{option.label}</span>

                  <button
                    type="button"
                    tabIndex={-1}
                    aria-label={`Remove ${option.label}`}
                    className="
                      inline-flex h-4 w-4 items-center justify-center
                      rounded-full
                      transition-all duration-200
                      hover:bg-primary
                      hover:text-primary-foreground
                      active:scale-90
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-ring
                    "
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      removeValue(option.value);
                    }}
                  >
                    <X className="h-3 w-3" strokeWidth={2.5} />
                  </button>
                </Badge>
                  ))}
                </div>

                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[var(--radix-popover-trigger-width)] p-0"
              align="start"
            >
              <Command>
                <CommandInput placeholder={searchPlaceholder} />

                <CommandList className="max-h-72">
                  <CommandEmpty>{emptyText}</CommandEmpty>

                  <CommandGroup>
                    {options.map((option) => {
                      const selected = values.includes(option.value);

                      return (
                        <CommandItem
                          key={option.value}
                          value={`${option.label} ${option.value}`}
                          disabled={loading || disabled || option.disabled}
                          onSelect={() => {
                            toggleValue(option.value);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selected ? "opacity-100" : "opacity-0",
                            )}
                          />

                          <span className="flex-1 truncate">
                            {option.label}
                          </span>
                        </CommandItem>
                      );
                    })}
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

export default FormMultiCombobox;
