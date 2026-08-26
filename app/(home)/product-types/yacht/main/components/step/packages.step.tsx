import FormSection from "@/components/form/FormSection";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { EntityOption } from "@/components/entity-selector";

import { Package } from "@/types/common/commerce/package/package.type";

import { YachtFormSchema } from "../schema/core/yacht.schema";
import PackageCreateDialog from "@/app/(home)/commerce/package/components/PackageCreateDialog";
import { Currency } from "@/types/location/currency";
import { BookingType } from "@/types/common/commerce/booking-type";

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
      <FormSection title="Packages" description="Yacht package mapping">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<YachtFormSchema, Package>
            name="yachtPackageMapper.0.packageId"
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
