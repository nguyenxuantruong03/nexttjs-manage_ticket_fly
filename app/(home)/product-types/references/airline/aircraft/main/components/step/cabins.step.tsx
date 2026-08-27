"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

function CabinSeats({ cabinIndex }: { cabinIndex: number }) {
  const { control } = useFormContext<FlyAircraftFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `cabins.${cabinIndex}.seats`,
  });

  return (
    <div className="space-y-3 pl-4">
      {fields.map((field, seatIndex) => (
        <div
          key={field.id}
          className="grid items-end gap-3 rounded-md border p-3 md:grid-cols-[1fr_1fr_1fr_1fr_auto_auto_auto]"
        >
          {/* TODO: typeId is a relation - replace with a Select
              populated from the seat type list once shared */}
          <FormInput<FlyAircraftFormSchema>
            name={`cabins.${cabinIndex}.seats.${seatIndex}.typeId`}
            label="Seat Type"
            placeholder="Standard"
          />

          <FormInput<FlyAircraftFormSchema>
            name={`cabins.${cabinIndex}.seats.${seatIndex}.seatNumber`}
            label="Seat Number"
            placeholder="12A"
          />

          <FormInput<FlyAircraftFormSchema>
            name={`cabins.${cabinIndex}.seats.${seatIndex}.row`}
            label="Row"
            type="number"
            placeholder="12"
          />

          <FormInput<FlyAircraftFormSchema>
            name={`cabins.${cabinIndex}.seats.${seatIndex}.column`}
            label="Column"
            placeholder="A"
          />

          <FormSwitch<FlyAircraftFormSchema>
            name={`cabins.${cabinIndex}.seats.${seatIndex}.extraLegroom`}
            label="Extra Legroom"
          />

          <FormSwitch<FlyAircraftFormSchema>
            name={`cabins.${cabinIndex}.seats.${seatIndex}.available`}
            label="Available"
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => remove(seatIndex)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() =>
          append({
            typeId: "",
            seatNumber: "",
            row: null,
            column: null,
            extraLegroom: false,
            emergencyExit: false,
            nearWindow: null,
            nearAisle: null,
            nearWing: null,
            available: true,
          })
        }
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Seat
      </Button>
    </div>
  );
}

export default function CabinsStep() {
  const { control } = useFormContext<FlyAircraftFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cabins",
  });

  return (
    <FormSection
      title="Cabins & Seats"
      description="Cabin classes and seat layout"
    >
      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-4 rounded-lg border p-4">
            <div className="grid items-end gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
              {/* TODO: cabinClassId is a relation - replace with a Select
                  populated from the cabin class list once shared */}
              <FormInput<FlyAircraftFormSchema>
                name={`cabins.${index}.cabinClassId`}
                label="Cabin Class"
                placeholder="Economy"
              />

              <FormInput<FlyAircraftFormSchema>
                name={`cabins.${index}.name`}
                label="Name"
                placeholder="Main Cabin"
              />

              <FormInput<FlyAircraftFormSchema>
                name={`cabins.${index}.rows`}
                label="Rows"
                type="number"
                placeholder="24"
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

            <FormInput<FlyAircraftFormSchema>
              name={`cabins.${index}.totalSeats`}
              label="Total Seats"
              type="number"
              placeholder="144"
            />

            <CabinSeats cabinIndex={index} />
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              cabinClassId: "",
              name: "",
              rows: null,
              totalSeats: 0,
              seats: [],
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Cabin
        </Button>
      </div>
    </FormSection>
  );
}
