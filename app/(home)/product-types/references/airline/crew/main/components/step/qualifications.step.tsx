"use client";

import FormSection from "@/components/form/FormSection";

import { useFieldArray, useFormContext } from "react-hook-form";

import { EntityOption } from "@/components/form/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { FormDatePicker } from "@/components/form/form-data";
import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";
import FlyAircraftTypeCreateDialog from "../../../../aircraft/aircraft-type/components/FlyAircraftTypeCreateDialog";
import { FlyCrewFormSchema } from "../schema/crew.schema";

interface QualificationsStepProps {
  aircraftTypeData: FlyAircraftType[];
}

export default function QualificationsStep({
  aircraftTypeData,
}: QualificationsStepProps) {
  const { control } = useFormContext<FlyCrewFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "qualifications",
  });

  // ======================================================
  // AIRCRAFT TYPE MASTER
  // ======================================================

  const aircraftTypeEntityOptions: EntityOption<FlyAircraftType>[] =
    aircraftTypeData.map((aircraftType) => ({
      value: aircraftType.id,

      label: aircraftType.name,

      description: aircraftType.code,

      data: aircraftType,
    }));

  return (
    <FormSection
      title="Qualifications"
      description="Manage crew aircraft qualifications"
    >
      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="grid gap-6 md:grid-cols-3">
            {/* ======================================================
                AIRCRAFT TYPE MASTER
                NOTE: qualification.schema.ts names this field
                "aircraftType" (not "aircraftTypeId") - fixed to match
            ====================================================== */}

            <FormEntitySelector<FlyCrewFormSchema, FlyAircraftType>
              name={`qualifications.${index}.aircraftTypeId`}
              label="Aircraft Type"
              placeholder="Search aircraft type..."
              searchPlaceholder="Search aircraft type..."
              emptyText="No aircraft type found"
              options={aircraftTypeEntityOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <FlyAircraftTypeCreateDialog {...props} />
              )}
            />

            {/* ======================================================
                ISSUED AT
            ====================================================== */}

            <FormDatePicker<FlyCrewFormSchema>
              name={`qualifications.${index}.issuedAt`}
              label="Issued At"
            />

            {/* ======================================================
                VALID UNTIL
            ====================================================== */}

            <FormDatePicker<FlyCrewFormSchema>
              name={`qualifications.${index}.validUntil`}
              label="Valid Until"
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
                Remove Qualification
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
              aircraftTypeId: "",
              issuedAt: undefined,
              validUntil: undefined,
            })
          }
          className="rounded-md border px-4 py-2"
        >
          Add Qualification
        </button>
      </div>
    </FormSection>
  );
}