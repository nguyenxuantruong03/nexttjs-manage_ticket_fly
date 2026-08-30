// step/packages.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { HotelSchemaForm } from "../form/schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import { Package } from "@/types/common/commerce/package/package.type";
import PackageCreateDialog from "@/app/(home)/commerce/package/components/PackageCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Currency } from "@/types/location/currency";

// NOTE: this step file did not exist before even though
// `hotelFieldGroups.packages` was already defined. Type + dialog names
// guessed — please verify against the actual package module.

interface PackagesStepProps {
  packageData: Package[];
  currencyData: Currency[];
  bookingTypeData: BookingType[];
}

export default function PackagesStep({
  packageData,
  currencyData,
  bookingTypeData,
}: PackagesStepProps) {
  const packageOptions: EntityOption<Package>[] = packageData.map((pkg) => ({
    value: pkg.id,
    label: pkg.name,
    description: pkg.description ?? undefined,
    data: pkg,
  }));

  return (
    <>
      {/* ======================================================
          PACKAGES
      ====================================================== */}

      <FormSection title="Packages" description="Bundled hotel packages">
        <FormEntityMultiSelector<HotelSchemaForm, Package>
          name="hotelPackageMapper.0.packageId"
          label="Packages"
          placeholder="Search packages..."
          searchPlaceholder="Search packages..."
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
      </FormSection>
    </>
  );
}
