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

import { useCreateDistrict } from "@/hooks/location/district";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { DistrictFormSchema, DistrictSchema } from "./form/schema";

import { districtDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";
import { BookingType } from "@/types/common/commerce/booking-type";
import { SearchTag } from "@/types/searchs/search/tag.types";

// ======================================================
// PROPS
// ======================================================

interface DistrictCreateDialogProps extends EntityCreateDialogProps<District> {
  cities: City[];
  bookingTypeData: BookingType[];
  searchTagData: SearchTag[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function DistrictCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  cities,
  bookingTypeData,
  searchTagData,
}: DistrictCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createDistrict = useCreateDistrict();

  const { form } = useAppForm<DistrictFormSchema>({
    schema: DistrictSchema,
    defaultValues: districtDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...districtDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: DistrictFormSchema) => {
    submit({
      mutation: createDistrict.mutateAsync(values),

      success: "District created",

      onSuccess: (response) => {
        const result: EntityCreateResult<District> = {
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
      title="Create District"
      description="Create a new district"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createDistrict.isPending}
      >
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
            <FormInput<DistrictFormSchema>
              name="name"
              label="District Name"
              placeholder="District name"
            />

            <FormInput<DistrictFormSchema>
              name="nativeName"
              label="Native Name"
              placeholder="Native name"
            />

            <FormInput<DistrictFormSchema>
              name="code"
              label="Code"
              placeholder="District code"
            />
            <FormCombobox<DistrictFormSchema>
              portalContainer={dialogRef.current}
              name="cityId"
              label="City"
              placeholder="Select city"
              searchPlaceholder="Search city..."
              options={cities.map((city) => ({
                label: city.name,
                value: city.id,
              }))}
            />

            <FormInput<DistrictFormSchema>
              name="latitude"
              label="Latitude"
              type="number"
              placeholder="Latitude"
            />

            <FormInput<DistrictFormSchema>
              name="longitude"
              label="Longitude"
              type="number"
              placeholder="Longitude"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FormSwitch<DistrictFormSchema> name="verified" label="Verified" />
            <FormSwitch<DistrictFormSchema> name="active" label="Active" />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold">Search Metadata</h3>

              <p className="text-sm text-muted-foreground">
                Search engine configuration
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormSelect<DistrictFormSchema>
                name="searchPriority"
                label="Search Priority"
                placeholder="Select search priority"
                options={SEARCH_PRIORITY_OPTIONS}
              />

              <FormSwitch<DistrictFormSchema>
                name="searchable"
                label="Searchable"
              />

              <FormEntityMultiSelector<DistrictFormSchema, SearchTag>
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
        <FormInput<DistrictFormSchema>
          name="thumbnail"
          label="Thumbnail URL"
        />

        <FormInput<DistrictFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<DistrictFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<DistrictFormSchema>
          name="video"
          label="Video URL"
        />

        <FormInput<DistrictFormSchema>
          name="images.0"
          label="Image URL"
        />
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
              disabled={createDistrict.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createDistrict.isPending}>
              {createDistrict.isPending ? "Creating..." : "Create District"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
