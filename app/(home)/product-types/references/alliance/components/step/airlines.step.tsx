"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FlyAllianceFormSchema } from "../schema/alliance.schema";

export default function AirlinesStep() {
  const { control } = useFormContext<FlyAllianceFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "airlines",
  });

  return (
    <FormSection
      title="Member Airlines"
      description="Airlines that belong to this alliance"
    >
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-[1fr_1fr_auto]"
          >
            {/* TODO: airlineId is a relation - replace with a Select
                populated from the airline list once shared */}
            <FormInput<FlyAllianceFormSchema>
              name={`airlines.${index}.airlineId`}
              label="Airline"
              placeholder="Airline ID"
            />

            <FormInput<FlyAllianceFormSchema>
              name={`airlines.${index}.joinedAt`}
              label="Joined At"
              type="date"
              placeholder="YYYY-MM-DD"
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
              airlineId: "",
              joinedAt: undefined,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Airline
        </Button>
      </div>
    </FormSection>
  );
}