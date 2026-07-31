"use client";

import * as React from "react";

import {
  AppForm,
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { Country } from "@/types/bookings/location/country";
import { Currency } from "@/types/bookings/location/currency";
import { Language } from "@/types/bookings/location/language";
import { Timezone } from "@/types/bookings/location/timezone";
import { Continent } from "@/types/bookings/location/city";

import { useCreateCountry } from "@/hooks/location/country";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { CountryFormSchema, CountrySchema } from "./form/schema";

import { countryDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { SearchTag } from "@/types/bookings/search/tag.types";

// ======================================================
// PROPS
// ======================================================

interface CountryCreateDialogProps extends EntityCreateDialogProps<Country> {
  currencies: Currency[];
  languages: Language[];
  timezones: Timezone[];
  tags: SearchTag[];
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
  tags,
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
            <FormCombobox<CountryFormSchema>
              portalContainer={dialogRef.current}
              name="continent"
              label="Continent"
              placeholder="Select continent"
              searchPlaceholder="Search continent..."
              options={Object.values(Continent).map((continent) => ({
                label: continent,
                value: continent,
              }))}
            />

            <FormCombobox<CountryFormSchema>
              portalContainer={dialogRef.current}
              name="currencyId"
              label="Currency"
              placeholder="Select currency"
              searchPlaceholder="Search currency..."
              options={currencies.map((currency) => ({
                label: currency.name,
                value: currency.id,
              }))}
            />

            <FormCombobox<CountryFormSchema>
              portalContainer={dialogRef.current}
              name="timezoneId"
              label="Timezone"
              placeholder="Select timezone"
              searchPlaceholder="Search timezone..."
              options={timezones.map((timezone) => ({
                label: timezone.name,
                value: timezone.id,
              }))}
            />
          </div>

          {/* ====================================================== */}
          {/* LANGUAGE */}
          {/* ====================================================== */}

          <div className="grid gap-4">
            <FormCombobox<CountryFormSchema>
              portalContainer={dialogRef.current}
              name="languageIds"
              label="Languages"
              placeholder="Select languages"
              searchPlaceholder="Search languages..."
              options={languages.map((language) => ({
                label: language.name,
                value: language.id,
              }))}
            />
          </div>

          {/* ====================================================== */}
          {/* TAGS */}
          {/* ====================================================== */}

          <div className="grid gap-4">
            <FormCombobox<CountryFormSchema>
              portalContainer={dialogRef.current}
              name="tagIds"
              label="Tags"
              placeholder="Select tags"
              searchPlaceholder="Search tags..."
              options={tags.map((tag) => ({
                label: tag.name,
                value: tag.id,
              }))}
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
              placeholder="Cover image URL"
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
              disabled={createCountry.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
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
