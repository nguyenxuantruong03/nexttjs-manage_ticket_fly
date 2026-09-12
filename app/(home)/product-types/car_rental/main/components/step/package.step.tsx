// step/package.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";
import { Package } from "@/types/common/commerce/package/package.type";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import PackageCreateDialog from "@/app/(home)/commerce/package/components/PackageCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Currency } from "@/types/location/currency";

interface PackageStepProps {
  packageData: Package[];
  bookingTypeData: BookingType[];
  currencyData: Currency[];
}

export default function PackageStep({
  packageData,
  bookingTypeData,
  currencyData,
}: PackageStepProps) {
  const packageOptions: EntityOption<Package>[] = packageData.map((pkg) => ({
    value: pkg.id,
    label: pkg.name,
    description: pkg.description ?? undefined,
    data: pkg,
  }));
  return (
    <>
      <FormSection title="Package" description="Bundled package mapping">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, Package>
            name="carRentalPackageMapper.0.packageId"
            label="Package"
            placeholder="Search package..."
            searchPlaceholder="Search package..."
            emptyText="No package found"
            createText="Create package"
            options={packageOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <PackageCreateDialog
                currencyData={currencyData}
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
