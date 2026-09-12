"use client";

import FormSection from "@/components/form/FormSection";
import { FlyAirline } from "@/types/product-types/references/airline/airline.types";
import { EntityOption } from "@/components/form/entity-selector";
import FlyAirlineCreateDialog from "@/app/(home)/product-types/references/airline/main/components/FlyAirlineCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { FlyFormSchema } from "../form/schema/core/fly.schema";

interface AirlineStepProps {
  airlineData: FlyAirline[];
}

export default function AirlineStep({ airlineData }: AirlineStepProps) {
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
      title="Airline"
      description="Select the airline for this flight"
    >
      <FormEntitySelector<FlyFormSchema, FlyAirline>
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
    </FormSection>
  );
}
