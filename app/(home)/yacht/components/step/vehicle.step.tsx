// step/vehicle.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { YachtCondition, YachtFuelType } from "@/types/bookings/yacht/enums";
import { YachtFormValues } from "../schema/core/yacht.schema";

const fuelTypeOptions = Object.values(YachtFuelType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const conditionOptions = Object.values(YachtCondition).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function VehicleStep() {
  return (
    <>
      {/* ======================================================
          VEHICLE INFORMATION
      ====================================================== */}

      <FormSection
        title="Yacht Vehicle"
        description="Basic yacht vehicle information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues> name="vehicle.name" label="Yacht Name" />

          <FormInput<YachtFormValues>
            name="vehicle.manufacturer"
            label="Manufacturer"
          />

          <FormInput<YachtFormValues> name="vehicle.model" label="Model" />

          <FormInput<YachtFormValues>
            name="vehicle.year"
            label="Manufacture Year"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.registrationNumber"
            label="Registration Number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.lengthMeter"
            label="Length Meter"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.widthMeter"
            label="Width Meter"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.speedKnots"
            label="Speed Knots"
            type="number"
          />

          <FormSelect<YachtFormValues>
            name="vehicle.fuelType"
            label="Fuel Type"
            options={fuelTypeOptions}
          />

          <FormSelect<YachtFormValues>
            name="vehicle.condition"
            label="Condition"
            options={conditionOptions}
          />
        </div>
      </FormSection>

      {/* ======================================================
          CAPACITY
      ====================================================== */}

      <FormSection
        title="Capacity"
        description="Guest and accommodation capacity"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="vehicle.capacity.guestCapacity"
            label="Guest Capacity"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.capacity.overnightCapacity"
            label="Overnight Capacity"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.capacity.cabinCount"
            label="Cabin Count"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.capacity.bathroomCount"
            label="Bathroom Count"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.capacity.crewCapacity"
            label="Crew Capacity"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          SPECIFICATION
      ====================================================== */}

      <FormSection
        title="Specification"
        description="Engine and performance specifications"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="vehicle.specification.enginePowerHp"
            label="Engine Power HP"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.specification.cruisingSpeedKnots"
            label="Cruising Speed Knots"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.specification.maxSpeedKnots"
            label="Maximum Speed Knots"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.specification.fuelCapacityLiter"
            label="Fuel Capacity Liter"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="vehicle.specification.rangeNm"
            label="Range NM"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          VEHICLE FACILITIES
      ====================================================== */}

      <FormSection
        title="Vehicle Facilities"
        description="Yacht onboard facilities"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.wifi"
            label="WiFi"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.bluetooth"
            label="Bluetooth"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.tv"
            label="TV"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.soundSystem"
            label="Sound System"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.kitchen"
            label="Kitchen"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.refrigerator"
            label="Refrigerator"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.coffeeMachine"
            label="Coffee Machine"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.bar"
            label="Bar"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.jacuzzi"
            label="Jacuzzi"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.swimmingPlatform"
            label="Swimming Platform"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.sunDeck"
            label="Sun Deck"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.airConditioning"
            label="Air Conditioning"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.heating"
            label="Heating"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.shower"
            label="Shower"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.toilet"
            label="Toilet"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.fishingEquipment"
            label="Fishing Equipment"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.snorkelingEquipment"
            label="Snorkeling Equipment"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.facilities.divingEquipment"
            label="Diving Equipment"
          />
        </div>
      </FormSection>

      {/* ======================================================
          SAFETY EQUIPMENT
      ====================================================== */}

      <FormSection
        title="Safety Equipment"
        description="Safety and emergency equipment"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.lifeJacket"
            label="Life Jacket"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.lifeRaft"
            label="Life Raft"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.fireExtinguisher"
            label="Fire Extinguisher"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.fireAlarm"
            label="Fire Alarm"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.firstAidKit"
            label="First Aid Kit"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.gps"
            label="GPS"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.radar"
            label="Radar"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.emergencyRadio"
            label="Emergency Radio"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.safetyEquipment.insurance"
            label="Insurance"
          />
        </div>
      </FormSection>

      {/* ======================================================
          VEHICLE IMAGES
      ====================================================== */}

      <FormSection title="Vehicle Images" description="Yacht vehicle gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="vehicle.images.0.url"
            label="Image URL"
          />

          <FormInput<YachtFormValues>
            name="vehicle.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>
    </>
  );
}
