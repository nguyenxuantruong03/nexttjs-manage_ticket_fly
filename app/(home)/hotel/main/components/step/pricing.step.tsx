// step/pricing.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import { HotelSchemaForm } from "../schema/core/hotel.schema";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";
import { EntityOption } from "@/components/entity-selector";
import {
  HotelRatePlanType,
  MealPlan,
} from "@/types/bookings/hotel/pricing/rate-plan.types";
import { HotelRoomType } from "@/types/bookings/hotel/room/room-type.types";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import MealPlanCreateDialog from "../../../meal-plan/components/MealPlanCreateDialog";
import RatePlanTypeCreateDialog from "../../../rate-plan-type/components/RatePlanTypeCreateDialog";
import RoomTypeCreateDialog from "../../../room-type/components/RoomTypeCreateDialog";

interface PricingStepProps {
  roomTypeData: HotelRoomType[];
  ratePlanTypeData: HotelRatePlanType[];
  mealPlanData: MealPlan[];
}

export default function PricingStep({
  roomTypeData,
  ratePlanTypeData,
  mealPlanData,
}: PricingStepProps) {
  const roomTypeOptions: EntityOption<HotelRoomType>[] = roomTypeData.map(
    (roomType) => ({
      value: roomType.id,
      label: roomType.name,
      description: roomType.description ?? undefined,
      data: roomType,
    }),
  );

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
  return (
    <>
      {/* ======================================================
          INVENTORY
      ====================================================== */}

      <FormSection title="Inventory" description="Room inventory configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, HotelRoomType>
            name="inventories.0.roomTypeId"
            label="Room Type"
            placeholder="Search room type..."
            searchPlaceholder="Search room type..."
            emptyText="No room type found"
            createText="Create room type"
            options={roomTypeOptions}
            enableCreate
            renderCreateDialog={(props) => <RoomTypeCreateDialog {...props} />}
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
          RATE PLAN POLICY
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

      {/* ======================================================
          PRICE
      ====================================================== */}

      <FormSection title="Room Price" description="Base room pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.originalPrice"
            label="Original Price"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.averageNightlyPrice"
            label="Average Nightly Price"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.taxesIncluded"
            label="Taxes Included"
          />

          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.payAtHotel"
            label="Pay At Hotel"
          />
        </div>
      </FormSection>

      {/* ======================================================
          PRICE BREAKDOWN
      ====================================================== */}

      <FormSection title="Price Breakdown" description="Price components">
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
            name="inventories.0.ratePlans.0.price.breakdown.extraFee"
            label="Extra Fee"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.breakdown.discount"
            label="Discount"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          PRICE RULES
      ====================================================== */}

      <FormSection title="Price Rules" description="Dynamic pricing rules">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.name"
            label="Rule Name"
          />

          <FormCombobox<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.type"
            label="Rule Type"
            options={[]}
          />

          <FormCombobox<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.adjustmentType"
            label="Adjustment Type"
            options={[]}
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
            name="inventories.0.ratePlans.0.price.rules.0.priority"
            label="Priority"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.combinable"
            label="Combinable"
          />

          <FormSwitch<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.active"
            label="Active"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.validFrom"
            label="Valid From"
          />

          <FormInput<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.validTo"
            label="Valid To"
          />

          <FormInput name="inventories.0.ratePlans.0.price.breakdown.includedItems" />

          <FormMultiCombobox<HotelSchemaForm>
            name="inventories.0.ratePlans.0.price.rules.0.daysOfWeek"
            label="Days Of Week"
            options={[
              { value: "MON", label: "Monday" },
              { value: "TUE", label: "Tuesday" },
              { value: "WED", label: "Wednesday" },
              { value: "THU", label: "Thursday" },
              { value: "FRI", label: "Friday" },
              { value: "SAT", label: "Saturday" },
              { value: "SUN", label: "Sunday" },
            ]}
          />
        </div>
      </FormSection>
    </>
  );
}
