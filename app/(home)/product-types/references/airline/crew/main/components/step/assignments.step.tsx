"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { useFieldArray, useFormContext } from "react-hook-form";

import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

import { EntityOption } from "@/components/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import FlyCrewDutyCreateDialog from "../../../crew-duty/components/FlyCrewDutyCreateDialog";
import { FlyCrewFormSchema } from "../schema/crew.schema";

interface AssignmentsStepProps {
  dutyData: FlyCrewDuty[];
}

export default function AssignmentsStep({ dutyData }: AssignmentsStepProps) {
  const { control } = useFormContext<FlyCrewFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "assignments",
  });

  // ======================================================
  // DUTY MASTER
  // ======================================================

  const dutyEntityOptions: EntityOption<FlyCrewDuty>[] = dutyData.map(
    (duty) => ({
      value: duty.id,
      label: duty.name,
      description: duty.description ?? undefined,
      data: duty,
    }),
  );

  return (
    <FormSection title="Assignments" description="Manage crew trip assignments">
      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="grid gap-6 md:grid-cols-3">
            {/* ======================================================
                TRIP ID
            ====================================================== */}

            <FormInput<FlyCrewFormSchema>
              name={`assignments.${index}.tripId`}
              label="Trip ID"
              placeholder="Enter trip ID"
            />

            {/* ======================================================
                INVENTORY ID
            ====================================================== */}

            <FormInput<FlyCrewFormSchema>
              name={`assignments.${index}.inventoryId`}
              label="Inventory ID"
              placeholder="Enter inventory ID"
            />

            {/* ======================================================
                DUTY MASTER
            ====================================================== */}

            <FormEntitySelector<FlyCrewFormSchema, FlyCrewDuty>
              name={`assignments.${index}.dutyId`}
              label="Duty"
              placeholder="Search duty..."
              searchPlaceholder="Search duty..."
              emptyText="No duty found"
              options={dutyEntityOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <FlyCrewDutyCreateDialog {...props} />
              )}
            />

            {/* ======================================================
                REMOVE
            ====================================================== */}

            <div className="md:col-span-3">
              <button
                type="button"
                onClick={() => remove(index)}
                className="rounded-md border px-4 py-2 text-sm"
              >
                Remove Assignment
              </button>
            </div>
          </div>
        ))}

        {/* ======================================================
            ADD
        ====================================================== */}

        <button
          type="button"
          onClick={() =>
            append({
              tripId: "",
              inventoryId: "",
              dutyId: "",
            })
          }
          className="rounded-md border px-4 py-2"
        >
          Add Assignment
        </button>
      </div>
    </FormSection>
  );
}
