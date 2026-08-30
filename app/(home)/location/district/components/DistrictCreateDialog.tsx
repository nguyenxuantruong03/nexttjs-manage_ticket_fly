"use client";

import {
  FormCombobox,
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import { useCreateDistrict } from "@/hooks/location/district";

import { DistrictFormSchema, DistrictSchema } from "./form/schema";

import { districtDefaultValues } from "./form/default-values";

import { City } from "@/types/location/city";

import { District } from "@/types/location/district";

import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";

import { BookingType } from "@/types/common/commerce/booking-type";

import { SearchTag } from "@/types/searchs/search/tag.types";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createDistrict = useCreateDistrict();

  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));

  return (
    <EntityCreateFormDialog<DistrictFormSchema, District>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createDistrict}
      config={{
        schema: DistrictSchema,
        defaultValues: districtDefaultValues,
        title: "Create District",
        description: "Create a new district",
        success: "District created",
        submitText: "Create District",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<District> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      {/* ====================================================== */}
      {/* BASIC */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
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

      {/* ====================================================== */}
      {/* STATUS */}
      {/* ====================================================== */}

      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<DistrictFormSchema> name="verified" label="Verified" />

        <FormSwitch<DistrictFormSchema> name="active" label="Active" />
      </div>

      {/* ====================================================== */}
      {/* SEARCH */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSelect<DistrictFormSchema>
          name="searchPriority"
          label="Search Priority"
          placeholder="Select search priority"
          options={SEARCH_PRIORITY_OPTIONS}
        />

        <FormSwitch<DistrictFormSchema> name="searchable" label="Searchable" />

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

      {/* ====================================================== */}
      {/* MEDIA */}
      {/* ====================================================== */}

      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<DistrictFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<DistrictFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<DistrictFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<DistrictFormSchema> name="video" label="Video URL" />

        <FormInput<DistrictFormSchema> name="images.0" label="Image URL" />
      </div>
    </EntityCreateFormDialog>
  );
}
