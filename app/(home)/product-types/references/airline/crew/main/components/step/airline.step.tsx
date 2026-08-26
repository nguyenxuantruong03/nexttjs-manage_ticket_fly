"use client";

import FormSection from "@/components/form/FormSection";

import { FlyCrewFormSchema } from "../form/schema";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import FlyAirlineCreateDialog from "../../../../main/components/FlyAirlineCreateDialog";

interface AirlineStepProps {
  airlineData: FlyAirline[];
}

export default function AirlineStep({ airlineData }: AirlineStepProps) {
  const airlineEntityOptions: EntityOption<FlyAirline>[] = airlineData.map(
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
      description="Select the airline for this crew member"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<FlyCrewFormSchema, FlyAirline>
          name="airlineId"
          label="Airline"
          placeholder="Search airline..."
          searchPlaceholder="Search airline..."
          emptyText="No airline found"
          createText="Create airline"
          options={airlineEntityOptions}
          enableCreate
          renderCreateDialog={(props) => <FlyAirlineCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
