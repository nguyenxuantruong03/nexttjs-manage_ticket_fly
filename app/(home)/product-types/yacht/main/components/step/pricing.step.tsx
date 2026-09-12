import FormSection from "@/components/form/FormSection";
import {
  FormDatePicker,
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import { YachtFormSchema } from "../form/schema/core/yacht.schema";

import {
  YachtDurationType,
  YachtPricingType,
} from "@/types/product-types/yacht/enums";

const pricingTypeOptions = Object.values(YachtPricingType).map((value) => ({
  label: value.replace(/\_/g, " ").toUpperCase(),
  value,
}));

const durationTypeOptions = Object.values(YachtDurationType).map((value) => ({
  label: value.replace(/\_/g, " ").toUpperCase(),
  value,
}));

export default function PricingStep() {
  return (
    <>
      <FormSection
        title="Pricing Configuration"
        description="Yacht pricing type"
      >
        <FormSelect<YachtFormSchema>
          name="price.pricingType"
          label="Pricing Type"
          options={pricingTypeOptions}
        />

        <FormDatePicker<YachtFormSchema>
          name="price.effectiveFrom"
          label="Effective From"
        />

        <FormDatePicker<YachtFormSchema>
          name="price.effectiveTo"
          label="Effective To"
        />
      </FormSection>

      <FormSection
        title="Base Prices"
        description="Main yacht price options"
      >
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

      <FormSection
        title="Price Breakdown"
        description="Detailed pricing breakdown"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="price.breakdown.basePrice"
            label="Base Price"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.breakdown.originalPrice"
            label="Original Price"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.breakdown.taxes"
            label="Taxes"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.breakdown.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.breakdown.bookingFee"
            label="Booking Fee"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.breakdown.discount"
            label="Discount"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.breakdown.finalPrice"
            label="Final Price"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.breakdown.includedItems.0"
            label="Included Item"
          />
        </div>

        <FormSection
          title="Extra Fees"
          description="Additional fees applied to the price"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <FormInput<YachtFormSchema>
              name="price.breakdown.extraFees.0.extraFeeTypeId"
              label="Extra Fee Type"
            />

            <FormInput<YachtFormSchema>
              name="price.breakdown.extraFees.0.amount"
              label="Amount"
              type="number"
            />

            <FormInput<YachtFormSchema>
              name="price.breakdown.extraFees.0.calculationType"
              label="Calculation Type"
            />

            <FormSwitch<YachtFormSchema>
              name="price.breakdown.extraFees.0.active"
              label="Active"
            />
          </div>
        </FormSection>
      </FormSection>

      <FormSection
        title="Discount Rules"
        description="Pricing discount configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="price.priceRules.0.percentage"
            label="Percentage"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.priceRules.0.amount"
            label="Discount Amount"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="price.priceRules.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<YachtFormSchema>
            name="price.priceRules.0.endDate"
            label="End Date"
            type="date"
          />

          <FormSwitch<YachtFormSchema>
            name="price.priceRules.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}