// step/vehicles.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import {
  RentalVehicleType,
  RentalVehicleStatus,
  RentalTransmission,
  RentalFuelType,
  RentalVehicleCondition,
} from "@/types/bookings/car_rental/enums";
import { CarRentalFormValues } from "../schema/core/car-rental.schema";

const vehicleTypeOptions = Object.values(RentalVehicleType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const vehicleStatusOptions = Object.values(RentalVehicleStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const transmissionOptions = Object.values(RentalTransmission).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const fuelTypeOptions = Object.values(RentalFuelType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const conditionOptions = Object.values(RentalVehicleCondition).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function VehiclesStep() {
  return (
    <>
      <FormSection
        title="Vehicle Information"
        description="Main vehicle details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.active"
            label="Active"
          />

          <FormSelect<CarRentalFormValues>
            name="vehicle.0.type"
            label="Vehicle Type"
            options={vehicleTypeOptions}
          />

          <FormSelect<CarRentalFormValues>
            name="vehicle.0.status"
            label="Status"
            options={vehicleStatusOptions}
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.brand"
            label="Brand"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.model"
            label="Model"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.year"
            label="Year"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.color"
            label="Color"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.licensePlate"
            label="License Plate"
          />

          <FormSelect<CarRentalFormValues>
            name="vehicle.0.transmission"
            label="Transmission"
            options={transmissionOptions}
          />

          <FormSelect<CarRentalFormValues>
            name="vehicle.0.fuelType"
            label="Fuel Type"
            options={fuelTypeOptions}
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.fuelCapacityLiters"
            label="Fuel Capacity (Liters)"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.mileageKm"
            label="Mileage KM"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.mileageLimitPerDay"
            label="Mileage Limit Per Day"
            type="number"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.unlimitedMileage"
            label="Unlimited Mileage"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Capacity"
        description="Seats and storage capacity"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="vehicle.0.capacity.seatCount"
            label="Seat Count"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.capacity.luggageCount"
            label="Luggage Count"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.capacity.doorCount"
            label="Door Count"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Features"
        description="Vehicle equipment and options"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.airConditioner"
            label="Air Conditioner"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.bluetooth"
            label="Bluetooth"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.gps"
            label="GPS"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.usbCharger"
            label="USB Charger"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.wirelessCharging"
            label="Wireless Charging"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.appleCarPlay"
            label="Apple CarPlay"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.androidAuto"
            label="Android Auto"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.cruiseControl"
            label="Cruise Control"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.reverseCamera"
            label="Reverse Camera"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.parkingSensor"
            label="Parking Sensor"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.dashCamera"
            label="Dash Camera"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.sunroof"
            label="Sunroof"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.leatherSeats"
            label="Leather Seats"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.heatedSeats"
            label="Heated Seats"
          />

          <FormSwitch<CarRentalFormValues>
            name="vehicle.0.features.childSeatAvailable"
            label="Child Seat Available"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Specification"
        description="Technical specification"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormValues>
            name="vehicle.0.specification.0.condition"
            label="Condition"
            options={conditionOptions}
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.specification.0.vin"
            label="VIN"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.specification.0.engineSizeCc"
            label="Engine Size CC"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.specification.0.horsePower"
            label="Horse Power"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.specification.0.batteryCapacityKwh"
            label="Battery Capacity Kwh"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.specification.0.rangeKm"
            label="Range KM"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.specification.0.previousOwners"
            label="Previous Owners"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Maintenance"
        description="Maintenance records"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="vehicle.0.maintenance.0.type"
            label="Maintenance Type"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.maintenance.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.maintenance.0.mileageKm"
            label="Mileage KM"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.maintenance.0.serviceDate"
            label="Service Date"
            type="date"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.maintenance.0.cost"
            label="Cost"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
