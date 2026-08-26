"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useCreateCountry } from "@/hooks/location/country";

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

import { CountryFormSchema, CountrySchema } from "./form/schema";

import { countryDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import { Country } from "@/types/location/country/country";

import { Currency } from "@/types/location/currency";

import { Language } from "@/types/location/language";

import { Timezone } from "@/types/location/timezone";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { Continent } from "@/types/location/country/continent.type";

import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import CurrencyCreateDialog from "../../currency/components/CurrencyCreateDialog";
import ContinentCreateDialog from "../../continent/components/ContinentCreateDialog";
import TimezoneCreateDialog from "../../timezone/components/TimezoneCreateDialog";
import LanguageCreateDialog from "../../language/components/LanguageCreateDialog";

// ======================================================
// PROPS
// ======================================================

interface CountryCreateDialogProps extends EntityCreateDialogProps<Country> {
  currencies: Currency[];
  languages: Language[];
  timezones: Timezone[];
  continents: Continent[];
  tags: SearchTag[];
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function CountryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  currencies,
  languages,
  timezones,
  continents,
  tags,
  bookingTypeData,
}: CountryCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createCountry = useCreateCountry();

  const { form } = useAppForm<CountryFormSchema>({
    schema: CountrySchema,
    defaultValues: countryDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...countryDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // OPTIONS
  // ======================================================

  const currencyOptions: EntityOption<Currency>[] = currencies.map(
    (currency) => ({
      value: currency.id,
      label: `${currency.flagEmoji} ${currency.name} (${currency.code}) ${currency.symbol}`,
      description: currency.code,
      data: currency,
    }),
  );

  const timezoneOptions: EntityOption<Timezone>[] = timezones.map(
    (timezone) => ({
      value: timezone.id,
      label: `${timezone.displayName} (${timezone.name})`,
      description: timezone.name,
      data: timezone,
    }),
  );

  const languageOptions: EntityOption<Language>[] = languages.map(
    (language) => ({
      value: language.id,
      label: language.name,
      description: language.code ?? undefined,
      data: language,
    }),
  );

  const continentOptions: EntityOption<Continent>[] = continents.map(
    (continent) => ({
      value: continent.id,
      label: continent.name,
      description: continent.code ?? undefined,
      data: continent,
    }),
  );

  const tagOptions: EntityOption<SearchTag>[] = tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: CountryFormSchema) => {
    submit({
      mutation: createCountry.mutateAsync(values),

      success: "Country created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Country> = {
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
      title="Create Country"
      description="Create a new country"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createCountry.isPending}
      >
        <div className="space-y-6">
          {/* ====================================================== */}
          {/* BASIC */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CountryFormSchema>
              name="name"
              label="Country Name"
              placeholder="Country name"
            />

            <FormInput<CountryFormSchema>
              name="officialName"
              label="Official Name"
              placeholder="Official name"
            />

            <FormInput<CountryFormSchema>
              name="code"
              label="Country Code"
              placeholder="VN"
            />

            <FormInput<CountryFormSchema>
              name="iso2"
              label="ISO2"
              placeholder="VN"
            />

            <FormInput<CountryFormSchema>
              name="iso3"
              label="ISO3"
              placeholder="VNM"
            />

            <FormInput<CountryFormSchema>
              name="phoneCode"
              label="Phone Code"
              placeholder="+84"
            />

            <FormInput<CountryFormSchema>
              name="capital"
              label="Capital"
              placeholder="Capital city"
            />
          </div>

          {/* ====================================================== */}
          {/* LOCATION */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormEntitySelector<CountryFormSchema, Currency>
              name="currencyId"
              label="Currency"
              placeholder="Search currency..."
              searchPlaceholder="Search currency..."
              emptyText="No currency found"
              createText="Create currency"
              options={currencyOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <CurrencyCreateDialog {...props} />
              )}
            />

            <FormEntitySelector<CountryFormSchema, Continent>
              name="continentId"
              label="Continent"
              placeholder="Search continent..."
              searchPlaceholder="Search continent..."
              emptyText="No continent found"
              createText="Create continent"
              options={continentOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <ContinentCreateDialog {...props} />
              )}
            />

            <FormEntitySelector<CountryFormSchema, Timezone>
              name="timezoneId"
              label="Timezone"
              placeholder="Search timezone..."
              searchPlaceholder="Search timezone..."
              emptyText="No timezone found"
              createText="Create timezone"
              options={timezoneOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <TimezoneCreateDialog {...props} />
              )}
            />

            <FormEntityMultiSelector<CountryFormSchema, Language>
              name="languageIds"
              label="Languages"
              placeholder="Search language..."
              searchPlaceholder="Search language..."
              emptyText="No language found"
              createText="Create language"
              options={languageOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <LanguageCreateDialog {...props} />
              )}
            />
          </div>

          {/* ====================================================== */}
          {/* TAGS */}
          {/* ====================================================== */}

          <div className="grid gap-4">
            <FormEntityMultiSelector<CountryFormSchema, SearchTag>
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

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CountryFormSchema>
              name="flag"
              label="Flag"
              placeholder="Flag URL"
            />

            <FormInput<CountryFormSchema>
              name="thumbnail"
              label="Thumbnail"
              placeholder="Thumbnail URL"
            />

            <FormInput<CountryFormSchema>
              name="coverImage"
              label="Cover Image"
              placeholder="Cover Image URL"
            />

            <FormInput<CountryFormSchema>
              name="bannerImage"
              label="Banner Image"
              placeholder="Banner Image URL"
            />

            <FormInput<CountryFormSchema>
              name="video"
              label="Video"
              placeholder="Video URL"
            />

            <FormInput<CountryFormSchema>
              name="images.0"
              label="Image"
              placeholder="Image URL"
            />
          </div>

          {/* ====================================================== */}
          {/* SEARCH */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CountryFormSchema>
              name="searchPriority"
              label="Search Priority"
              type="number"
              placeholder="0"
            />
          </div>

          {/* ====================================================== */}
          {/* STATUS */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-3">
            <FormSwitch<CountryFormSchema> name="featured" label="Featured" />

            <FormSwitch<CountryFormSchema>
              name="searchable"
              label="Searchable"
            />

            <FormSwitch<CountryFormSchema> name="active" label="Active" />
          </div>

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createCountry.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createCountry.isPending}>
              {createCountry.isPending ? "Creating..." : "Create Country"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
