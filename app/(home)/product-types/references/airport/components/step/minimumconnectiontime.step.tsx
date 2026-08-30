"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { FlyAirportFormSchema } from "../schema/schema";

export default function MinimumConnectionTimeStep() {
  const { control } = useFormContext<FlyAirportFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "minimumConnectionTime",
  });

  return (
    <FormSection
      title="Minimum Connection Time"
      description="Minimum time required to connect through this airport"
    >
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-[1fr_1fr_auto]"
          >
            <FormInput<FlyAirportFormSchema>
              name={`minimumConnectionTime.${index}.domesticMinutes`}
              label="Domestic (minutes)"
              type="number"
              placeholder="45"
            />

            <FormInput<FlyAirportFormSchema>
              name={`minimumConnectionTime.${index}.internationalMinutes`}
              label="International (minutes)"
              type="number"
              placeholder="90"
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
              // airportId refers to this same airport and is set by the
              // backend from the parent record on submit - the schema
              // still requires the key to be present
              airportId: "",
              domesticMinutes: 0,
              internationalMinutes: 0,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Connection Time Rule
        </Button>
      </div>
    </FormSection>
  );
}
