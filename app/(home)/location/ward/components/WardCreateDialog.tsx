"use client";

import * as React from "react";

import {
  AppForm,
  FormCombobox,
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useCreateWard } from "@/hooks/location/ward";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { WardFormSchema, WardSchema } from "./form/schema";

import { wardDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";
import { BookingType } from "@/types/common/commerce/booking-type";
import { SearchTag } from "@/types/searchs/search/tag.types";

// ======================================================
// PROPS
// ======================================================

interface WardCreateDialogProps extends EntityCreateDialogProps<Ward> {
  districts: District[];
  bookingTypeData: BookingType[];
  searchTagData: SearchTag[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function WardCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  districts,
  bookingTypeData,
  searchTagData,
}: WardCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createWard = useCreateWard();

  const { form } = useAppForm<WardFormSchema>({
    schema: WardSchema,
    defaultValues: wardDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...wardDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: WardFormSchema) => {
    submit({
      mutation: createWard.mutateAsync(values),

      success: "Ward created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Ward> = {
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

  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Ward"
      description="Create a new ward"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createWard.isPending}>
        <div
          className="
          space-y-6
          "
        >
          {/* ====================================================== */}
          {/* BASIC */}
          {/* ====================================================== */}

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormInput<WardFormSchema>
              name="name"
              label="Ward Name"
              placeholder="Ward name"
            />

            <FormInput<WardFormSchema>
              name="nativeName"
              label="Native Name"
              placeholder="Native name"
            />

            <FormInput<WardFormSchema>
              name="code"
              label="Code"
              placeholder="Ward code"
            />
          </div>

           <div className="grid gap-6 md:grid-cols-2">
        <FormInput<WardFormSchema>
          name="thumbnail"
          label="Thumbnail URL"
        />

        <FormInput<WardFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<WardFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<WardFormSchema>
          name="video"
          label="Video URL"
        />

        <FormInput<WardFormSchema>
          name="images.0"
          label="Image URL"
        />
      </div>
          {/* ====================================================== */}
          {/* LOCATION */}
          {/* ====================================================== */}

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormCombobox<WardFormSchema>
              portalContainer={dialogRef.current}
              name="districtId"
              label="District"
              placeholder="Select district"
              searchPlaceholder="Search district..."
              options={districts.map((district) => ({
                label: district.name,
                value: district.id,
              }))}
            />

            <FormInput<WardFormSchema>
              name="latitude"
              label="Latitude"
              type="number"
              placeholder="Latitude"
            />

            <FormInput<WardFormSchema>
              name="longitude"
              label="Longitude"
              type="number"
              placeholder="Longitude"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold">Search Metadata</h3>

              <p className="text-sm text-muted-foreground">
                Search engine configuration
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormSelect<WardFormSchema>
                name="searchPriority"
                label="Search Priority"
                placeholder="Select search priority"
                options={SEARCH_PRIORITY_OPTIONS}
              />

              <FormSwitch<WardFormSchema>
                name="searchable"
                label="Searchable"
              />

              <FormEntityMultiSelector<WardFormSchema, SearchTag>
                name="tagIds"
                label="Tags"
                placeholder="Search tags..."
                searchPlaceholder="Search tags..."
                emptyText="No tags found"
                createText="Create tag"
                options={tagOptions}
                enableCreate
                renderCreateDialog={(props) => (
                  <SearchTagCreateDialog
                    bookingTypeData={bookingTypeData}
                    {...props}
                  />
                )}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FormSwitch<WardFormSchema> name="verified" label="Verified" />
            <FormSwitch<WardFormSchema> name="active" label="Active" />
          </div>

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

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
              disabled={createWard.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createWard.isPending}>
              {createWard.isPending ? "Creating..." : "Create Ward"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
