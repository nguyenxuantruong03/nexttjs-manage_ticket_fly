"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormDatePicker,
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import { AirportTransferFormSchema } from "../form/schema/core/schema";
import { EntityOption } from "@/components/form/entity-selector";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import VehicleTypeCreateDialog from "@/app/(home)/catalog/vehicle-type/components/VehicleTypeCreateDialog";
import ExtraFeeTypeCreateDialog from "@/app/(home)/commerce/extra/extra-fee-type/components/ExtraFeeTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import PriceRuleTypeCreateDialog from "@/app/(home)/commerce/price-rule-type/components/PriceRuleTypeCreateDialog";
import { PriceCalculationType } from "@/types/common/enums";
import { RouteType } from "@/types/common/catalog/route-type.type";

const adjustmentTypeOptions = Object.values(PriceCalculationType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

interface PricingStepProps {
  priceRuleTypeData: PriceRuleType[];
  extraFeeTypeData: ExtraFeeType[];
  vehicleTypeData: VehicleType[];
  bookingTypeData: BookingType[];
}

export default function PricingStep({
  priceRuleTypeData,
  extraFeeTypeData,
  vehicleTypeData,
  bookingTypeData,
}: PricingStepProps) {
  const extraFeeTypeOptions: EntityOption<ExtraFeeType>[] =
    extraFeeTypeData.map((extraFeeType) => ({
      value: extraFeeType.id,
      label: extraFeeType.name ?? "",
      description: extraFeeType.description ?? undefined,
      data: extraFeeType,
    }));
  const priceRuleTypeOptions: EntityOption<PriceRuleType>[] =
    priceRuleTypeData.map((type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }));

  const vehicleTypeOptions: EntityOption<VehicleType>[] = vehicleTypeData.map(
    (vehicleType) => ({
      value: vehicleType.id,
      label: vehicleType.name ?? "",
      description: vehicleType.description ?? undefined,
      data: vehicleType,
    }),
  );

  return (
    <>
      {/* General Price */}
      <FormSection title="General Price" description="Base transfer pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="price.fromPrice"
            label="From Price"
            type="number"
            placeholder="Enter minimum price"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.toPrice"
            label="To Price"
            type="number"
            placeholder="Enter maximum price"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.originalFromPrice"
            label="Original From Price"
            type="number"
            placeholder="Enter original minimum price"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.originalToPrice"
            label="Original To Price"
            type="number"
            placeholder="Enter original maximum price"
          />

          <FormDatePicker<AirportTransferFormSchema>
            name="price.effectiveFrom"
            label="Effective From"
          />

          <FormDatePicker<AirportTransferFormSchema>
            name="price.effectiveTo"
            label="Effective To"
          />
        </div>
      </FormSection>

      {/* Route Prices */}
      <FormSection
        title="Route Prices"
        description="Pricing by route and vehicle"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.routeId"
            label="Route ID"
            placeholder="Enter route ID"
          />

          <FormEntitySelector<AirportTransferFormSchema, VehicleType>
            name="price.routePrices.0.vehicleTypeId"
            label="Vehicle Type"
            placeholder="Search vehicle type..."
            searchPlaceholder="Search vehicle type..."
            emptyText="No vehicle type found"
            createText="Create vehicle type"
            options={vehicleTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <VehicleTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.basePrice"
            label="Base Price"
            type="number"
            placeholder="Enter base price"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.originalPrice"
            label="Original Price"
            type="number"
            placeholder="Enter original price"
          />
        </div>

        {/* Breakdown */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.baseFare"
            label="Base Fare"
            type="number"
            placeholder="Enter base fare"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.airportFee"
            label="Airport Fee"
            type="number"
            placeholder="Enter airport fee"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.parkingFee"
            label="Parking Fee"
            type="number"
            placeholder="Enter parking fee"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.tollFee"
            label="Toll Fee"
            type="number"
            placeholder="Enter toll fee"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.serviceFee"
            label="Service Fee"
            type="number"
            placeholder="Enter service fee"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.taxes"
            label="Taxes"
            type="number"
            placeholder="Enter tax amount"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.discount"
            label="Discount"
            type="number"
            placeholder="Enter discount amount"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.totalPrice"
            label="Total Price"
            type="number"
            placeholder="Enter total price"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.includedItems"
            label="Included Items"
            placeholder="Enter included services"
          />
        </div>

        {/* Extra Fee */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FormEntitySelector<AirportTransferFormSchema, ExtraFeeType>
            name="price.routePrices.0.breakdown.extraFees.0.extraFeeTypeId"
            label="Extra Fee Type"
            placeholder="Search extra fee type..."
            searchPlaceholder="Search extra fee type..."
            emptyText="No extra fee type found"
            createText="Create extra fee type"
            options={extraFeeTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <ExtraFeeTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.extraFees.0.amount"
            label="Extra Fee Amount"
            type="number"
            placeholder="Enter extra fee amount"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.extraFees.0.calculationType"
            label="Calculation Type"
            placeholder="fixed / percentage"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="price.routePrices.0.breakdown.extraFees.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      {/* Trip Prices */}
      <FormSection title="Trip Prices" description="Price by trip">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="price.tripPrices.0.tripId"
            label="Trip ID"
            placeholder="Enter trip ID"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.tripPrices.0.finalPrice"
            label="Final Price"
            type="number"
            placeholder="Enter final price"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.tripPrices.0.originalPrice"
            label="Original Price"
            type="number"
            placeholder="Enter original price"
          />
        </div>
      </FormSection>

      {/* Price Rules */}
      <FormSection title="Price Rules" description="Discount and pricing rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="price.priceRules.0.name"
            label="Rule Name"
            placeholder="Enter rule name"
          />

          <FormEntitySelector<AirportTransferFormSchema, PriceRuleType>
            name="price.priceRules.0.priceRuleTypeId"
            label="Rule Type"
            placeholder="Search rule type..."
            searchPlaceholder="Search rule type..."
            emptyText="No rule type found"
            createText="Create rule type"
            options={priceRuleTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <PriceRuleTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormSelect<AirportTransferFormSchema>
            name="price.priceRules.0.adjustmentType"
            label="Adjustment Type"
            options={adjustmentTypeOptions}
          />

          <FormInput<AirportTransferFormSchema>
            name="price.priceRules.0.value"
            label="Value"
            type="number"
            placeholder="Enter adjustment value"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.priceRules.0.minimumSpend"
            label="Minimum Spend"
            type="number"
            placeholder="Enter minimum spend"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.priceRules.0.maximumDiscount"
            label="Maximum Discount"
            type="number"
            placeholder="Enter maximum discount"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.priceRules.0.couponCode"
            label="Coupon Code"
            placeholder="Enter coupon code"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.priceRules.0.validFrom"
            label="Valid From"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.priceRules.0.validTo"
            label="Valid To"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormSchema>
            name="price.priceRules.0.priority"
            label="Priority"
            type="number"
            placeholder="Enter rule priority"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="price.priceRules.0.combinable"
            label="Combinable"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="price.priceRules.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
