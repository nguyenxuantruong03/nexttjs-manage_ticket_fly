// step/images.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import {
  CarRentalImageCategory,
  RentalVehicleImageCategory,
  RentalVehicleImagePosition,
} from "@/types/bookings/car_rental/enums";
import { CarRentalFormValues } from "../schema/core/car-rental.schema";

const rentalImageCategoryOptions = Object.values(CarRentalImageCategory).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const vehicleImageCategoryOptions = Object.values(
  RentalVehicleImageCategory,
).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const vehicleImagePositionOptions = Object.values(
  RentalVehicleImagePosition,
).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function ImagesStep() {
  return (
    <>
      <FormSection
        title="Rental Images"
        description="Car rental gallery images"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="images.0.url"
            label="Image URL"
          />

          <FormSelect<CarRentalFormValues>
            name="images.0.category"
            label="Category"
            options={rentalImageCategoryOptions}
          />

          <FormInput<CarRentalFormValues>
            name="images.0.alt"
            label="Alt Text"
          />

          <FormSwitch<CarRentalFormValues>
            name="images.0.isPrimary"
            label="Primary Image"
          />

          <FormInput<CarRentalFormValues>
            name="images.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Vehicle Images" description="Vehicle gallery images">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="vehicle.0.images.0.url"
            label="Image URL"
          />

          <FormSelect<CarRentalFormValues>
            name="vehicle.0.images.0.category"
            label="Category"
            options={vehicleImageCategoryOptions}
          />

          <FormSelect<CarRentalFormValues>
            name="vehicle.0.images.0.position"
            label="Position"
            options={vehicleImagePositionOptions}
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.images.0.alt"
            label="Alt Text"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.images.0.isPrimary"
            label="Primary Image"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
