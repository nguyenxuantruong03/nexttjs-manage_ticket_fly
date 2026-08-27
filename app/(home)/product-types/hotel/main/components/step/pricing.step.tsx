// step/pricing.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import MealPlanCreateDialog from "../../../meal-plan/components/MealPlanCreateDialog";
import RatePlanTypeCreateDialog from "../../../rate-plan-type/components/RatePlanTypeCreateDialog";
import {
  HotelRatePlanType,
  MealPlan,
} from "@/types/product-types/hotel/pricing/rate-plan.types";
import { Policy } from "@/types/common/features/policy/policy";
import PolicyCreateDialog from "@/app/(home)/features/policy/main/components/PolicyCreateDialog";
import { PolicyType } from "@/types/common/features/policy/policy-type";
import { BookingType } from "@/types/common/commerce/booking-type";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";
import PriceRuleTypeCreateDialog from "@/app/(home)/commerce/price-rule-type/components/PriceruleTypeCreateDialog";

const ADJUSTMENT_TYPE_OPTIONS = [
  { value: "PERCENTAGE", label: "Percentage" },
  { value: "FIXED", label: "Fixed Amount" },
];

const DAYS_OF_WEEK_OPTIONS = [
  { value: "MON", label: "Monday" },
  { value: "TUE", label: "Tuesday" },
  { value: "WED", label: "Wednesday" },
  { value: "THU", label: "Thursday" },
  { value: "FRI", label: "Friday" },
  { value: "SAT", label: "Saturday" },
  { value: "SUN", label: "Sunday" },
];

// NOTE: `ratePlans.0.policies.0.policyId` and `cancellationPolicy.*` were
// entirely missing from this step. `Policy` type + dialog guessed to
// follow the existing pattern — please verify against the actual module
// (this is likely the same Policy entity used by hotelPolicyMapper).

interface PricingStepProps {
  ratePlanTypeData: HotelRatePlanType[];
  mealPlanData: MealPlan[];
  policyData: Policy[];
  policyTypeData: PolicyType[];
  bookingTypeData: BookingType[];
  priceRuleTypeData: PriceRuleType[];
}

export default function PricingStep({
  ratePlanTypeData,
  mealPlanData,
  policyData,
  policyTypeData,
  bookingTypeData,
  priceRuleTypeData,
}: PricingStepProps) {
  const ratePlanTypeOptions: EntityOption<HotelRatePlanType>[] =
    ratePlanTypeData.map((type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }));

  const mealPlanOptions: EntityOption<MealPlan>[] = mealPlanData.map(
    (mealPlan) => ({
      value: mealPlan.id,
      label: mealPlan.name,
      description: mealPlan.description ?? undefined,
      data: mealPlan,
    }),
  );

  const policyOptions: EntityOption<Policy>[] = policyData.map((policy) => ({
    value: policy.id,
    label: policy.name,
    data: policy,
  }));

  const priceRuleTypeOptions: EntityOption<PriceRuleType>[] =
    priceRuleTypeData.map((type) => ({
      value: type.id,
      label: type.name,
      data: type,
    }));

  return (
    <>
      {/* ======================================================
          BASIC PRICE
      ====================================================== */}

      <FormSection
        title="Room Price"
        description="Base room pricing information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.originalPrice"
            label="Original Price"
            type="number"
            placeholder="Enter original price"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.averageNightlyPrice"
            label="Average Nightly Price"
            type="number"
            placeholder="Average nightly price"
          />

          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.taxesIncluded"
            label="Taxes Included"
            description="Price already includes taxes"
          />

          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.payAtHotel"
            label="Pay At Hotel"
            description="Guest pays at property"
          />
        </div>
      </FormSection>

      {/* ======================================================
          PRICE BREAKDOWN
      ====================================================== */}

      <FormSection
        title="Price Breakdown"
        description="Detailed price calculation"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.roomRate"
            label="Room Rate"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.nights"
            label="Nights"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.taxes"
            label="Taxes"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.resortFee"
            label="Resort Fee"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.cleaningFee"
            label="Cleaning Fee"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.discount"
            label="Discount"
            type="number"
          />

          <FormMultiCombobox<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.includedItems"
            label="Included Items"
            options={[]}
          />
        </div>
      </FormSection>

      {/* ======================================================
          PRICE RULES
      ====================================================== */}

      <FormSection
        title="Price Rules"
        description="Dynamic pricing adjustment rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.name"
            label="Rule Name"
            placeholder="Weekend discount"
          />

          <FormEntitySelector<HotelSchemaForm, PriceRuleType>
            name="inventories.0.ratePlans.0.price.rules.0.priceRuleTypeId"
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

          <FormCombobox<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.adjustmentType"
            label="Adjustment Type"
            options={ADJUSTMENT_TYPE_OPTIONS}
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.value"
            label="Value"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.minimumNights"
            label="Minimum Nights"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.maximumNights"
            label="Maximum Nights"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.validFrom"
            label="Valid From"
            type="date"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.validTo"
            label="Valid To"
            type="date"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.priority"
            label="Priority"
            type="number"
          />

          <FormMultiCombobox<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.daysOfWeek"
            label="Days Of Week"
            options={DAYS_OF_WEEK_OPTIONS}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.combinable"
            label="Combinable"
            description="Allow combining with other rules"
          />

          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.active"
            label="Active"
            description="Enable this price rule"
          />
        </div>
      </FormSection>
      {/* ======================================================
          RATE PLAN
      ====================================================== */}

      <FormSection
        title="Rate Plan"
        description="Booking price plan configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, HotelRatePlanType>
            name="inventories.0.ratePlans.0.typeId"
            label="Rate Plan Type"
            placeholder="Search rate plan type..."
            searchPlaceholder="Search rate plan type..."
            emptyText="No rate plan type found"
            createText="Create rate plan type"
            options={ratePlanTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <RatePlanTypeCreateDialog {...props} />
            )}
          />

          <FormEntitySelector<HotelSchemaForm, MealPlan>
            name="inventories.0.ratePlans.0.mealPlanId"
            label="Meal Plan"
            placeholder="Search meal plan..."
            searchPlaceholder="Search meal plan..."
            emptyText="No meal plan found"
            createText="Create meal plan"
            options={mealPlanOptions}
            enableCreate
            renderCreateDialog={(props) => <MealPlanCreateDialog {...props} />}
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.name"
            label="Rate Plan Name"
            placeholder="Standard Rate"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.code"
            label="Rate Plan Code"
            placeholder="BAR"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.description"
            label="Description"
          />
        </div>
      </FormSection>

      {/* ======================================================
          RATE PLAN POLICIES
      ====================================================== */}

      <FormSection
        title="Rate Plan Policies"
        description="Policies attached to this rate plan"
      >
        <FormEntitySelector<HotelSchemaForm, Policy>
          name="inventories.0.ratePlans.0.policies.0.policyId"
          label="Policy"
          placeholder="Search policy..."
          searchPlaceholder="Search policy..."
          emptyText="No policy found"
          createText="Create policy"
          options={policyOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <PolicyCreateDialog
              policyTypeData={policyTypeData}
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />
      </FormSection>

      {/* ======================================================
          CANCELLATION POLICY
      ====================================================== */}

      <FormSection
        title="Cancellation Policy"
        description="Refund and cancellation terms"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.cancellationPolicy.freeCancellation"
            label="Free Cancellation"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.cancellationPolicy.beforeHours"
            label="Before Hours"
            type="number"
            placeholder="24"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.cancellationPolicy.cancellationFee"
            label="Cancellation Fee"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          RATE PLAN SETTINGS
      ====================================================== */}

      <FormSection
        title="Rate Plan Settings"
        description="Refund and activation rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.refundable"
            label="Refundable"
          />

          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
