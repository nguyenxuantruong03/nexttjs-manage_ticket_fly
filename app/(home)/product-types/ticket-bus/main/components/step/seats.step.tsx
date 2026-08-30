// step/seats.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { BusFormSchema } from "../form/schema/core/bus.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";
import { EntityOption } from "@/components/entity-selector";
import BusSeatTypeCreateDialog from "../../../seat-type/components/BusSeatTypeCreateDialog";

interface SeatsStepProps {
  seatTypeData: BusSeatType[];
}

export default function SeatsStep({ seatTypeData }: SeatsStepProps) {
  const seatTypeOptions: EntityOption<BusSeatType>[] = seatTypeData.map(
    (seatType) => ({
      value: seatType.id,
      label: seatType.name ?? "",
      description: seatType.description ?? undefined,
      data: seatType,
    }),
  );

  return (
    <>
      <FormSection title="Seat Layout" description="Vehicle seat layout">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="vehicle.0.seatLayout.0.name"
            label="Layout Name"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.seatLayout.0.seatRows"
            label="Seat Rows"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.seatLayout.0.seatColumns"
            label="Seat Columns"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Seat Map" description="Visual seat map">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="vehicle.0.seatMap.imageUrl"
            label="Image URL"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.seatMap.svgUrl"
            label="SVG URL"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.seatMap.jsonLayout"
            label="JSON Layout"
          />
        </div>
      </FormSection>

      <FormSection title="Seats" description="Individual seat definitions">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="vehicle.0.seats.0.seatNumber"
            label="Seat Number"
          />

          <FormEntitySelector<BusFormSchema, BusSeatType>
            name="vehicle.0.seats.0.typeId"
            label="Seat Type"
            placeholder="Search seat type..."
            searchPlaceholder="Search seat type..."
            emptyText="No seat type found"
            createText="Create seat type"
            options={seatTypeOptions}
            enableCreate
            renderCreateDialog={(props) => <BusSeatTypeCreateDialog {...props} />}
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.seats.0.floor"
            label="Floor"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.seats.0.row"
            label="Row"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.seats.0.column"
            label="Column"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}