"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { FlyAirportFormSchema } from "../schema/schema";

import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

interface DiversionsStepProps {
  airportData: FlyAirport[];
}

export default function DiversionsStep({ airportData }: DiversionsStepProps) {
  const { control } = useFormContext<FlyAirportFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "diversions",
  });

  const airportEntityOptions: EntityOption<FlyAirport>[] = airportData.map(
    (airport) => ({
      value: airport.id,
      label: airport.name,
      description: airport.iataCode,
      data: airport,
    }),
  );

  return (
    <FormSection
      title="Diversions"
      description="Alternate airports this airport can divert flights to"
    >
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-[1fr_1fr_auto]"
          >
            <FormEntitySelector<FlyAirportFormSchema, FlyAirport>
              name={`diversions.${index}.divertedAirportId`}
              label="Diverted Airport"
              placeholder="Search airport..."
              searchPlaceholder="Search airport..."
              emptyText="No airport found"
              options={airportEntityOptions}
            />

            <FormInput<FlyAirportFormSchema>
              name={`diversions.${index}.reason`}
              label="Reason"
              placeholder="Weather, maintenance..."
            />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              divertedAirportId: "",
              reason: "",
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Diversion
        </Button>
      </div>
    </FormSection>
  );
}
