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
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

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
          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.active"
            label="Active"
          />

          <FormSelect<CarRentalFormSchema>
            name="vehicle.0.type"
            label="Vehicle Type"
            options={vehicleTypeOptions}
          />

          <FormSelect<CarRentalFormSchema>
            name="vehicle.0.status"
            label="Status"
            options={vehicleStatusOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.brand"
            label="Brand"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.model"
            label="Model"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.year"
            label="Year"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.color"
            label="Color"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.licensePlate"
            label="License Plate"
          />

          <FormSelect<CarRentalFormSchema>
            name="vehicle.0.transmission"
            label="Transmission"
            options={transmissionOptions}
          />

          <FormSelect<CarRentalFormSchema>
            name="vehicle.0.fuelType"
            label="Fuel Type"
            options={fuelTypeOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.fuelCapacityLiters"
            label="Fuel Capacity (Liters)"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.mileageKm"
            label="Mileage KM"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.mileageLimitPerDay"
            label="Mileage Limit Per Day"
            type="number"
          />

          <FormSwitch<CarRentalFormSchema>
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
          <FormInput<CarRentalFormSchema>
            name="vehicle.0.capacity.seatCount"
            label="Seat Count"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.capacity.luggageCount"
            label="Luggage Count"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
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
          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.airConditioner"
            label="Air Conditioner"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.bluetooth"
            label="Bluetooth"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.gps"
            label="GPS"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.usbCharger"
            label="USB Charger"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.wirelessCharging"
            label="Wireless Charging"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.appleCarPlay"
            label="Apple CarPlay"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.androidAuto"
            label="Android Auto"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.cruiseControl"
            label="Cruise Control"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.reverseCamera"
            label="Reverse Camera"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.parkingSensor"
            label="Parking Sensor"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.dashCamera"
            label="Dash Camera"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.sunroof"
            label="Sunroof"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.leatherSeats"
            label="Leather Seats"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.features.heatedSeats"
            label="Heated Seats"
          />

          <FormSwitch<CarRentalFormSchema>
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
          <FormSelect<CarRentalFormSchema>
            name="vehicle.0.specification.condition"
            label="Condition"
            options={conditionOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.specification.vin"
            label="VIN"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.specification.engineSizeCc"
            label="Engine Size CC"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.specification.horsePower"
            label="Horse Power"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.specification.batteryCapacityKwh"
            label="Battery Capacity Kwh"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.specification.rangeKm"
            label="Range KM"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.specification.previousOwners"
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
          <FormInput<CarRentalFormSchema>
            name="vehicle.0.maintenance.0.type"
            label="Maintenance Type"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.maintenance.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.maintenance.0.mileageKm"
            label="Mileage KM"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.maintenance.0.serviceDate"
            label="Service Date"
            type="date"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.maintenance.0.cost"
            label="Cost"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
