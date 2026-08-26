// step/vehicles.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import VehicleTypeCreateDialog from "@/app/(home)/catalog/vehicle-type/components/VehicleTypeCreateDialog";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";
import {
  RentalFuelType,
  RentalTransmission,
  RentalVehicleCondition,
  RentalVehicleStatus,
} from "@/types/product-types/car_rental/enums";
import { Facility } from "@/types/common/features/facility/facility";
import FacilityCreateDialog from "@/app/(home)/features/facility/components/FacilityCreateDialog";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";

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

interface VehiclesStepProps {
  bookingTypeData: BookingType[];
  vehicleTypeData: VehicleType[];
  facilityData: Facility[];
  facilityCategoryData: FacilityCategory[];
}

export default function VehiclesStep({
  bookingTypeData,
  vehicleTypeData,
  facilityData,
  facilityCategoryData,
}: VehiclesStepProps) {
  const vehicleTypeEntityOptions: EntityOption<VehicleType>[] =
    vehicleTypeData.map((vehicleType) => ({
      value: vehicleType.id,
      label: vehicleType.name,
      description: vehicleType.description ?? undefined,
      data: vehicleType,
    }));

  const facilityOptions: EntityOption<Facility>[] = facilityData.map(
    (facility) => ({
      value: facility.id,
      label: facility.name,
      description: facility.description ?? undefined,
      data: facility,
    }),
  );

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

      <FormSection
        title="Vehicle Documents"
        description="Vehicle registration and legal documents"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema>
            name="vehicle.0.document.0.type"
            label="Document Type"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.document.0.url"
            label="Document URL"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.document.0.expiryDate"
            label="Expiry Date"
            type="date"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Facilities"
        description="Equipped facilities and amenities"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, Facility>
            name="vehicle.0.facilities.0.facilityId"
            label="Facility"
            placeholder="Search facility..."
            searchPlaceholder="Search facility..."
            emptyText="No facility found"
            createText="Create facility"
            options={facilityOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FacilityCreateDialog
                facilityCategoryData={facilityCategoryData}
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.facilities.0.quantity"
            label="Quantity"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.facilities.0.note"
            label="Note"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Media"
        description="Vehicle photos and media gallery"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema>
            name="vehicle.0.medias.0.mediaId"
            label="Media ID"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.medias.0.categoryId"
            label="Category ID"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.medias.0.position"
            label="Position"
            type="number"
          />

          <FormSwitch<CarRentalFormSchema>
            name="vehicle.0.medias.0.isPrimary"
            label="Is Primary"
          />

          <FormInput<CarRentalFormSchema>
            name="vehicle.0.medias.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Vehicle Type" description="Select the vehicle type">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, VehicleType>
            name="vehicle.0.vehicleTypeId"
            label="Vehicle Type"
            placeholder="Search vehicle type..."
            searchPlaceholder="Search vehicle type..."
            emptyText="No vehicle type found"
            createText="Create vehicle type"
            options={vehicleTypeEntityOptions}
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
    </>
  );
}
