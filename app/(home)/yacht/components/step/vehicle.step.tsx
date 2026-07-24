// step/vehicle.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { YachtCondition, YachtFuelType } from "@/types/bookings/yacht/enums";
import { YachtFormSchema } from "../schema/core/yacht.schema";

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
          <FormInput<YachtFormSchema> name="vehicle.name" label="Yacht Name" />

          <FormInput<YachtFormSchema>
            name="vehicle.manufacturer"
            label="Manufacturer"
          />

          <FormInput<YachtFormSchema> name="vehicle.model" label="Model" />

          <FormInput<YachtFormSchema>
            name="vehicle.year"
            label="Manufacture Year"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.registrationNumber"
            label="Registration Number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.lengthMeter"
            label="Length Meter"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.widthMeter"
            label="Width Meter"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.speedKnots"
            label="Speed Knots"
            type="number"
          />

          <FormSelect<YachtFormSchema>
            name="vehicle.fuelType"
            label="Fuel Type"
            options={fuelTypeOptions}
          />

          <FormSelect<YachtFormSchema>
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
          <FormInput<YachtFormSchema>
            name="vehicle.capacity.guestCapacity"
            label="Guest Capacity"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.capacity.overnightCapacity"
            label="Overnight Capacity"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.capacity.cabinCount"
            label="Cabin Count"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.capacity.bathroomCount"
            label="Bathroom Count"
            type="number"
          />

          <FormInput<YachtFormSchema>
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
          <FormInput<YachtFormSchema>
            name="vehicle.specification.enginePowerHp"
            label="Engine Power HP"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.specification.cruisingSpeedKnots"
            label="Cruising Speed Knots"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.specification.maxSpeedKnots"
            label="Maximum Speed Knots"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.specification.fuelCapacityLiter"
            label="Fuel Capacity Liter"
            type="number"
          />

          <FormInput<YachtFormSchema>
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
          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.wifi"
            label="WiFi"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.bluetooth"
            label="Bluetooth"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.tv"
            label="TV"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.soundSystem"
            label="Sound System"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.kitchen"
            label="Kitchen"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.refrigerator"
            label="Refrigerator"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.coffeeMachine"
            label="Coffee Machine"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.bar"
            label="Bar"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.jacuzzi"
            label="Jacuzzi"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.swimmingPlatform"
            label="Swimming Platform"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.sunDeck"
            label="Sun Deck"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.airConditioning"
            label="Air Conditioning"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.heating"
            label="Heating"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.shower"
            label="Shower"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.toilet"
            label="Toilet"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.fishingEquipment"
            label="Fishing Equipment"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.snorkelingEquipment"
            label="Snorkeling Equipment"
          />

          <FormSwitch<YachtFormSchema>
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
          <FormSwitch<YachtFormSchema>
            name="vehicle.safetyEquipment.lifeJacket"
            label="Life Jacket"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.safetyEquipment.lifeRaft"
            label="Life Raft"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.safetyEquipment.fireExtinguisher"
            label="Fire Extinguisher"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.safetyEquipment.fireAlarm"
            label="Fire Alarm"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.safetyEquipment.firstAidKit"
            label="First Aid Kit"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.safetyEquipment.gps"
            label="GPS"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.safetyEquipment.radar"
            label="Radar"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.safetyEquipment.emergencyRadio"
            label="Emergency Radio"
          />

          <FormSwitch<YachtFormSchema>
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
          <FormInput<YachtFormSchema>
            name="vehicle.images.0.url"
            label="Image URL"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>
    </>
  );
}
