// step/pricing.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import { BusPriceRuleType, BusSeatType } from "@/types/bookings/bus/enums";

import { BusFormSchema } from "../schema/core/bus.schema";

const seatTypeOptions = Object.values(BusSeatType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const priceRuleTypeOptions = Object.values(BusPriceRuleType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function PricingStep() {
  return (
    <>
      <FormSection title="Prices" description="General pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="price.0.fromPrice"
            label="From Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.toPrice"
            label="To Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.originalFromPrice"
            label="Original From Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.originalToPrice"
            label="Original To Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.effectiveFrom"
            label="Effective From"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="price.0.effectiveTo"
            label="Effective To"
            type="datetime-local"
          />
        </div>
      </FormSection>

      <FormSection title="Price Breakdown" description="Detailed seat pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<BusFormSchema>
            name="price.0.breakdowns.0.seatType"
            label="Seat Type"
            options={seatTypeOptions}
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.basePrice"
            label="Base Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.originalPrice"
            label="Original Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.taxes"
            label="Taxes"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.bookingFee"
            label="Booking Fee"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.discount"
            label="Discount"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.finalPrice"
            label="Final Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.availableSeats"
            label="Available Seats"
            type="number"
          />
        </div>

        <div className="mt-6">
          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.includedItems"
            label="Included Items"
            placeholder="Press Enter to add item"
          />
        </div>
      </FormSection>

      <FormSection title="Seat Prices" description="Trip seat pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.seatType"
            label="Seat Type"
            options={seatTypeOptions}
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.price"
            label="Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.originalPrice"
            label="Original Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.taxes"
            label="Taxes"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.bookingFee"
            label="Booking Fee"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.discount"
            label="Discount"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.finalPrice"
            label="Final Price"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.price.seatPrices.0.availableSeats"
            label="Available Seats"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Price Rules" description="Discounts & pricing rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="price.0.rules.0.name"
            label="Rule Name"
          />

          <FormSelect<BusFormSchema>
            name="price.0.rules.0.type"
            label="Rule Type"
            options={priceRuleTypeOptions}
          />

          <FormInput<BusFormSchema>
            name="price.0.rules.0.priority"
            label="Priority"
            type="number"
          />

          <FormSwitch<BusFormSchema>
            name="price.0.rules.0.combinable"
            label="Combinable"
          />

          <FormSwitch<BusFormSchema>
            name="price.0.rules.0.active"
            label="Active"
          />

          <FormInput<BusFormSchema>
            name="price.0.rules.0.percentage"
            label="Percentage"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.rules.0.amount"
            label="Amount"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.rules.0.minimumSpend"
            label="Minimum Spend"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.rules.0.maximumDiscount"
            label="Maximum Discount"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.rules.0.couponCode"
            label="Coupon Code"
          />

          <FormInput<BusFormSchema>
            name="price.0.rules.0.startDate"
            label="Start Date"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="price.0.rules.0.endDate"
            label="End Date"
            type="datetime-local"
          />
        </div>
      </FormSection>
    </>
  );
}
