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

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateCity } from "@/hooks/location/city";

import { City } from "@/types/location/city";

import { Country } from "@/types/location/country/country";

import { Timezone } from "@/types/location/timezone";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { BookingType } from "@/types/common/commerce/booking-type";

import { CityFormSchema, CitySchema } from "./form/schema";

import { cityDefaultValues } from "./form/default-values";

import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";

import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

// ======================================================
// PROPS
// ======================================================

interface CityCreateDialogProps extends EntityCreateDialogProps<City> {
  countries: Country[];
  timezones: Timezone[];
  searchTagData: SearchTag[];
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function CityCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  countries,
  timezones = [],
  searchTagData = [],
  bookingTypeData = [],
}: CityCreateDialogProps) {
  const createCity = useCreateCity();

  const timezoneOptions: EntityOption<Timezone>[] = timezones.map(
    (timezone) => ({
      value: timezone.id,
      label: `${timezone.displayName} (${timezone.name})`,
      description: timezone.utcOffset ?? undefined,
      data: timezone,
    }),
  );

  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));

  return (
    <EntityCreateFormDialog<CityFormSchema, City>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createCity}
      config={{
        schema: CitySchema,
        defaultValues: cityDefaultValues,
        title: "Create City",
        description: "Create a new city",
        success: "City created",
        submitText: "Create City",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<City> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      {/* ==================================================
          BASIC
      ================================================== */}

      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">Basic Information</h3>

          <p className="text-sm text-muted-foreground">
            Basic city information
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<CityFormSchema>
            name="name"
            label="City Name"
            placeholder="Ho Chi Minh City"
          />

          <FormInput<CityFormSchema>
            name="nativeName"
            label="Native Name"
            placeholder="Thành phố Hồ Chí Minh"
          />

          <FormInput<CityFormSchema>
            name="code"
            label="City Code"
            placeholder="SGN"
          />

          <FormInput<CityFormSchema>
            name="iataCode"
            label="IATA Code"
            placeholder="SGN"
          />

          <FormInput<CityFormSchema>
            name="subtitle"
            label="Subtitle"
            placeholder="Vietnam's largest city"
          />

          <FormInput<CityFormSchema>
            name="shortDescription"
            label="Short Description"
            placeholder="Short city description"
          />

          <FormInput<CityFormSchema>
            name="description"
            label="Description"
            placeholder="Full description"
          />
        </div>
      </div>

      {/* ==================================================
          LOCATION
      ================================================== */}

      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">Location</h3>

          <p className="text-sm text-muted-foreground">
            City geographic information
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormCombobox<CityFormSchema>
            name="countryId"
            label="Country"
            placeholder="Select country"
            searchPlaceholder="Search country..."
            options={countries.map((country) => ({
              label: country.name,
              value: country.id,
            }))}
          />

          <FormInput<CityFormSchema>
            name="administrativeArea"
            label="Administrative Area"
            placeholder="Ho Chi Minh"
          />

          <FormInput<CityFormSchema>
            name="region"
            label="Region"
            placeholder="South Vietnam"
          />

          <FormSwitch<CityFormSchema> name="isCapital" label="Capital City" />

          <FormInput<CityFormSchema>
            name="latitude"
            label="Latitude"
            type="number"
          />

          <FormInput<CityFormSchema>
            name="longitude"
            label="Longitude"
            type="number"
          />

          <FormInput<CityFormSchema>
            name="elevation"
            label="Elevation"
            type="number"
          />

          <FormCombobox<CityFormSchema>
            name="timezoneId"
            label="Timezone"
            placeholder="Search timezone..."
            searchPlaceholder="Search timezone..."
            options={timezoneOptions.map((timezone) => ({
              label: timezone.label,
              value: timezone.value,
            }))}
          />
        </div>
      </div>

      {/* ==================================================
          MEDIA
      ================================================== */}

      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">Media</h3>

          <p className="text-sm text-muted-foreground">
            City images and videos
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<CityFormSchema>
            name="thumbnail"
            label="Thumbnail URL"
            placeholder="https://..."
          />

          <FormInput<CityFormSchema>
            name="coverImage"
            label="Cover Image URL"
            placeholder="https://..."
          />

          <FormInput<CityFormSchema>
            name="bannerImage"
            label="Banner Image URL"
            placeholder="https://..."
          />

          <FormInput<CityFormSchema>
            name="video"
            label="Video URL"
            placeholder="https://..."
          />

          <FormInput<CityFormSchema>
            name="images.0"
            label="Image URL"
            placeholder="https://..."
          />
        </div>
      </div>

      {/* ==================================================
          SEARCH
      ================================================== */}

      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">Search Metadata</h3>

          <p className="text-sm text-muted-foreground">
            Search engine configuration
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormSelect<CityFormSchema>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select search priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />

          <FormInput<CityFormSchema>
            name="displayOrder"
            label="Display Order"
            type="number"
          />

          <FormInput<CityFormSchema>
            name="popularityScore"
            label="Popularity Score"
            type="number"
          />

          <FormSwitch<CityFormSchema> name="featured" label="Featured" />

          <FormSwitch<CityFormSchema> name="popular" label="Popular" />

          <FormSwitch<CityFormSchema> name="searchable" label="Searchable" />

          <FormEntityMultiSelector<CityFormSchema, SearchTag>
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

      {/* ==================================================
          STATUS
      ================================================== */}

      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">Status</h3>

          <p className="text-sm text-muted-foreground">
            City visibility settings
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<CityFormSchema> name="verified" label="Verified" />

          <FormSwitch<CityFormSchema> name="active" label="Active" />
        </div>
      </div>

      {/* ==================================================
          TRAVEL
      ================================================== */}

      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">Travel Information</h3>

          <p className="text-sm text-muted-foreground">Best season to visit</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<CityFormSchema>
            name="bestMonths.0"
            label="Best Month"
            placeholder="December"
          />

          <FormInput<CityFormSchema>
            name="rainyMonths.0"
            label="Rainy Month"
            placeholder="September"
          />
        </div>
      </div>
    </EntityCreateFormDialog>
  );
}
