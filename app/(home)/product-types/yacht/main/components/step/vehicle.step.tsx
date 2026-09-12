"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import { YachtFormSchema } from "../form/schema/core/yacht.schema";

import { FuelType } from "@/types/common/catalog/fuel-type";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import FuelTypeCreateDialog from "@/app/(home)/catalog/fuel-type/components/FuelTypeCreateDialog";

import { BookingType } from "@/types/common/commerce/booking-type";

import YachtConditionCreateDialog from "../../../condition/components/YachtConditionCreateDialog";

import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

import { Facility } from "@/types/common/features/facility/facility";

import FacilityCreateDialog from "@/app/(home)/features/facility/main/components/FacilityCreateDialog";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

import { MediaCategory } from "@/types/common/catalog/media-category";
import { MediaAsset } from "@/types/common/catalog/media-asset";

import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";
import MediaCategoryCreateDialog from "@/app/(home)/catalog/media-category/components/MediaCategoryCreateDialog";

interface VehicleStepProps {
  fuelTypeData: FuelType[];
  bookingTypeData: BookingType[];
  conditionData: YachtCondition[];
  facilityData: Facility[];
  facilityCategoryData: FacilityCategory[];
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
}

export default function VehicleStep({
  fuelTypeData,
  bookingTypeData,
  conditionData,
  facilityData,
  facilityCategoryData,
  mediaCategoryData,
  mediaAssetData,
}: VehicleStepProps) {
  const fuelTypeOptions: EntityOption<FuelType>[] = fuelTypeData.map(
    (fuelType) => ({
      value: fuelType.id,
      label: fuelType.name ?? "",
      data: fuelType,
    }),
  );

  const conditionOptions: EntityOption<YachtCondition>[] =
    conditionData.map((condition) => ({
      value: condition.id,
      label: condition.name ?? "",
      description: condition.description ?? undefined,
      data: condition,
    }));

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
        title="Yacht Vehicle"
        description="Basic yacht vehicle information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="vehicle.name"
            label="Yacht Name"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.manufacturer"
            label="Manufacturer"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.model"
            label="Model"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.year"
            label="Manufacture Year"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="vehicle.registrationNumber"
            label="Registration Number"
          />

          <FormEntitySelector<YachtFormSchema, FuelType>
            name="vehicle.fuelTypeId"
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

          <FormEntitySelector<YachtFormSchema, YachtCondition>
            name="vehicle.conditionId"
            label="Condition"
            placeholder="Search condition..."
            searchPlaceholder="Search condition..."
            emptyText="No condition found"
            createText="Create condition"
            options={conditionOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <YachtConditionCreateDialog {...props} />
            )}
          />
        </div>
      </FormSection>

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

      <FormSection
        title="Vehicle Facilities"
        description="Vehicle facility configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<YachtFormSchema, Facility>
            name="vehicle.facilities.0.facilityId"
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

          <FormSwitch<YachtFormSchema>
            name="vehicle.facilities.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Images"
        description="Yacht vehicle image configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<YachtFormSchema, MediaAsset>
            name="vehicle.images.0.mediaId"
            label="Media Asset"
            placeholder="Search media asset..."
            searchPlaceholder="Search media asset..."
            emptyText="No media asset found"
            createText="Create media asset"
            options={mediaAssetOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <MediaAssetCreateDialog
                folder="yacht/vehicle"
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormEntitySelector<YachtFormSchema, MediaCategory>
            name="vehicle.images.0.categoryId"
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