// step/meal.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import {
  DiningMealType,
  DiningServiceType,
} from "@/types/bookings/hotel/service/dinner-option.type";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import DiningMealTypeCreateDialog from "../../../dining-meal-type/components/DiningMealCreateDialog";
import DiningServiceTypeCreateDialog from "../../../dining-service-type/components/DiningServiceTypeCreateDialog";

interface MealStepProps {
  diningMealTypeData: DiningMealType[];
  diningServiceData: DiningServiceType[];
}

export default function MealStep({
  diningMealTypeData,
  diningServiceData,
}: MealStepProps) {
  const mealTypeOptions: EntityOption<DiningMealType>[] =
    diningMealTypeData.map((mealType) => ({
      value: mealType.id,
      label: mealType.name,
      description: mealType.description ?? undefined,
      data: mealType,
    }));

  const serviceTypeOptions: EntityOption<DiningServiceType>[] =
    diningServiceData.map((serviceType) => ({
      value: serviceType.id,
      label: serviceType.name,
      description: serviceType.description ?? undefined,
      data: serviceType,
    }));

  return (
    <>
      {/* ======================================================
          DINING INFORMATION
      ====================================================== */}

      <FormSection
        title="Dining Information"
        description="Restaurant and meal service information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, DiningMealType>
            name="mealOptions.0.mealTypeId"
            label="Meal Type"
            placeholder="Search meal type..."
            searchPlaceholder="Search meal type..."
            emptyText="No meal type found"
            createText="Create meal type"
            options={mealTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <DiningMealTypeCreateDialog {...props} />
            )}
          />

          <FormEntitySelector<HotelSchemaForm, DiningServiceType>
            name="mealOptions.0.serviceTypeId"
            label="Service Type"
            placeholder="Search service type..."
            searchPlaceholder="Search service type..."
            emptyText="No service type found"
            createText="Create service type"
            options={serviceTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <DiningServiceTypeCreateDialog {...props} />
            )}
          />

          <FormInput<HotelSchemaForm>
            name="mealOptions.0.name"
            label="Dining Name"
            placeholder="Restaurant / Bar name"
          />

          <FormInput<HotelSchemaForm>
            name="mealOptions.0.location"
            label="Location"
            placeholder="Lobby, Rooftop..."
          />
        </div>
      </FormSection>

      {/* ======================================================
          OPERATION
      ====================================================== */}

      <FormSection
        title="Dining Operation"
        description="Opening hours and service details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="mealOptions.0.openingHours"
            label="Opening Hours"
            placeholder="06:00 - 22:00"
          />

          <FormInput<HotelSchemaForm>
            name="mealOptions.0.capacity"
            label="Capacity"
            type="number"
            placeholder="100"
          />

          <FormInput<HotelSchemaForm>
            name="mealOptions.0.dressCode"
            label="Dress Code"
            placeholder="Smart casual"
          />

          <FormInput<HotelSchemaForm>
            name="mealOptions.0.description"
            label="Description"
            placeholder="Dining description"
          />
        </div>
      </FormSection>

      {/* ======================================================
          SETTINGS
      ====================================================== */}

      <FormSection
        title="Dining Settings"
        description="Reservation and availability"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<HotelSchemaForm>
            name="mealOptions.0.reservationRequired"
            label="Reservation Required"
          />

          <FormSwitch<HotelSchemaForm>
            name="mealOptions.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
