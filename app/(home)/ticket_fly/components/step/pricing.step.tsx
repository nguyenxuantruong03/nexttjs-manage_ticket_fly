// step/pricing.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { FlyCabinClass } from "@/types/bookings/ticket-fly/enums";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

const cabinClassOptions = Object.values(FlyCabinClass).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function PricingStep() {
  return (
    <>
      <FormSection title="Price" description="Flight base pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="price.fromPrice"
            label="From Price"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.toPrice"
            label="To Price"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.originalFromPrice"
            label="Original From Price"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.originalToPrice"
            label="Original To Price"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Fare" description="Fare class configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="price.fares.0.name"
            label="Fare Name"
          />

          <FormSelect<TicketFlyFormValues>
            name="price.fares.0.cabinClass"
            label="Cabin Class"
            options={cabinClassOptions}
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.code"
            label="Fare Code"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.refundable"
            label="Refundable"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.changeable"
            label="Changeable"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.priorityBoarding"
            label="Priority Boarding"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.loungeAccess"
            label="Lounge Access"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.seatSelectionIncluded"
            label="Seat Selection Included"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.mealsIncluded"
            label="Meals Included"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.wifiIncluded"
            label="Wifi Included"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection title="Fare Baggage" description="Included baggage rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="price.fares.0.baggage.cabinWeightKg"
            label="Cabin Weight KG"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.baggage.checkedWeightKg"
            label="Checked Weight KG"
            type="number"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.fares.0.baggage.extraBaggageAllowed"
            label="Extra Baggage Allowed"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.baggage.extraBaggagePrice"
            label="Extra Baggage Price"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Price Breakdown" description="Fare price breakdown">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="price.fares.0.breakdown.baseFare"
            label="Base Fare"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.breakdown.taxes"
            label="Taxes"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.breakdown.airportFee"
            label="Airport Fee"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.breakdown.fuelSurcharge"
            label="Fuel Surcharge"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.breakdown.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.breakdown.bookingFee"
            label="Booking Fee"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.breakdown.discount"
            label="Discount"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.breakdown.finalPrice"
            label="Final Price"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Fare Taxes" description="Tax list">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="price.fares.0.taxes.0.name"
            label="Tax Name"
          />

          <FormInput<TicketFlyFormValues>
            name="price.fares.0.taxes.0.amount"
            label="Tax Amount"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Price Rules" description="Discount and pricing rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.name"
            label="Rule Name"
          />

          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.type"
            label="Rule Type"
          />

          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.percentage"
            label="Percentage"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.amount"
            label="Amount"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.couponCode"
            label="Coupon Code"
          />

          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.minimumSpend"
            label="Minimum Spend"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.maximumDiscount"
            label="Maximum Discount"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.validFrom"
            label="Valid From"
            type="datetime-local"
          />

          <FormInput<TicketFlyFormValues>
            name="price.priceRules.0.validTo"
            label="Valid To"
            type="datetime-local"
          />

          <FormSwitch<TicketFlyFormValues>
            name="price.priceRules.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
