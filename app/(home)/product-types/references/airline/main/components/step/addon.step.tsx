"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FlyAirlineFormSchema } from "../schema/airline.schema";

export default function AddonStep() {
  const { control } = useFormContext<FlyAirlineFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addon",
  });

  return (
    <FormSection
      title="Addons"
      description="Passenger addons offered by this airline"
    >
      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-4 rounded-lg border p-4">
            <div className="grid items-end gap-4 md:grid-cols-3">
              {/* TODO: typeId is a relation - replace with a Select
                  populated from the addon type list once shared */}
              <FormInput<FlyAirlineFormSchema>
                name={`addon.${index}.typeId`}
                label="Addon Type"
                placeholder="Baggage, Meal..."
              />

              <FormInput<FlyAirlineFormSchema>
                name={`addon.${index}.name`}
                label="Name"
                placeholder="Extra Baggage 20kg"
              />

              <FormInput<FlyAirlineFormSchema>
                name={`addon.${index}.provider`}
                label="Provider"
                placeholder="Airline / Partner"
              />

              <FormInput<FlyAirlineFormSchema>
                name={`addon.${index}.amount`}
                label="Amount"
                type="number"
                placeholder="200000"
              />

              <FormInput<FlyAirlineFormSchema>
                name={`addon.${index}.image`}
                label="Image URL"
                placeholder="https://..."
              />

              <FormSwitch<FlyAirlineFormSchema>
                name={`addon.${index}.active`}
                label="Active"
              />
            </div>

            <FormInput<FlyAirlineFormSchema>
              name={`addon.${index}.description`}
              label="Description"
              placeholder="Describe this addon"
            />

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => remove(index)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remove Addon
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              // airlineId is set by the backend from the parent airline,
              // but the schema requires the key to be present (nullable)
              airlineId: null,
              typeId: "",
              name: "",
              description: "",
              provider: "",
              image: "",
              amount: 0,
              active: true,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Addon
        </Button>
      </div>
    </FormSection>
  );
}
