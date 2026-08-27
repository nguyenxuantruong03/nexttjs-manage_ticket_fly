"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

export default function FacilitiesStep() {
  const { control } = useFormContext<FlyAircraftFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "facilities",
  });

  return (
    <FormSection
      title="Facilities"
      description="Facilities available on the aircraft"
    >
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-[1fr_auto_auto]"
          >
            {/* TODO: facilityId is a relation - replace with a Select
                populated from the facility list API once shared */}
            <FormInput<FlyAircraftFormSchema>
              name={`facilities.${index}.facilityId`}
              label="Facility"
              placeholder="Wi-Fi"
            />

            <FormSwitch<FlyAircraftFormSchema>
              name={`facilities.${index}.active`}
              label="Active"
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
          onClick={() => append({ facilityId: "", active: true })}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Facility
        </Button>
      </div>
    </FormSection>
  );
}
