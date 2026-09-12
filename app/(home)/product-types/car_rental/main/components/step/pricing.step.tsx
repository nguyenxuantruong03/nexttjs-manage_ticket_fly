"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormDatePicker,
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { RentalDurationType } from "@/types/product-types/car_rental/enums";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { EntityOption } from "@/components/form/entity-selector";
import PriceRuleTypeCreateDialog from "@/app/(home)/commerce/price-rule-type/components/PriceRuleTypeCreateDialog";
import { Extra } from "@/types/common/commerce/extra/extra.type";
import ExtraCreateDialog from "@/app/(home)/commerce/extra/main/components/ExtraCreateDialog";
import { Currency } from "@/types/location/currency";

const durationTypeOptions = Object.values(RentalDurationType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

interface PricingStepProps {
  bookingTypeData: BookingType[];
  priceRuleTypeData: PriceRuleType[];
  extraTypeData: ExtraType[];
  extraData: Extra[];
  currencyData: Currency[];
}

export default function PricingStep({
  bookingTypeData,
  priceRuleTypeData,
  extraTypeData,
  extraData,
  currencyData,
}: PricingStepProps) {
  const priceRuleTypeOptions: EntityOption<PriceRuleType>[] =
    priceRuleTypeData.map((priceRuleType) => ({
      value: priceRuleType.id,
      label: priceRuleType.name ?? "",
      description: priceRuleType.description ?? undefined,
      data: priceRuleType,
    }));

  const extraTypeOptions: EntityOption<ExtraType>[] = extraTypeData.map(
    (extraType) => ({
      value: extraType.id,
      label: extraType.name ?? "",
      description: extraType.description ?? undefined,
      data: extraType,
    }),
  );

  const extraOptions: EntityOption<Extra>[] = extraData.map((extra) => ({
    value: extra.id,
    label: extra.name,
    description: extra.description ?? undefined,
    data: extra,
  }));

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

          <FormDatePicker<CarRentalFormSchema>
            name="vehicle.0.price.0.effectiveFrom"
            label="Effective From"
          />

          <FormDatePicker<CarRentalFormSchema>
            name="vehicle.0.price.0.effectiveTo"
            label="Effective To"
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
            name="vehicle.0.price.0.originalPricePerHour"
            label="Price Per Hour"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.originalPricePerDay"
            label="Price Per Day"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.originalPricePerWeek"
            label="Price Per Week"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.price.0.originalPricePerMonth"
            label="Price Per Month"
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
          <FormEntitySelector<CarRentalFormSchema, PriceRuleType>
            name="vehicle.0.price.0.priceRules.0.priceRuleTypeId"
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

      {/* ================= EXTRA MAPPER ================= */}

      <FormSection
        title="Rental Extras"
        description="Extras linked to this rental"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, Extra>
            name="carRentalExtraMapper.0.extraId"
            label="Extra"
            placeholder="Search extra..."
            searchPlaceholder="Search extra..."
            emptyText="No extra found"
            createText="Create extra"
            options={extraOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <ExtraCreateDialog
                currencyData={currencyData}
                extraTypeData={extraTypeData}
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormSwitch<CarRentalFormSchema>
            name="carRentalExtraMapper.0.active"
            label="Active"
          />

          <FormInput<CarRentalFormSchema>
            name="carRentalExtraMapper.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
