"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FlyAirlineFormSchema } from "../schema/airline.schema";

export default function InterlineStep() {
  const { control } = useFormContext<FlyAirlineFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "interline",
  });

  return (
    <FormSection
      title="Interline"
      description="Interline agreements with validating airlines"
    >
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-[1fr_auto_auto_auto]"
          >
            {/* TODO: validatingAirlineId is a relation - replace with a
                Select populated from the airline list once shared */}
            <FormInput<FlyAirlineFormSchema>
              name={`interline.${index}.validatingAirlineId`}
              label="Validating Airline"
              placeholder="Airline ID"
            />

            <FormSwitch<FlyAirlineFormSchema>
              name={`interline.${index}.baggageTransfer`}
              label="Baggage Transfer"
            />

            <FormSwitch<FlyAirlineFormSchema>
              name={`interline.${index}.protectedConnection`}
              label="Protected Connection"
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
              validatingAirlineId: "",
              baggageTransfer: false,
              protectedConnection: false,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Interline Agreement
        </Button>
      </div>
    </FormSection>
  );
}