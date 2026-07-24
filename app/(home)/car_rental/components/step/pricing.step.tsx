"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import {
  RentalDurationType,
  CarRentalPriceRuleType,
  CarRentalExtraType,
  CarRentalExtraPricingType,
} from "@/types/bookings/car_rental/enums";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

const durationTypeOptions = Object.values(RentalDurationType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const priceRuleTypeOptions = Object.values(CarRentalPriceRuleType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const extraTypeOptions = Object.values(CarRentalExtraType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const extraPricingTypeOptions = Object.values(CarRentalExtraPricingType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function PricingStep() {
  return (
    <>
      {/* ================= PRICE ================= */}

      <FormSection title="Vehicle Pricing" description="Vehicle rental pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="vehicle.0.price.0.pricingType"
            label="Pricing Type"
            options={durationTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.endDate"
            label="End Date"
            type="date"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.pricePerHour"
            label="Price Per Hour"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.pricePerDay"
            label="Price Per Day"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.pricePerWeek"
            label="Price Per Week"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.pricePerMonth"
            label="Price Per Month"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.originalPrice"
            label="Original Price"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.minimumDays"
            label="Minimum Days"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.maximumDays"
            label="Maximum Days"
            type="number"
          />
        </div>
      </FormSection>

      {/* ================= BREAKDOWN ================= */}

      <FormSection title="Price Breakdown" description="Price components">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.priceId"
            label="Price ID"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.rentalRate"
            label="Rental Rate"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.duration"
            label="Duration"
            type="number"
          />

          <FormSelect<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.durationType"
            label="Duration Type"
            options={durationTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.taxes"
            label="Taxes"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.insuranceFee"
            label="Insurance Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.deliveryFee"
            label="Delivery Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.extraDriverFee"
            label="Extra Driver Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.childSeatFee"
            label="Child Seat Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.gpsFee"
            label="GPS Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.helmetFee"
            label="Helmet Fee"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.discount"
            label="Discount"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.breakdown.includedItems"
            label="Included Items"
          />
        </div>
      </FormSection>

      {/* ================= RULE ================= */}

      <FormSection
        title="Dynamic Price Rules"
        description="Seasonal or custom rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="vehicle.0.price.0.priceRules.0.type"
            label="Rule Type"
            options={priceRuleTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.priceRules.0.percentage"
            label="Percentage"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.priceRules.0.amount"
            label="Amount"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.priceRules.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.priceRules.0.endDate"
            label="End Date"
            type="date"
          />
        </div>
      </FormSection>

      {/* ================= EXTRAS ================= */}

      <FormSection title="Rental Extras" description="Additional services">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormSchema>
            name="extras.0.type"
            label="Extra Type"
            options={extraTypeOptions}
          />

          <FormInput<CarRentalFormSchema> name="extras.0.name" label="Name" />

          <FormInput<CarRentalFormSchema>
            name="extras.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormSchema> name="extras.0.image" label="Image" />

          <FormSwitch<CarRentalFormSchema>
            name="extras.0.required"
            label="Required"
          />

          <FormSwitch<CarRentalFormSchema>
            name="extras.0.available"
            label="Available"
          />

          <FormSelect<CarRentalFormSchema>
            name="extras.0.prices.0.pricingType"
            label="Extra Pricing Type"
            options={extraPricingTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="extras.0.prices.0.amount"
            label="Amount"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="extras.0.prices.0.minimumQuantity"
            label="Minimum Quantity"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="extras.0.prices.0.maximumQuantity"
            label="Maximum Quantity"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="extras.0.prices.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<CarRentalFormSchema>
            name="extras.0.prices.0.endDate"
            label="End Date"
            type="date"
          />
        </div>
      </FormSection>
    </>
  );
}
