// step/pricing.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";


import {
  YachtPricingType,
  YachtFeeType,
  YachtDiscountType,
  YachtDurationType,
} from "@/types/bookings/yacht/enums";
import { YachtFormSchema } from "../schema/core/yacht.schema";

const pricingTypeOptions = Object.values(YachtPricingType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const feeTypeOptions = Object.values(YachtFeeType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const discountTypeOptions = Object.values(YachtDiscountType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const durationTypeOptions = Object.values(YachtDurationType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function PricingStep() {
  return (
    <>
      {/* ======================================================
          PRICE CONFIGURATION
      ====================================================== */}

      <FormSection
        title="Pricing Configuration"
        description="Yacht pricing type"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<YachtFormSchema>
            name="price.pricingType"
            label="Pricing Type"
            options={pricingTypeOptions}
          />
        </div>
      </FormSection>

      {/* ======================================================
          PRICE OPTIONS
      ====================================================== */}

      <FormSection title="Base Prices" description="Main yacht price options">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="price.basePrices.0.name"
            label="Price Name"
          />

          <FormInput<YachtFormSchema>
            name="price.basePrices.0.duration"
            label="Duration"
            type="number"
          />

          <FormSelect<YachtFormSchema>
            name="price.basePrices.0.durationType"
            label="Duration Type"
            options={durationTypeOptions}
          />

          <FormInput<YachtFormSchema>
            name="price.basePrices.0.minGuests"
            label="Minimum Guests"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.basePrices.0.maxGuests"
            label="Maximum Guests"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.basePrices.0.originalPrice"
            label="Original Price"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.basePrices.0.includedItems.0"
            label="Included Item"
          />
        </div>
      </FormSection>

      {/* ======================================================
          FEES
      ====================================================== */}

      <FormSection
        title="Additional Fees"
        description="Extra mandatory and optional fees"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<YachtFormSchema>
            name="price.fees.0.type"
            label="Fee Type"
            options={feeTypeOptions}
          />

          <FormInput<YachtFormSchema>
            name="price.fees.0.amount"
            label="Amount"
            type="number"
          />

          <FormSwitch<YachtFormSchema>
            name="price.fees.0.mandatory"
            label="Mandatory"
          />

          <FormInput<YachtFormSchema>
            name="price.fees.0.description"
            label="Description"
          />
        </div>
      </FormSection>

      {/* ======================================================
          DISCOUNT RULES
      ====================================================== */}

      <FormSection
        title="Discount Rules"
        description="Pricing discount configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<YachtFormSchema>
            name="price.discounts.0.type"
            label="Discount Type"
            options={discountTypeOptions}
          />

          <FormInput<YachtFormSchema>
            name="price.discounts.0.percentage"
            label="Percentage"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.discounts.0.amount"
            label="Discount Amount"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.discounts.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<YachtFormSchema>
            name="price.discounts.0.endDate"
            label="End Date"
            type="date"
          />

          <FormSwitch<YachtFormSchema>
            name="price.discounts.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      {/* ======================================================
          PACKAGE PRICING PREVIEW
      ====================================================== */}

      <FormSection
        title="Package Pricing"
        description="Yacht package price information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="packages.0.name"
            label="Package Name"
          />

          <FormInput<YachtFormSchema>
            name="packages.0.description"
            label="Description"
          />

          <FormInput<YachtFormSchema>
            name="packages.0.duration"
            label="Duration"
            type="number"
          />

          <FormSelect<YachtFormSchema>
            name="packages.0.durationType"
            label="Duration Type"
            options={durationTypeOptions}
          />

          <FormInput<YachtFormSchema>
            name="packages.0.maxGuests"
            label="Maximum Guests"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="packages.0.price"
            label="Package Price"
            type="number"
          />

          <FormSwitch<YachtFormSchema>
            name="packages.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
