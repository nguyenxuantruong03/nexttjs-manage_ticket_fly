"use client";

import * as React from "react";

import { AppForm, FormSwitch } from "@/components/form/form-data";
import { FormInput, FormSelect } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { useCreateSearchTag } from "@/hooks/search/tag";

import { SearchTag } from "@/types/bookings/search/tag.types";
import { TagType } from "@/types/bookings/search/tag.types";

import { SearchTagFormSchema, schema as SearchTagSchema } from "./form/schema";

import { searchTagDefaultValues } from "./form/default-values";

// ======================================================
// PROPS
// ======================================================

interface SearchTagCreateDialogProps extends EntityCreateDialogProps<SearchTag> {}

// ======================================================
// OPTIONS
// ======================================================

const tagTypeOptions = Object.values(TagType).map((value) => ({
  label: value.replaceAll("_", " "),
  value,
}));

// ======================================================
// COMPONENT
// ======================================================

export default function SearchTagCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: SearchTagCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createSearchTag = useCreateSearchTag();

  const { form } = useAppForm<SearchTagFormSchema>({
    schema: SearchTagSchema,

    defaultValues: searchTagDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...searchTagDefaultValues,

      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: SearchTagFormSchema) => {
    submit({
      mutation: createSearchTag.mutateAsync(values),

      success: "Search tag created",

      onSuccess: (response) => {
        const result: EntityCreateResult<SearchTag> = {
          value: response.id,

          label: response.name ?? "Search Tag",

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
      title="Create Search Tag"
      description="Create a new search tag"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createSearchTag.isPending}
      >
        <div className="space-y-6">
          <div
            className="
              grid
              gap-4
              md:grid-cols-2
            "
          >
            <FormInput<SearchTagFormSchema>
              name="name"
              label="Tag Name"
              placeholder="Enter tag name"
            />

            <FormSelect<SearchTagFormSchema>
              name="type"
              label="Tag Type"
              placeholder="Select tag type"
              options={tagTypeOptions}
            />
          </div>

          <div
            className="
              flex
              items-center
              justify-between
              rounded-md
              border
              p-4
            "
          >
            <div>
              <p className="font-medium">Active</p>

              <p className="text-sm text-muted-foreground">
                Enable this search tag
              </p>
            </div>

            <FormSwitch<SearchTagFormSchema> name="active" label="" />
          </div>

          <div
            className="
              flex
              justify-end
              gap-3
            "
          >
            <Button
              type="button"
              variant="outline"
              disabled={createSearchTag.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createSearchTag.isPending}>
              {createSearchTag.isPending ? "Creating..." : "Create Search Tag"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
