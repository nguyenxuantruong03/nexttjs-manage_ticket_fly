"use client";

import FormSection from "@/components/form/FormSection";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { EntityOption } from "@/components/form/entity-selector";

import { Package } from "@/types/common/commerce/package/package.type";

import { FlyFormSchema } from "../form/schema/core/fly.schema";
import PackageCreateDialog from "@/app/(home)/commerce/package/components/PackageCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Currency } from "@/types/location/currency";

interface PackagesStepProps {
  packageData: Package[];
  bookingTypeData: BookingType[];
  currencyData: Currency[];
}

export default function PackagesStep({
  packageData,
  bookingTypeData,
  currencyData,
}: PackagesStepProps) {
  const packageOptions: EntityOption<Package>[] = packageData.map((pkg) => ({
    value: pkg.id,
    label: pkg.name,
    description: pkg.description ?? undefined,
    data: pkg,
  }));

  return (
    <FormSection title="Package Mapper" description="Flight package mapping">
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<FlyFormSchema, Package>
          name="flyPackageMapper.0.packageId"
          label="Package"
          placeholder="Search package..."
          searchPlaceholder="Search package..."
          emptyText="No package found"
          createText="Create package"
          options={packageOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <PackageCreateDialog
              bookingTypeData={bookingTypeData}
              currencyData={currencyData}
              {...props}
            />
          )}
        />
      </div>
    </FormSection>
  );
}
