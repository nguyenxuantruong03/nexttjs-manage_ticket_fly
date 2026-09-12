"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { FlyAircraftFormSchema } from "../schema/aircraft.schema";
import { FlyAirline } from "@/types/product-types/references/airline/airline.types";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import FlyAirlineCreateDialog from "../../../../main/components/FlyAirlineCreateDialog";

interface BasicStepPorps {
  airlineData: FlyAirline[];
}

export default function BasicStep({ airlineData }: BasicStepPorps) {
  const airlineOptions: EntityOption<FlyAirline>[] = airlineData.map(
    (airline) => ({
      value: airline.id,
      label: airline.name,
      description: airline.description ?? undefined,
      data: airline,
    }),
  );
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly aircraft information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<FlyAircraftFormSchema, FlyAirline>
          name="airlineId"
          label="Airline"
          placeholder="Search airline..."
          searchPlaceholder="Search airline..."
          emptyText="No airline found"
          createText="Create airline"
          options={airlineOptions}
          enableCreate
          renderCreateDialog={(props) => <FlyAirlineCreateDialog {...props} />}
        />

        <FormInput<FlyAircraftFormSchema>
          name="manufacturer"
          label="Manufacturer"
          placeholder="Airbus"
        />

        <FormInput<FlyAircraftFormSchema>
          name="model"
          label="Model"
          placeholder="A320-200"
        />

        <FormInput<FlyAircraftFormSchema>
          name="code"
          label="Code"
          placeholder="A320"
        />

        <FormInput<FlyAircraftFormSchema>
          name="registrationNumber"
          label="Registration Number"
          placeholder="VN-A123"
        />
      </div>
    </FormSection>
  );
}
