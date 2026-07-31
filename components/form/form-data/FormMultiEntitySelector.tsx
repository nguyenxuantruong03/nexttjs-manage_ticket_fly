"use client";

import { FieldPath, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  EntityCreateDialogProps,
  EntityOption,
} from "@/components/entity-selector";
import EntityMultiSelector from "@/components/entity-selector/EntityMultiSelector";

interface Props<TFieldValues extends FieldValues, TEntity> {
  name: FieldPath<TFieldValues>;

  label?: string;

  options: EntityOption<TEntity>[];

  placeholder?: string;

  searchPlaceholder?: string;

  emptyText?: string;

  createText?: string;

  enableCreate?: boolean;

  portalContainer?: HTMLElement | null;

  renderCreateDialog?: (
    props: EntityCreateDialogProps<TEntity>,
  ) => React.ReactNode;
}

export default function FormEntityMultiSelector<
  TFieldValues extends FieldValues,
  TEntity,
>({
  name,
  label,
  options,
  portalContainer,
  ...props
}: Props<TFieldValues, TEntity>) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <EntityMultiSelector
              value={field.value ?? []}
              onChange={field.onChange}
              options={options}
              portalContainer={portalContainer}
              {...props}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}