"use client";

import FormSection from "@/components/form/FormSection";

import { AirportTransferFormSchema } from "../form/schema/core/schema";
import { Package } from "@/types/common/commerce/package/package.type";
import { EntityOption } from "@/components/entity-selector";
import PackageCreateDialog from "@/app/(home)/commerce/package/components/PackageCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { Currency } from "@/types/location/currency";
import { BookingType } from "@/types/common/commerce/booking-type";

interface PackageStepProps {
  packageData: Package[];
  currencyData: Currency[];
  bookingTypeData: BookingType[];
}

export default function PackageStep({
  packageData,
  currencyData,
  bookingTypeData,
}: PackageStepProps) {
  const packageOptions: EntityOption<Package>[] = packageData.map((pkg) => ({
    value: pkg.id,
    label: pkg.name,
    description: pkg.description ?? undefined,
    data: pkg,
  }));
  return (
    <>
      {/* Package */}
      <FormSection title="Package" description="Associated package">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<AirportTransferFormSchema, Package>
            name="airportTransferPackageMapper.0.packageId"
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
