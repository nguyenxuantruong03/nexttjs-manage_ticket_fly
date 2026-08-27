"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FlyAirlineFormSchema } from "../schema/airline.schema";

export default function WifiPackageStep() {
  const { control } = useFormContext<FlyAirlineFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "wifiPackage",
  });

  return (
    <FormSection
      title="Wifi Packages"
      description="In-flight wifi packages offered by this airline"
    >
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-[1fr_1fr_1fr_1fr_auto]"
          >
            <FormInput<FlyAirlineFormSchema>
              name={`wifiPackage.${index}.name`}
              label="Name"
              placeholder="Basic 100MB"
            />

            <FormInput<FlyAirlineFormSchema>
              name={`wifiPackage.${index}.dataLimitMb`}
              label="Data Limit (MB)"
              type="number"
              placeholder="100"
            />

            <FormInput<FlyAirlineFormSchema>
              name={`wifiPackage.${index}.durationMinutes`}
              label="Duration (minutes)"
              type="number"
              placeholder="60"
            />

            <FormInput<FlyAirlineFormSchema>
              name={`wifiPackage.${index}.amount`}
              label="Amount"
              type="number"
              placeholder="50000"
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
              // airlineId is required (non-nullable) in the schema; it's
              // set by the backend from the parent airline on submit
              airlineId: "",
              name: "",
              dataLimitMb: undefined,
              durationMinutes: undefined,
              amount: 0,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Wifi Package
        </Button>
      </div>
    </FormSection>
  );
}
