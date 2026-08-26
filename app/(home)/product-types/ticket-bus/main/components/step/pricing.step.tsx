// step/pricing.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { BusFormSchema } from "../schema/core/bus.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";
import { EntityOption } from "@/components/entity-selector";
import BusSeatTypeCreateDialog from "../../../seat-type/components/BusSeatTypeCreateDialog";
import ExtraFeeTypeCreateDialog from "@/app/(home)/commerce/extra-fee-type/components/ExtraFeeTypeCreateDialog";
import PriceRuleTypeCreateDialog from "@/app/(home)/commerce/price-rule-type/components/PriceruleTypeCreateDialog";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";

interface PricingStepProps {
  seatTypeData: BusSeatType[];
  priceRuleTypeData: PriceRuleType[];
  extraFeeTypeData: ExtraFeeType[];
  bookingTypeData: BookingType[];
}

export default function PricingStep({
  seatTypeData,
  priceRuleTypeData,
  extraFeeTypeData,
  bookingTypeData,
}: PricingStepProps) {
  const seatTypeOptions: EntityOption<BusSeatType>[] = seatTypeData.map(
    (seatType) => ({
      value: seatType.id,
      label: seatType.name ?? "",
      description: seatType.description ?? undefined,
      data: seatType,
    }),
  );

  const priceRuleTypeOptions: EntityOption<PriceRuleType>[] =
    priceRuleTypeData.map((priceRuleType) => ({
      value: priceRuleType.id,
      label: priceRuleType.name,
      description: priceRuleType.description ?? undefined,
      data: priceRuleType,
    }));

  const extraFeeTypeOptions: EntityOption<ExtraFeeType>[] =
    extraFeeTypeData.map((extraFeeType) => ({
      value: extraFeeType.id,
      label: extraFeeType.name,
      description: extraFeeType.description ?? undefined,
      data: extraFeeType,
    }));

  return (
    <>
      <FormSection title="General Pricing" description="Bus price range">
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

      <FormSection
        title="Price Breakdown"
        description="Seat-type price breakdown"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, BusSeatType>
            name="price.0.breakdowns.0.seatTypeId"
            label="Seat Type"
            placeholder="Search seat type..."
            searchPlaceholder="Search seat type..."
            emptyText="No seat type found"
            createText="Create seat type"
            options={seatTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <BusSeatTypeCreateDialog {...props} />
            )}
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

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.includedItems"
            label="Included Items"
          />
        </div>
      </FormSection>

      <FormSection
        title="Extra Fees"
        description="Additional fees on this breakdown"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, ExtraFeeType>
            name="price.0.breakdowns.0.extraFees.0.extraFeeTypeId"
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

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.extraFees.0.amount"
            label="Amount"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="price.0.breakdowns.0.extraFees.0.calculationType"
            label="Calculation Type"
          />

          <FormSwitch<BusFormSchema>
            name="price.0.breakdowns.0.extraFees.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection title="Pricing Rules" description="Discount & promo rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema> name="price.0.rules.0.name" label="Name" />

          <FormEntitySelector<BusFormSchema, PriceRuleType>
            name="price.0.rules.0.priceRuleTypeId"
            label="Price Rule Type"
            placeholder="Search price rule type..."
            searchPlaceholder="Search price rule type..."
            emptyText="No price rule type found"
            createText="Create price rule type"
            options={priceRuleTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <PriceRuleTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
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

          <FormSwitch<BusFormSchema>
            name="price.0.rules.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
