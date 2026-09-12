"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateSearchTag } from "@/hooks/search/tag";

import { SearchTagFormSchema, schema as SearchTagSchema } from "./form/schema";

import { searchTagDefaultValues } from "./form/default-values";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { BookingType } from "@/types/common/commerce/booking-type";

// ======================================================
// PROPS
// ======================================================

interface SearchTagCreateDialogProps extends EntityCreateDialogProps<SearchTag> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function SearchTagCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: SearchTagCreateDialogProps) {
  const createSearchTag = useCreateSearchTag();

  return (
    <EntityCreateFormDialog<SearchTagFormSchema, Partial<SearchTag>, SearchTag>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createSearchTag}
      config={{
        schema: SearchTagSchema,
        defaultValues: searchTagDefaultValues,
        title: "Create Search Tag",
        description: "Create a new search tag",
        success: "Search tag created",
        submitText: "Create Search Tag",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<SearchTag> => ({
          value: response.id,
          label: response.name ?? "Search Tag",
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<SearchTagFormSchema>
            name="name"
            label="Tag Name"
            placeholder="Enter tag name"
          />

          <FormMultiCombobox<SearchTagFormSchema>
            name="bookingTypeIds"
            label="Booking Types"
            placeholder="Select booking types..."
            searchPlaceholder="Search booking types..."
            options={bookingTypeData.map((bookingType) => ({
              label: bookingType.name,
              value: bookingType.id,
            }))}
          />
        </div>

        <div className="flex items-center justify-between rounded-md border p-4">
          <div>
            <p className="font-medium">Active</p>
            <p className="text-sm text-muted-foreground">
              Enable this search tag
            </p>
          </div>

          <FormSwitch<SearchTagFormSchema> name="active" label="Active" />
        </div>
      </div>
    </EntityCreateFormDialog>
  );
}
