"use client";

import * as React from "react";

import { FieldPath, FieldValues } from "react-hook-form";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

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

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useFormContext } from "react-hook-form";

// ======================================================
// TYPES
// ======================================================

export interface ComboboxOption {
  value: string;

  label: string;

  disabled?: boolean;
}

// ======================================================
// PROPS
// ======================================================

interface FormComboboxProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;

  label?: string;

  placeholder?: string;

  searchPlaceholder?: string;

  emptyText?: string;

  options: ComboboxOption[];

  disabled?: boolean;
  portalContainer?: HTMLElement | null | undefined;
}

// ======================================================
// COMPONENT
// ======================================================

export default function FormCombobox<TFieldValues extends FieldValues>({
  name,
  label,
  placeholder = "Select",
  searchPlaceholder = "Search...",
  emptyText = "No result",
  options,
  disabled,
  portalContainer,
}: FormComboboxProps<TFieldValues>) {
  const form = useFormContext<TFieldValues>();

  const [open, setOpen] = React.useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const selected = options.find((item) => item.value === field.value);

        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}

            <Popover modal={false} open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    type="button"
                    variant="outline"
                    role="combobox"
                    disabled={disabled}
                    className={cn(
                      "w-full justify-between",

                      !selected && "text-muted-foreground",
                    )}
                  >
                    {selected?.label ?? placeholder}

                    <ChevronsUpDown
                      className="
                        ml-2
                        h-4
                        w-4
                        shrink-0
                        opacity-50
                      "
                    />
                  </Button>
                </FormControl>
              </PopoverTrigger>

              <PopoverContent
                container={portalContainer}
                sideOffset={4}
                forceMount
                align="start"
                className="
                  w-[var(--radix-popover-trigger-width)]
                  p-0
                "
              >
                <Command>
                  <CommandInput placeholder={searchPlaceholder} />

                  <CommandList>
                    <CommandEmpty>{emptyText}</CommandEmpty>

                    <CommandGroup>
                      {options.map((option) => (
                        <CommandItem
                          key={option.value}
                          value={option.label}
                          disabled={option.disabled}
                          onSelect={() => {
                            field.onChange(option.value);

                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",

                              field.value === option.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />

                          {option.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
