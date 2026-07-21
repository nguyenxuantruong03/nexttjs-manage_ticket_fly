"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import {
  AirportTransferFuelType,
  AirportTransferTransmission,
  AirportTransferVehicleStatus,
  AirportTransferVehicleType,
} from "@/types/bookings/airport-transfer/enums";

import { AirportTransferFormValues } from "../schema/core/schema";

const vehicleTypeOptions = Object.values(AirportTransferVehicleType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const fuelTypeOptions = Object.values(AirportTransferFuelType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const transmissionOptions = Object.values(AirportTransferTransmission).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const statusOptions = Object.values(AirportTransferVehicleStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function VehicleStep() {
  return (
    <>
      {/* Vehicle Information */}
      <FormSection title="Vehicle Information" description="Vehicle details">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<AirportTransferFormValues>
            name="vehicle.0.type"
            label="Vehicle Type"
            options={vehicleTypeOptions}
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.name"
            label="Vehicle Name"
            placeholder="Enter vehicle name"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.manufacturer"
            label="Manufacturer"
            placeholder="Enter manufacturer"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.model"
            label="Model"
            placeholder="Enter vehicle model"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.year"
            label="Year"
            type="number"
            placeholder="Enter manufacturing year"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.color"
            label="Color"
            placeholder="Enter vehicle color"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.licensePlate"
            label="License Plate"
            placeholder="Enter license plate"
          />

          <FormSelect<AirportTransferFormValues>
            name="vehicle.0.transmission"
            label="Transmission"
            options={transmissionOptions}
          />

          <FormSelect<AirportTransferFormValues>
            name="vehicle.0.fuelType"
            label="Fuel Type"
            options={fuelTypeOptions}
          />

          <FormSelect<AirportTransferFormValues>
            name="vehicle.0.status"
            label="Status"
            options={statusOptions}
          />
        </div>
      </FormSection>

      {/* Capacity */}
      <FormSection
        title="Vehicle Capacity"
        description="Passenger and luggage capacity"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="vehicle.0.capacity.passengerCount"
            label="Passenger Count"
            type="number"
            placeholder="Enter passenger capacity"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.capacity.luggageCount"
            label="Luggage Count"
            type="number"
            placeholder="Enter luggage capacity"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.capacity.cabinBaggageCount"
            label="Cabin Baggage Count"
            type="number"
            placeholder="Enter cabin baggage capacity"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.capacity.oversizedLuggage"
            label="Oversized Luggage"
            type="number"
            placeholder="Enter oversized luggage capacity"
          />
        </div>
      </FormSection>

      {/* Features */}
      <FormSection title="Vehicle Features" description="Vehicle amenities">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.airConditioner"
            label="Air Conditioner"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.wifi"
            label="WiFi"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.usbCharger"
            label="USB Charger"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.bottledWater"
            label="Bottled Water"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.childSeat"
            label="Child Seat"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.wheelchairAccessible"
            label="Wheelchair Accessible"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.petFriendly"
            label="Pet Friendly"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.phoneCharger"
            label="Phone Charger"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.music"
            label="Music"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.features.gpsTracking"
            label="GPS Tracking"
          />
        </div>
      </FormSection>

      {/* Specification */}
      <FormSection
        title="Vehicle Specification"
        description="Technical specification"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="vehicle.0.specification.engineSizeCc"
            label="Engine Size CC"
            type="number"
            placeholder="Enter engine size"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.specification.fuelCapacity"
            label="Fuel Capacity"
            type="number"
            placeholder="Enter fuel capacity"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.specification.mileageKm"
            label="Mileage KM"
            type="number"
            placeholder="Enter mileage"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.specification.vin"
            label="VIN"
            placeholder="Enter VIN number"
          />
        </div>
      </FormSection>

      {/* Images */}
      <FormSection
        title="Vehicle Images"
        description="Vehicle image information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="vehicle.0.images.0.url"
            label="Image URL"
            placeholder="Enter image URL"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.images.0.category"
            label="Image Category"
            placeholder="Enter image category"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.images.0.isPrimary"
            label="Primary Image"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
            placeholder="Enter sort order"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.images.0.alt"
            label="Alt Text"
            placeholder="Enter image description"
          />
        </div>
      </FormSection>

      {/* Availability */}
      <FormSection
        title="Vehicle Availability"
        description="Vehicle operating availability"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="vehicle.0.availability.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.availability.0.endDate"
            label="End Date"
            type="date"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.availability.0.available"
            label="Available"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.availability.0.note"
            label="Note"
            placeholder="Enter availability note"
          />
        </div>
      </FormSection>

      {/* Driver */}
      <FormSection title="Driver" description="Driver information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.firstName"
            label="First Name"
            placeholder="Enter first name"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.lastName"
            label="Last Name"
            placeholder="Enter last name"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.avatar"
            label="Avatar"
            placeholder="Enter avatar URL"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.phone"
            label="Phone"
            placeholder="Enter phone number"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.email"
            label="Email"
            placeholder="Enter email address"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.licenseNumber"
            label="License Number"
            placeholder="Enter license number"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.licenseExpiry"
            label="License Expiry"
            type="date"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.experienceYears"
            label="Experience Years"
            type="number"
            placeholder="Enter experience years"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.rating"
            label="Rating"
            type="number"
            placeholder="Enter driver rating"
          />

          <FormInput<AirportTransferFormValues>
            name="vehicle.0.drivers.0.totalTrips"
            label="Total Trips"
            type="number"
            placeholder="Enter total trips"
          />

          <FormSwitch<AirportTransferFormValues>
            name="vehicle.0.drivers.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
