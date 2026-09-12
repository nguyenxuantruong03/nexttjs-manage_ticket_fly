"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import { BusFormSchema } from "../form/schema/core/bus.schema";

import { EntityOption } from "@/components/form/entity-selector";

import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";
import { FuelType } from "@/types/common/catalog/fuel-type";

import { Facility } from "@/types/common/features/facility/facility";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";

import { MediaCategory } from "@/types/common/catalog/media-category";
import { MediaAsset } from "@/types/common/catalog/media-asset";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import VehicleTypeCreateDialog from "@/app/(home)/catalog/vehicle-type/components/VehicleTypeCreateDialog";
import FuelTypeCreateDialog from "@/app/(home)/catalog/fuel-type/components/FuelTypeCreateDialog";
import FacilityCreateDialog from "@/app/(home)/features/facility/main/components/FacilityCreateDialog";
import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";
import MediaCategoryCreateDialog from "@/app/(home)/catalog/media-category/components/MediaCategoryCreateDialog";

import { BusVehicleStatus } from "@/types/product-types/bus/enums";

const vehicleStatusOptions = Object.values(BusVehicleStatus).map(
  (value) => ({
    label: value.replace(/\_/g, " ").toUpperCase(),
    value,
  }),
);

interface VehiclesStepProps {
  vehicleTypeData: VehicleType[];
  bookingTypeData: BookingType[];
  fuelTypeData: FuelType[];
  facilityData: Facility[];
  facilityCategoryData: FacilityCategory[];
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
}

export default function VehiclesStep({
  vehicleTypeData,
  bookingTypeData,
  fuelTypeData,
  facilityData,
  facilityCategoryData,
  mediaCategoryData,
  mediaAssetData,
}: VehiclesStepProps) {
  const vehicleTypeEntityOptions: EntityOption<VehicleType>[] =
    vehicleTypeData.map((vehicleType) => ({
      value: vehicleType.id,
      label: vehicleType.name,
      description: vehicleType.description ?? undefined,
      data: vehicleType,
    }));

  const fuelTypeOptions: EntityOption<FuelType>[] = fuelTypeData.map(
    (fuelType) => ({
      value: fuelType.id,
      label: fuelType.name,
      data: fuelType,
    }),
  );

  const facilityOptions: EntityOption<Facility>[] = facilityData.map(
    (facility) => ({
      value: facility.id,
      label: facility.name,
      description: facility.description ?? undefined,
      data: facility,
    }),
  );

  const mediaCategoryOptions: EntityOption<MediaCategory>[] =
    mediaCategoryData.map((mediaCategory) => ({
      value: mediaCategory.id,
      label: mediaCategory.name,
      description: mediaCategory.description ?? undefined,
      data: mediaCategory,
    }));

  const mediaAssetOptions: EntityOption<MediaAsset>[] = mediaAssetData.map(
    (mediaAsset) => ({
      value: mediaAsset.id,
      label: mediaAsset.caption ?? "",
      data: mediaAsset,
    }),
  );

  return (
    <>
      <FormSection
        title="Vehicle"
        description="General vehicle information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, VehicleType>
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

          <FormSelect<BusFormSchema>
            name="vehicle.0.status"
            label="Status"
            options={vehicleStatusOptions}
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.name"
            label="Vehicle Name"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.manufacturer"
            label="Manufacturer"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.model"
            label="Model"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.year"
            label="Year"
            type="number"
          />

          <FormSwitch<BusFormSchema>
            name="vehicle.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection
        title="Capacity"
        description="Vehicle capacity"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="vehicle.0.capacity.totalSeats"
            label="Total Seats"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.capacity.sleeperBeds"
            label="Sleeper Beds"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.capacity.cabinRooms"
            label="Cabin Rooms"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.capacity.luggageCapacityKg"
            label="Luggage Capacity (Kg)"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Facilities"
        description="Vehicle facilities"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, Facility>
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
                bookingTypeData={bookingTypeData}
                facilityCategoryData={facilityCategoryData}
                {...props}
              />
            )}
          />

          <FormSwitch<BusFormSchema>
            name="vehicle.0.facilities.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection
        title="Specification"
        description="Vehicle specifications"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="vehicle.0.specification.engineType"
            label="Engine Type"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.specification.transmission"
            label="Transmission"
          />

          <FormEntitySelector<BusFormSchema, FuelType>
            name="vehicle.0.specification.fuelTypeId"
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

          <FormInput<BusFormSchema>
            name="vehicle.0.specification.suspension"
            label="Suspension"
          />

          <FormSwitch<BusFormSchema>
            name="vehicle.0.specification.airConditioning"
            label="Air Conditioning"
          />

          <FormSwitch<BusFormSchema>
            name="vehicle.0.specification.wifiAvailable"
            label="WiFi Available"
          />

          <FormSwitch<BusFormSchema>
            name="vehicle.0.specification.toiletAvailable"
            label="Toilet Available"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Images"
        description="Vehicle gallery"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, MediaAsset>
            name="vehicle.0.images.0.mediaId"
            label="Media Asset"
            placeholder="Search media asset..."
            searchPlaceholder="Search media asset..."
            emptyText="No media asset found"
            createText="Create media asset"
            options={mediaAssetOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <MediaAssetCreateDialog
              folder="bus/vehicle"
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormEntitySelector<BusFormSchema, MediaCategory>
            name="vehicle.0.images.0.categoryId"
            label="Media Category"
            placeholder="Search media category..."
            searchPlaceholder="Search media category..."
            emptyText="No media category found"
            createText="Create media category"
            options={mediaCategoryOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <MediaCategoryCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.images.0.alt"
            label="Alt Text"
          />

          <FormInput<BusFormSchema>
            name="vehicle.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<BusFormSchema>
            name="vehicle.0.images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>
    </>
  );
}