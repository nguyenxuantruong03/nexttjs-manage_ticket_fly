// step/pricing.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { FlyFormSchema } from "../schema/core/fly.schema";
import FlyCabinClassCreateDialog from "../../../cabin-class/components/FlyCabinClassCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import PriceRuleTypeCreateDialog from "@/app/(home)/commerce/price-rule-type/components/PriceruleTypeCreateDialog";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { EntityOption } from "@/components/entity-selector";
import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";
import { BookingType } from "@/types/common/commerce/booking-type";

interface PricingStepProps {
  priceRuleTypeData: PriceRuleType[];
  cabinClassData: FlyCabinClass[];
  bookingTypeData: BookingType[];
}

export default function PricingStep({
  priceRuleTypeData,
  cabinClassData,
  bookingTypeData,
}: PricingStepProps) {
  const priceRuleTypeOptions: EntityOption<PriceRuleType>[] =
    priceRuleTypeData.map((priceRuleType) => ({
      value: priceRuleType.id,
      label: priceRuleType.name,
      description: priceRuleType.description ?? undefined,
      data: priceRuleType,
    }));

  const cabinClassOptions: EntityOption<FlyCabinClass>[] = cabinClassData.map(
    (cabinClass) => ({
      value: cabinClass.id,
      label: cabinClass.name,
      description: cabinClass.description ?? undefined,
      data: cabinClass,
    }),
  );
  return (
    <>
      <FormSection title="Price" description="Flight base pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="price.fromPrice"
            label="From Price"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="price.toPrice"
            label="To Price"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="price.originalFromPrice"
            label="Original From Price"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="price.originalToPrice"
            label="Original To Price"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Fare" description="Fare class configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="price.fares.0.name"
            label="Fare Name"
          />

          <FormInput<FlyFormSchema>
            name="price.fares.0.code"
            label="Fare Code"
          />

          <FormEntitySelector<FlyFormSchema, FlyCabinClass>
            name="price.fares.0.cabinClassId"
            label="Cabin Class"
            placeholder="Search cabin class..."
            searchPlaceholder="Search cabin class..."
            emptyText="No cabin class found"
            createText="Create cabin class"
            options={cabinClassOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FlyCabinClassCreateDialog {...props} />
            )}
          />

          <FormSwitch<FlyFormSchema>
            name="price.fares.0.refundable"
            label="Refundable"
          />

          <FormSwitch<FlyFormSchema>
            name="price.fares.0.changeable"
            label="Changeable"
          />

          <FormSwitch<FlyFormSchema>
            name="price.fares.0.priorityBoarding"
            label="Priority Boarding"
          />

          <FormSwitch<FlyFormSchema>
            name="price.fares.0.loungeAccess"
            label="Lounge Access"
          />

          <FormSwitch<FlyFormSchema>
            name="price.fares.0.seatSelectionIncluded"
            label="Seat Selection Included"
          />

          <FormSwitch<FlyFormSchema>
            name="price.fares.0.mealsIncluded"
            label="Meals Included"
          />

          <FormSwitch<FlyFormSchema>
            name="price.fares.0.wifiIncluded"
            label="Wifi Included"
          />

          <FormSwitch<FlyFormSchema>
            name="price.fares.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection title="Fare Taxes" description="Tax list">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="price.fares.0.taxes.0.name"
            label="Tax Name"
          />

          <FormInput<FlyFormSchema>
            name="price.fares.0.taxes.0.amount"
            label="Tax Amount"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Price Rules" description="Discount and pricing rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema>
            name="price.priceRules.0.name"
            label="Rule Name"
          />

          <FormEntitySelector<FlyFormSchema, PriceRuleType>
            name="price.priceRules.0.priceRuleTypeId"
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

          <FormInput<FlyFormSchema>
            name="price.priceRules.0.percentage"
            label="Percentage"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="price.priceRules.0.amount"
            label="Amount"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="price.priceRules.0.couponCode"
            label="Coupon Code"
          />

          <FormInput<FlyFormSchema>
            name="price.priceRules.0.minimumSpend"
            label="Minimum Spend"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="price.priceRules.0.maximumDiscount"
            label="Maximum Discount"
            type="number"
          />

          <FormInput<FlyFormSchema>
            name="price.priceRules.0.validFrom"
            label="Valid From"
            type="datetime-local"
          />

          <FormInput<FlyFormSchema>
            name="price.priceRules.0.validTo"
            label="Valid To"
            type="datetime-local"
          />

          <FormSwitch<FlyFormSchema>
            name="price.priceRules.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
