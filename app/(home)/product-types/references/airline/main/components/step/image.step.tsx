"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FlyAirlineFormSchema } from "../schema/airline.schema";

export default function ImagesStep() {
  const { control } = useFormContext<FlyAirlineFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  return (
    <FormSection title="Images" description="Airline images and gallery">
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-[1fr_1fr_auto_auto_auto]"
          >
            {/* TODO: mediaId should come from the media library picker
                (upload/select component) once shared */}
            <FormInput<FlyAirlineFormSchema>
              name={`images.${index}.mediaId`}
              label="Media"
              placeholder="Media ID"
            />

            {/* TODO: categoryId is a relation - replace with a Select
                populated from the image category list once shared */}
            <FormInput<FlyAirlineFormSchema>
              name={`images.${index}.categoryId`}
              label="Category"
              placeholder="Logo, Banner..."
            />

            <FormInput<FlyAirlineFormSchema>
              name={`images.${index}.sortOrder`}
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<FlyAirlineFormSchema>
              name={`images.${index}.isPrimary`}
              label="Primary"
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
              mediaId: "",
              categoryId: "",
              isPrimary: false,
              sortOrder: fields.length,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Image
        </Button>
      </div>
    </FormSection>
  );
}
