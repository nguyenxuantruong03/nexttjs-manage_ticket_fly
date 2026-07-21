// step/meals.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { HotelFormValues } from "../schema";

import {
  HotelMealType,
  MealPriceUnit,
  HotelExtraType,
  ExtraPriceUnit,
} from "@/types/bookings/hotel/enum/enums";

const mealTypeOptions = Object.values(HotelMealType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const mealPriceUnitOptions = Object.values(MealPriceUnit).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const extraTypeOptions = Object.values(HotelExtraType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const extraPriceUnitOptions = Object.values(ExtraPriceUnit).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function MealsStep() {
  return (
    <>
      <FormSection title="Meal Options" description="Hotel meal options">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="mealOptions.0.name"
            label="Meal Name"
          />

          <FormSelect<HotelFormValues>
            name="mealOptions.0.type"
            label="Meal Type"
            options={mealTypeOptions}
          />

          <FormInput<HotelFormValues>
            name="mealOptions.0.description"
            label="Description"
          />

          <FormSwitch<HotelFormValues>
            name="mealOptions.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection title="Meal Prices" description="Meal pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="mealOptions.0.prices.0.price"
            label="Price"
            type="number"
          />

          <FormSelect<HotelFormValues>
            name="mealOptions.0.prices.0.unit"
            label="Price Unit"
            options={mealPriceUnitOptions}
          />
        </div>
      </FormSection>

      <FormSection title="Hotel Extras" description="Additional services">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues> name="extras.0.name" label="Extra Name" />

          <FormSelect<HotelFormValues>
            name="extras.0.type"
            label="Extra Type"
            options={extraTypeOptions}
          />

          <FormInput<HotelFormValues>
            name="extras.0.description"
            label="Description"
          />

          <FormSwitch<HotelFormValues>
            name="extras.0.required"
            label="Required"
          />

          <FormSwitch<HotelFormValues> name="extras.0.active" label="Active" />
        </div>
      </FormSection>

      <FormSection title="Extra Prices" description="Pricing for extras">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="extras.0.prices.0.price"
            label="Price"
            type="number"
          />

          <FormSelect<HotelFormValues>
            name="extras.0.prices.0.unit"
            label="Price Unit"
            options={extraPriceUnitOptions}
          />

          <FormSwitch<HotelFormValues>
            name="extras.0.prices.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
