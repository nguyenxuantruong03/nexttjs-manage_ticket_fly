"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import { CityFormSchema } from "../form/schema";
import { Country } from "@/types/bookings/location/country";
import { Timezone } from "@/types/bookings/location/timezone";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import CountryCreateDialog from "../../../country/components/CountryCreateDialog";
import TimezoneCreateDialog from "../../../timezone/components/TimezoneCreateDialog";
import { Currency } from "@/types/bookings/location/currency";
import { Language } from "@/types/bookings/location/language";
import { SearchTag } from "@/types/bookings/search/tag.types";

interface LocationStepProps {
  countryData?: Country[];
  timezoneData: Timezone[];
  currencyData: Currency[];
  languageData: Language[];
  searchTagData: SearchTag[];
}

export default function LocationStep({
  countryData,
  timezoneData,
  currencyData,
  searchTagData,
  languageData,
}: LocationStepProps) {
  const countryOptions: EntityOption<Country>[] =
    countryData?.map((country) => ({
      value: country.id,
      label: country.name,
      description: country.officialName ?? undefined,
      data: country,
    })) ?? [];

  const timezoneOptions: EntityOption<Timezone>[] =
    timezoneData?.map((timezone) => ({
      value: timezone.id,
      label: `${timezone.displayName} (${timezone.name})`,
      description: timezone.utcOffset ?? undefined,
      data: timezone,
    })) ?? [];

  return (
    <FormSection title="Location" description="City geographic information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<CityFormSchema, Country>
          name="countryId"
          label="Country"
          placeholder="Search country..."
          searchPlaceholder="Search country..."
          emptyText="No country found"
          createText="Create country"
          options={countryOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <CountryCreateDialog
              currencies={currencyData}
              languages={languageData}
              timezones={timezoneData}
              tags={searchTagData}
              {...props}
            />
          )}
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

        <FormEntitySelector<CityFormSchema, Timezone>
          name="timezoneId"
          label="Timezone"
          placeholder="Search timezone..."
          searchPlaceholder="Search timezone..."
          emptyText="No timezone found"
          createText="Create timezone"
          options={timezoneOptions}
          enableCreate
          renderCreateDialog={(props) => <TimezoneCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
