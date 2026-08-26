"use client";

import * as React from "react";

import { AppForm, FormInput } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useCreateContinent } from "@/hooks/location/country/continent";

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

import { ContinentFormSchema, ContinentSchema } from "./form/schema";

import { continentDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { Continent } from "@/types/location/country/continent.type";

// ======================================================
// PROPS
// ======================================================

interface ContinentCreateDialogProps extends EntityCreateDialogProps<Continent> {}

// ======================================================
// COMPONENT
// ======================================================

export default function ContinentCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: ContinentCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createContinent = useCreateContinent();

  const { form } = useAppForm<ContinentFormSchema>({
    schema: ContinentSchema,
    defaultValues: continentDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...continentDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: ContinentFormSchema) => {
    submit({
      mutation: createContinent.mutateAsync(values),
      success: "Continent created",
      onSuccess: (response) => {
        const result: EntityCreateResult<Continent> = {
          value: response.id,
          label: response.name,
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Continent"
      description="Create a new continent"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createContinent.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<ContinentFormSchema>
              name="name"
              label="Name"
              placeholder="Asia"
            />

            <FormInput<ContinentFormSchema>
              name="nativeName"
              label="Native Name"
              placeholder="Châu Á"
            />

            <FormInput<ContinentFormSchema>
              name="code"
              label="Code"
              placeholder="AS"
            />

            <FormInput<ContinentFormSchema>
              name="description"
              label="Description"
              placeholder="Continent description"
            />

            <FormInput<ContinentFormSchema>
              name="thumbnail"
              label="Thumbnail URL"
              placeholder="Thumbnail URL"
            />

            <FormInput<ContinentFormSchema>
              name="coverImage"
              label="Cover Image URL"
              placeholder="Cover image URL"
            />

            <FormInput<ContinentFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createContinent.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createContinent.isPending}>
              {createContinent.isPending ? "Creating..." : "Create Continent"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
