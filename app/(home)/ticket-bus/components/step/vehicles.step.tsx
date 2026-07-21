// step/vehicles.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import {
  BusFuelType,
  BusVehicleImageCategory,
  BusVehicleStatus,
  BusVehicleType,
} from "@/types/bookings/bus/enums";

import { BusFormValues } from "../schema/core/bus.schema";

const vehicleTypeOptions = Object.values(BusVehicleType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const vehicleStatusOptions = Object.values(BusVehicleStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const fuelTypeOptions = Object.values(BusFuelType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const imageCategoryOptions = Object.values(BusVehicleImageCategory).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function VehiclesStep() {
  return (
    <>
      <FormSection title="Vehicle" description="General vehicle information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<BusFormValues>
            name="vehicles.0.type"
            label="Vehicle Type"
            options={vehicleTypeOptions}
          />

          <FormSelect<BusFormValues>
            name="vehicles.0.status"
            label="Status"
            options={vehicleStatusOptions}
          />

          <FormInput<BusFormValues>
            name="vehicles.0.name"
            label="Vehicle Name"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.manufacturer"
            label="Manufacturer"
          />

          <FormInput<BusFormValues> name="vehicles.0.model" label="Model" />

          <FormInput<BusFormValues>
            name="vehicles.0.year"
            label="Year"
            type="number"
          />

          <FormSwitch<BusFormValues> name="vehicles.0.active" label="Active" />
        </div>
      </FormSection>

      <FormSection title="Capacity" description="Vehicle capacity">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="vehicles.0.capacity.totalSeats"
            label="Total Seats"
            type="number"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.capacity.sleeperBeds"
            label="Sleeper Beds"
            type="number"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.capacity.cabinRooms"
            label="Cabin Rooms"
            type="number"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.capacity.luggageCapacityKg"
            label="Luggage Capacity (Kg)"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Features" description="Vehicle amenities">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.airConditioner"
            label="Air Conditioner"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.wifi"
            label="WiFi"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.usbCharger"
            label="USB Charger"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.powerOutlet"
            label="Power Outlet"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.readingLight"
            label="Reading Light"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.blanket"
            label="Blanket"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.pillow"
            label="Pillow"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.drinkingWater"
            label="Drinking Water"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.snack"
            label="Snack"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.toilet"
            label="Toilet"
          />
          <FormSwitch<BusFormValues> name="vehicles.0.features.tv" label="TV" />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.entertainment"
            label="Entertainment"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.gpsTracking"
            label="GPS Tracking"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.recliningSeat"
            label="Reclining Seat"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.massageSeat"
            label="Massage Seat"
          />
          <FormSwitch<BusFormValues>
            name="vehicles.0.features.wheelchairAccessible"
            label="Wheelchair Accessible"
          />
        </div>
      </FormSection>

      <FormSection title="Specification" description="Vehicle specifications">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="vehicles.0.specification.engineType"
            label="Engine Type"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.specification.transmission"
            label="Transmission"
          />

          <FormSelect<BusFormValues>
            name="vehicles.0.specification.fuelType"
            label="Fuel Type"
            options={fuelTypeOptions}
          />

          <FormInput<BusFormValues>
            name="vehicles.0.specification.suspension"
            label="Suspension"
          />

          <FormSwitch<BusFormValues>
            name="vehicles.0.specification.airConditioning"
            label="Air Conditioning"
          />

          <FormSwitch<BusFormValues>
            name="vehicles.0.specification.wifiAvailable"
            label="WiFi Available"
          />

          <FormSwitch<BusFormValues>
            name="vehicles.0.specification.toiletAvailable"
            label="Toilet Available"
          />
        </div>
      </FormSection>

      <FormSection title="Vehicle Images" description="Vehicle gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="vehicles.0.images.0.url"
            label="Image URL"
          />

          <FormSelect<BusFormValues>
            name="vehicles.0.images.0.category"
            label="Category"
            options={imageCategoryOptions}
          />

          <FormInput<BusFormValues>
            name="vehicles.0.images.0.alt"
            label="Alt Text"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<BusFormValues>
            name="vehicles.0.images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>
    </>
  );
}
