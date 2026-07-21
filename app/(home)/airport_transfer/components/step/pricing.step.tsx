"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";

import {
  AirportTransferAdjustmentType,
  AirportTransferPriceRuleType,
  AirportTransferExtraFeeType,
  AirportTransferVehicleType,
} from "@/types/bookings/airport-transfer/enums";

import { AirportTransferFormValues } from "../schema/core/schema";

const vehicleTypeOptions = Object.values(AirportTransferVehicleType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const priceRuleTypeOptions = Object.values(AirportTransferPriceRuleType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const adjustmentTypeOptions = Object.values(AirportTransferAdjustmentType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const extraFeeTypeOptions = Object.values(AirportTransferExtraFeeType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function PricingStep() {
  return (
    <>
      {/* General Price */}
      <FormSection
        title="General Price"
        description="Base transfer pricing"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="price.fromPrice"
            label="From Price"
            type="number"
            placeholder="Enter minimum price"
          />

          <FormInput<AirportTransferFormValues>
            name="price.toPrice"
            label="To Price"
            type="number"
            placeholder="Enter maximum price"
          />

          <FormInput<AirportTransferFormValues>
            name="price.originalFromPrice"
            label="Original From Price"
            type="number"
            placeholder="Enter original minimum price"
          />

          <FormInput<AirportTransferFormValues>
            name="price.originalToPrice"
            label="Original To Price"
            type="number"
            placeholder="Enter original maximum price"
          />
        </div>
      </FormSection>

      {/* Route Prices */}
      <FormSection
        title="Route Prices"
        description="Pricing by route and vehicle"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.routeId"
            label="Route ID"
            placeholder="Enter route ID"
          />

          <FormSelect<AirportTransferFormValues>
            name="price.routePrices.0.vehicleType"
            label="Vehicle Type"
            options={vehicleTypeOptions}
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.basePrice"
            label="Base Price"
            type="number"
            placeholder="Enter base price"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.originalPrice"
            label="Original Price"
            type="number"
            placeholder="Enter original price"
          />
        </div>

        {/* Breakdown */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.baseFare"
            label="Base Fare"
            type="number"
            placeholder="Enter base fare"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.airportFee"
            label="Airport Fee"
            type="number"
            placeholder="Enter airport fee"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.parkingFee"
            label="Parking Fee"
            type="number"
            placeholder="Enter parking fee"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.tollFee"
            label="Toll Fee"
            type="number"
            placeholder="Enter toll fee"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.serviceFee"
            label="Service Fee"
            type="number"
            placeholder="Enter service fee"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.taxes"
            label="Taxes"
            type="number"
            placeholder="Enter tax amount"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.discount"
            label="Discount"
            type="number"
            placeholder="Enter discount amount"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.totalPrice"
            label="Total Price"
            type="number"
            placeholder="Enter total price"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.includedItems.0"
            label="Included Item"
            placeholder="Enter included service"
          />
        </div>

        {/* Extra Fee */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FormSelect<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.extraFees.0.type"
            label="Extra Fee Type"
            options={extraFeeTypeOptions}
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.extraFees.0.name"
            label="Extra Fee Name"
            placeholder="Enter extra fee name"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.extraFees.0.amount"
            label="Extra Fee Amount"
            type="number"
            placeholder="Enter extra fee amount"
          />

          <FormInput<AirportTransferFormValues>
            name="price.routePrices.0.breakdown.extraFees.0.required"
            label="Required"
            type="number"
            placeholder="Enter required value"
          />
        </div>
      </FormSection>

      {/* Trip Prices */}
      <FormSection
        title="Trip Prices"
        description="Price by trip"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="price.tripPrices.0.tripId"
            label="Trip ID"
            placeholder="Enter trip ID"
          />

          <FormInput<AirportTransferFormValues>
            name="price.tripPrices.0.finalPrice"
            label="Final Price"
            type="number"
            placeholder="Enter final price"
          />

          <FormInput<AirportTransferFormValues>
            name="price.tripPrices.0.originalPrice"
            label="Original Price"
            type="number"
            placeholder="Enter original price"
          />
        </div>
      </FormSection>

      {/* Price Rules */}
      <FormSection
        title="Price Rules"
        description="Discount and pricing rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="price.rules.0.name"
            label="Rule Name"
            placeholder="Enter rule name"
          />

          <FormSelect<AirportTransferFormValues>
            name="price.rules.0.type"
            label="Rule Type"
            options={priceRuleTypeOptions}
          />

          <FormSelect<AirportTransferFormValues>
            name="price.rules.0.adjustmentType"
            label="Adjustment Type"
            options={adjustmentTypeOptions}
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.value"
            label="Value"
            type="number"
            placeholder="Enter adjustment value"
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.minimumSpend"
            label="Minimum Spend"
            type="number"
            placeholder="Enter minimum spend"
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.maximumDiscount"
            label="Maximum Discount"
            type="number"
            placeholder="Enter maximum discount"
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.couponCode"
            label="Coupon Code"
            placeholder="Enter coupon code"
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.validFrom"
            label="Valid From"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.validTo"
            label="Valid To"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.priority"
            label="Priority"
            type="number"
            placeholder="Enter rule priority"
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.combinable"
            label="Combinable"
            placeholder="true / false"
          />

          <FormInput<AirportTransferFormValues>
            name="price.rules.0.active"
            label="Active"
            placeholder="true / false"
          />
        </div>
      </FormSection>
    </>
  );
}