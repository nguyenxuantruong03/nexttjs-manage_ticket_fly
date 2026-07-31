"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";

export default function PriceStep() {
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
          PRICE RULE
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
    </>
  );
}
