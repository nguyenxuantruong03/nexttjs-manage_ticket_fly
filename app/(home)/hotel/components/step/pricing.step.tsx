// step/pricing.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { HotelFormValues } from "../schema";

import {
  HotelRatePlanType,
  MealPlan,
  HotelPriceRuleType,
  HotelPriceAdjustmentType,
} from "@/types/bookings/hotel/enum/enums";

import { WeekDay } from "@/types/common/enums";

const ratePlanTypeOptions = Object.values(HotelRatePlanType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const mealPlanOptions = Object.values(MealPlan).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const priceRuleTypeOptions = Object.values(HotelPriceRuleType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const adjustmentTypeOptions = Object.values(HotelPriceAdjustmentType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const weekDayOptions = Object.values(WeekDay).map((value) => ({
  label: value,
  value,
}));

export default function PricingStep() {
  return (
    <>
      <FormSection title="Rate Plan" description="Rate plan configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.name"
            label="Name"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.code"
            label="Code"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.description"
            label="Description"
          />

          <FormSelect<HotelFormValues>
            name="inventory.0.ratePlans.0.type"
            label="Rate Plan Type"
            options={ratePlanTypeOptions}
          />

          <FormSelect<HotelFormValues>
            name="inventory.0.ratePlans.0.mealPlan"
            label="Meal Plan"
            options={mealPlanOptions}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.refundable"
            label="Refundable"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection
        title="Cancellation Policy"
        description="Rate plan cancellation policy"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.cancellationPolicy.freeCancellation"
            label="Free Cancellation"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.cancellationPolicy.beforeHours"
            label="Before Hours"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.cancellationPolicy.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Room Price" description="Base room pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.originalPrice"
            label="Original Price"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.averageNightlyPrice"
            label="Average Nightly Price"
            type="number"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.price.taxesIncluded"
            label="Taxes Included"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.price.payAtHotel"
            label="Pay At Hotel"
          />
        </div>
      </FormSection>

      <FormSection title="Price Breakdown" description="Detailed pricing">
        <div className="grid gap-6 md:grid-cols-3">
          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.breakdown.roomRate"
            label="Room Rate"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.breakdown.nights"
            label="Nights"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.breakdown.taxes"
            label="Taxes"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.breakdown.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.breakdown.resortFee"
            label="Resort Fee"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.breakdown.cleaningFee"
            label="Cleaning Fee"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.breakdown.extraFee"
            label="Extra Fee"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.breakdown.discount"
            label="Discount"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Price Rule" description="Dynamic pricing rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.name"
            label="Rule Name"
          />

          <FormSelect<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.type"
            label="Rule Type"
            options={priceRuleTypeOptions}
          />

          <FormSelect<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.adjustmentType"
            label="Adjustment Type"
            options={adjustmentTypeOptions}
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.value"
            label="Value"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.minimumNights"
            label="Minimum Nights"
            type="number"
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.maximumNights"
            label="Maximum Nights"
            type="number"
          />

          <FormSelect<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.daysOfWeek.0"
            label="Day Of Week"
            options={weekDayOptions}
          />

          <FormInput<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.priority"
            label="Priority"
            type="number"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.combinable"
            label="Combinable"
          />

          <FormSwitch<HotelFormValues>
            name="inventory.0.ratePlans.0.price.rules.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
