"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFlyAirport,
  useUpdateFlyAirport,
} from "@/hooks/product-types/references/airport";

import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

import { Address } from "@/types/location/address";

import { Country } from "@/types/location/country/country";

import { City } from "@/types/location/city";

import { District } from "@/types/location/district";

import { Ward } from "@/types/location/ward";

import { FlyAirportFormSchema } from "./schema/schema";

import { flyAirportFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import AirportStep from "./step/airport.step";

import RelationStep from "./step/relation.step";

import DiversionsStep from "./step/diversions.step";

import MinimumConnectionTimeStep from "./step/minimumconnectiontime.step";

interface FlyAirportFormProps {
  initialData?: FlyAirport;

  addresses: Address[];

  countries: Country[];

  cities: City[];

  districts: District[];

  wards: Ward[];

  airportData: FlyAirport[];

  redirect?: boolean;
}

export default function FlyAirportForm({
  initialData,
  addresses,
  countries,
  cities,
  districts,
  wards,
  airportData,
  redirect = true,
}: FlyAirportFormProps) {
  const createFlyAirport = useCreateFlyAirport();

  const updateFlyAirport = useUpdateFlyAirport();

  return (
    <EntityFormWizard<FlyAirportFormSchema, FlyAirport>
      initialData={initialData}
      redirect={redirect}
      config={flyAirportFormConfig}
      createMutation={createFlyAirport}
      updateMutation={updateFlyAirport}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <AirportStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <RelationStep
          addresses={addresses}
          countries={countries}
          cities={cities}
          districts={districts}
          wards={wards}
        />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <DiversionsStep airportData={airportData} />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <MinimumConnectionTimeStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
