"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FlyAirlineFormSchema } from "../schema/airline.schema";

// ======================================================
// SHARED CODESHARE FIELD ARRAY
// ======================================================

type CodeshareFieldName = "operatingCodeshares" | "marketingCodeshares";

interface CodeshareStepProps {
  name: CodeshareFieldName;
  title: string;
  description: string;
}

function CodeshareStep({ name, title, description }: CodeshareStepProps) {
  const { control } = useFormContext<FlyAirlineFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <FormSection title={title} description={description}>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-4 rounded-lg border p-4">
            {/* TODO: tripId is a relation - replace with a Select
                populated from the trip list once shared */}
            <FormInput<FlyAirlineFormSchema>
              name={`${name}.${index}.tripId`}
              label="Trip"
              placeholder="Trip ID"
            />

            <div className="grid items-end gap-4 md:grid-cols-2">
              {/* TODO: marketingAirlineId is a relation - replace with a
                  Select populated from the airline list once shared */}
              <FormInput<FlyAirlineFormSchema>
                name={`${name}.${index}.marketingAirlineId`}
                label="Marketing Airline"
                placeholder="Airline ID"
              />

              <FormInput<FlyAirlineFormSchema>
                name={`${name}.${index}.marketingFlightNumber`}
                label="Marketing Flight Number"
                placeholder="VN123"
              />

              {/* TODO: operatingAirlineId is a relation - replace with a
                  Select populated from the airline list once shared */}
              <FormInput<FlyAirlineFormSchema>
                name={`${name}.${index}.operatingAirlineId`}
                label="Operating Airline"
                placeholder="Airline ID"
              />

              <FormInput<FlyAirlineFormSchema>
                name={`${name}.${index}.operatingFlightNumber`}
                label="Operating Flight Number"
                placeholder="VN456"
              />
            </div>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => remove(index)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remove Codeshare
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              tripId: "",
              marketingAirlineId: "",
              marketingFlightNumber: "",
              operatingAirlineId: "",
              operatingFlightNumber: "",
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Codeshare
        </Button>
      </div>
    </FormSection>
  );
}

// ======================================================
// OPERATING CODESHARES
// ======================================================

export function OperatingCodeshareStep() {
  return (
    <CodeshareStep
      name="operatingCodeshares"
      title="Operating Codeshares"
      description="Flights this airline operates on behalf of other airlines"
    />
  );
}

// ======================================================
// MARKETING CODESHARES
// ======================================================

export function MarketingCodeshareStep() {
  return (
    <CodeshareStep
      name="marketingCodeshares"
      title="Marketing Codeshares"
      description="Flights this airline markets under its own code"
    />
  );
}
