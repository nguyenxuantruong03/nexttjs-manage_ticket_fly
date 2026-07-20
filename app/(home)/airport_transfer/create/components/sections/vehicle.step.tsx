"use client";

import { FieldValues } from "react-hook-form";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

export default function VehicleSection<T extends FieldValues>() {
  return (
    <FormSection title="Vehicle" description="Vehicle information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<T> name={"vehicle.0.name" as any} label="Vehicle Name" />

        <FormSelect<T>
          name={"vehicle.0.type" as any}
          label="Vehicle Type"
          options={[
            { label: "Sedan", value: "sedan" },
            { label: "SUV", value: "suv" },
            { label: "MPV", value: "mpv" },
            { label: "Van", value: "van" },
            { label: "Mini Bus", value: "minibus" },
            { label: "Bus", value: "bus" },
            { label: "Luxury", value: "luxury" },
          ]}
        />

        <FormInput<T>
          name={"vehicle.0.manufacturer" as any}
          label="Manufacturer"
        />

        <FormInput<T> name={"vehicle.0.model" as any} label="Model" />

        <FormInput<T>
          name={"vehicle.0.year" as any}
          label="Year"
          type="number"
        />

        <FormInput<T> name={"vehicle.0.color" as any} label="Color" />

        <FormInput<T>
          name={"vehicle.0.licensePlate" as any}
          label="License Plate"
        />

        <FormSelect<T>
          name={"vehicle.0.transmission" as any}
          label="Transmission"
          options={[
            { label: "Automatic", value: "automatic" },
            { label: "Manual", value: "manual" },
          ]}
        />

        <FormSelect<T>
          name={"vehicle.0.fuelType" as any}
          label="Fuel"
          options={[
            { label: "Gasoline", value: "gasoline" },
            { label: "Diesel", value: "diesel" },
            { label: "Hybrid", value: "hybrid" },
            { label: "Electric", value: "electric" },
          ]}
        />

        <FormSelect<T>
          name={"vehicle.0.status" as any}
          label="Status"
          options={[
            { label: "Available", value: "available" },
            { label: "Reserved", value: "reserved" },
            { label: "Maintenance", value: "maintenance" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">Capacity</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<T>
            name={"vehicle.0.capacity.passengerCount" as any}
            label="Passengers"
            type="number"
          />

          <FormInput<T>
            name={"vehicle.0.capacity.luggageCount" as any}
            label="Luggage"
            type="number"
          />

          <FormInput<T>
            name={"vehicle.0.capacity.cabinBaggageCount" as any}
            label="Cabin Baggage"
            type="number"
          />

          <FormInput<T>
            name={"vehicle.0.capacity.oversizedLuggage" as any}
            label="Oversized Luggage"
            type="number"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">Features</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<T>
            name={"vehicle.0.features.airConditioner" as any}
            label="Air Conditioner"
          />

          <FormSwitch<T> name={"vehicle.0.features.wifi" as any} label="WiFi" />

          <FormSwitch<T>
            name={"vehicle.0.features.usbCharger" as any}
            label="USB Charger"
          />

          <FormSwitch<T>
            name={"vehicle.0.features.bottledWater" as any}
            label="Bottled Water"
          />

          <FormSwitch<T>
            name={"vehicle.0.features.childSeat" as any}
            label="Child Seat"
          />

          <FormSwitch<T>
            name={"vehicle.0.features.wheelchairAccessible" as any}
            label="Wheelchair Accessible"
          />

          <FormSwitch<T>
            name={"vehicle.0.features.petFriendly" as any}
            label="Pet Friendly"
          />

          <FormSwitch<T>
            name={"vehicle.0.features.phoneCharger" as any}
            label="Phone Charger"
          />

          <FormSwitch<T>
            name={"vehicle.0.features.music" as any}
            label="Music"
          />

          <FormSwitch<T>
            name={"vehicle.0.features.gpsTracking" as any}
            label="GPS Tracking"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">Specification</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<T>
            name={"vehicle.0.specification.engineSizeCc" as any}
            label="Engine Size"
            type="number"
          />

          <FormInput<T>
            name={"vehicle.0.specification.fuelCapacity" as any}
            label="Fuel Capacity"
            type="number"
          />

          <FormInput<T>
            name={"vehicle.0.specification.mileageKm" as any}
            label="Mileage"
            type="number"
          />

          <FormInput<T>
            name={"vehicle.0.specification.vin" as any}
            label="VIN"
          />
        </div>
      </div>
    </FormSection>
  );
}
