"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { AirportTransferFormSchema } from "../schema/core/schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import VehicleTypeCreateDialog from "@/app/(home)/catalog/vehicle-type/components/VehicleTypeCreateDialog";
import { EntityOption } from "@/components/entity-selector";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";
import {
  AirportTransferTransmission,
  AirportTransferVehicleStatus,
} from "@/types/product-types/airport-transfer/enums";
import { FuelType } from "@/types/common/catalog/fuel-type";
import FuelTypeCreateDialog from "@/app/(home)/catalog/fuel-type/components/FuelTypeCreateDialog";
import { Language } from "@/types/location/language";
import LanguageCreateDialog from "@/app/(home)/location/language/components/LanguageCreateDialog";

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

interface VehicleStepProps {
  vehicleTypeData: VehicleType[];
  bookingTypeData: BookingType[];
  fuelTypeData: FuelType[];
  languageData: Language[];
}

export default function VehicleStep({
  vehicleTypeData,
  bookingTypeData,
  fuelTypeData,
  languageData,
}: VehicleStepProps) {
  const vehicleTypeOptions: EntityOption<VehicleType>[] = vehicleTypeData.map(
    (vehicleType) => ({
      value: vehicleType.id,
      label: vehicleType.name,
      description: vehicleType.description ?? undefined,
      data: vehicleType,
    }),
  );

  const fuelTypeOptions: EntityOption<FuelType>[] = fuelTypeData.map(
    (fuelType) => ({
      value: fuelType.id,
      label: fuelType.name ?? "",
      data: fuelType,
    }),
  );

  const languageOptions: EntityOption<Language>[] = languageData.map(
    (language) => ({
      value: language.id,
      label: language.name,
      description: language.code ?? undefined,
      data: language,
    }),
  );

  return (
    <>
      {/* Vehicle Type */}
      <FormSection title="Vehicle Type" description="Select the vehicle type">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<AirportTransferFormSchema, VehicleType>
            name="vehicle.0.vehicleTypeId"
            label="Vehicle Type"
            placeholder="Search vehicle type..."
            searchPlaceholder="Search vehicle type..."
            emptyText="No vehicle type found"
            createText="Create vehicle type"
            options={vehicleTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <VehicleTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />
        </div>
      </FormSection>

      {/* Vehicle Information */}
      <FormSection title="Vehicle Information" description="Vehicle details">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.name"
            label="Vehicle Name"
            placeholder="Enter vehicle name"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.manufacturer"
            label="Manufacturer"
            placeholder="Enter manufacturer"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.model"
            label="Model"
            placeholder="Enter vehicle model"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.year"
            label="Year"
            type="number"
            placeholder="Enter manufacturing year"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.color"
            label="Color"
            placeholder="Enter vehicle color"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.licensePlate"
            label="License Plate"
            placeholder="Enter license plate"
          />

          <FormSelect<AirportTransferFormSchema>
            name="vehicle.0.transmission"
            label="Transmission"
            options={transmissionOptions}
          />

          <FormEntitySelector<AirportTransferFormSchema, FuelType>
            name="vehicle.0.fuelTypeId"
            label="Fuel Type"
            placeholder="Search fuel type..."
            searchPlaceholder="Search fuel type..."
            emptyText="No fuel type found"
            createText="Create fuel type"
            options={fuelTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FuelTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormSelect<AirportTransferFormSchema>
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
          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.capacity.passengerCount"
            label="Passenger Count"
            type="number"
            placeholder="Enter passenger capacity"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.capacity.luggageCount"
            label="Luggage Count"
            type="number"
            placeholder="Enter luggage capacity"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.capacity.cabinBaggageCount"
            label="Cabin Baggage Count"
            type="number"
            placeholder="Enter cabin baggage capacity"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.capacity.oversizedLuggage"
            label="Oversized Luggage"
            type="number"
            placeholder="Enter oversized luggage capacity"
          />
        </div>
      </FormSection>

      {/* Facilities */}
      <FormSection title="Vehicle Facilities" description="Vehicle amenities">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.facilities"
            label="Facilities"
            placeholder="Enter vehicle facilities"
          />
        </div>
      </FormSection>

      {/* Specification */}
      <FormSection
        title="Vehicle Specification"
        description="Technical specification"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.specification.engineSizeCc"
            label="Engine Size CC"
            type="number"
            placeholder="Enter engine size"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.specification.fuelCapacity"
            label="Fuel Capacity"
            type="number"
            placeholder="Enter fuel capacity"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.specification.mileageKm"
            label="Mileage KM"
            type="number"
            placeholder="Enter mileage"
          />

          <FormInput<AirportTransferFormSchema>
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
          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.images.0.mediaId"
            label="Media ID"
            placeholder="Enter media ID"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.images.0.categoryId"
            label="Image Category ID"
            placeholder="Enter image category ID"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="vehicle.0.images.0.isPrimary"
            label="Primary Image"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
            placeholder="Enter sort order"
          />

          <FormInput<AirportTransferFormSchema>
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
          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.availability.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.availability.0.endDate"
            label="End Date"
            type="date"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="vehicle.0.availability.0.available"
            label="Available"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.availability.0.note"
            label="Note"
            placeholder="Enter availability note"
          />
        </div>
      </FormSection>

      {/* Driver */}
      <FormSection title="Driver" description="Driver information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.drivers.0.firstName"
            label="First Name"
            placeholder="Enter first name"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.drivers.0.lastName"
            label="Last Name"
            placeholder="Enter last name"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.drivers.0.avatar"
            label="Avatar"
            placeholder="Enter avatar URL"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.drivers.0.phone"
            label="Phone"
            placeholder="Enter phone number"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.drivers.0.email"
            label="Email"
            placeholder="Enter email address"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.drivers.0.licenseNumber"
            label="License Number"
            placeholder="Enter license number"
          />

          <FormInput<AirportTransferFormSchema>
            name="vehicle.0.drivers.0.licenseExpiry"
            label="License Expiry"
            type="date"
          />

          <FormEntitySelector<AirportTransferFormSchema, Language>
            name="vehicle.0.drivers.0.languages.0.languageId"
            label="Language"
            placeholder="Search language..."
            searchPlaceholder="Search language..."
            emptyText="No language found"
            createText="Create language"
            options={languageOptions}
            enableCreate
            renderCreateDialog={(props) => <LanguageCreateDialog {...props} />}
          />

          <FormSwitch<AirportTransferFormSchema>
            name="vehicle.0.drivers.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
