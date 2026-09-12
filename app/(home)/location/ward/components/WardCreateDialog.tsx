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
} from "@/components/form/entity-selector";

import { useCreateWard } from "@/hooks/location/ward";

import { WardFormSchema, WardSchema } from "./form/schema";

import { wardDefaultValues } from "./form/default-values";

import { District } from "@/types/location/district";

import { Ward } from "@/types/location/ward";

import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";

import { BookingType } from "@/types/common/commerce/booking-type";

import { SearchTag } from "@/types/searchs/search/tag.types";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createWard = useCreateWard();

  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));

  return (
    <EntityCreateFormDialog<WardFormSchema, Partial<Ward>, Ward>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createWard}
      config={{
        schema: WardSchema,
        defaultValues: wardDefaultValues,
        title: "Create Ward",
        description: "Create a new ward",
        success: "Ward created",
        submitText: "Create Ward",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Ward> => ({
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

      {/* ====================================================== */}
      {/* MEDIA */}
      {/* ====================================================== */}

      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<WardFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<WardFormSchema> name="coverImage" label="Cover Image URL" />

        <FormInput<WardFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<WardFormSchema> name="video" label="Video URL" />

        <FormInput<WardFormSchema> name="images.0" label="Image URL" />
      </div>

      {/* ====================================================== */}
      {/* LOCATION */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormCombobox<WardFormSchema>
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

      {/* ====================================================== */}
      {/* SEARCH */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSelect<WardFormSchema>
          name="searchPriority"
          label="Search Priority"
          placeholder="Select search priority"
          options={SEARCH_PRIORITY_OPTIONS}
        />

        <FormSwitch<WardFormSchema> name="searchable" label="Searchable" />

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

      {/* ====================================================== */}
      {/* STATUS */}
      {/* ====================================================== */}

      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<WardFormSchema> name="verified" label="Verified" />

        <FormSwitch<WardFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
