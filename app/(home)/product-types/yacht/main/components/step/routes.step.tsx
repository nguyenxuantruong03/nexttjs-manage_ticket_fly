import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { EntityOption } from "@/components/entity-selector";

import { Address } from "@/types/location/address";

import { YachtFormSchema } from "../schema/core/yacht.schema";

import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { YachtMarina } from "@/types/product-types/yacht/marina/marina.types";
import { RouteType } from "@/types/common/catalog/route-type.type";
import RouteTypeCreateDialog from "@/app/(home)/catalog/route-type/components/RouteTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface RoutesStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];

  routeTypeData: RouteType[];
  bookingTypeData: BookingType[];
}

export default function RoutesStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
  routeTypeData,
  bookingTypeData,
}: RoutesStepProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  const routeTypeOptions: EntityOption<RouteType>[] = routeTypeData.map(
    (routeType) => ({
      value: routeType.id,
      label: routeType.name,
      description: routeType.description ?? undefined,
      data: routeType,
    }),
  );

  return (
    <>
      <FormSection
        title="Route Information"
        description="Yacht departure and destination route"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<YachtFormSchema, RouteType>
            name="routes.0.routeTypeId"
            label="Route Type"
            placeholder="Search route type..."
            searchPlaceholder="Search route type..."
            emptyText="No route type found"
            createText="Create route type"
            options={routeTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <RouteTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormEntitySelector<YachtFormSchema, Address>
            name="routes.0.departureMarinaId"
            label="Departure Marina"
            placeholder="Search departure marina..."
            searchPlaceholder="Search departure marina..."
            emptyText="No marina found"
            createText="Create marina"
            options={addressOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <AddressCreateDialog
                countries={countries}
                cities={cities}
                districts={districts}
                wards={wards}
                {...props}
              />
            )}
          />

          <FormEntitySelector<YachtFormSchema, Address>
            name="routes.0.destinationMarinaId"
            label="Destination Marina"
            placeholder="Search destination marina..."
            searchPlaceholder="Search destination marina..."
            emptyText="No marina found"
            createText="Create marina"
            options={addressOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <AddressCreateDialog
                countries={countries}
                cities={cities}
                districts={districts}
                wards={wards}
                {...props}
              />
            )}
          />

          <FormInput<YachtFormSchema>
            name="routes.0.destinationName"
            label="Destination Name"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.distanceNm"
            label="Distance (NM)"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.durationMinutes"
            label="Duration Minutes"
            type="number"
          />

          <FormSwitch<YachtFormSchema> name="routes.0.active" label="Active" />
        </div>
      </FormSection>

      <FormSection
        title="Route Stops"
        description="Intermediate stops during trip"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="routes.0.stops.0.name"
            label="Stop Name"
          />

          <FormEntitySelector<YachtFormSchema, Address>
            name="routes.0.stops.0.addressId"
            label="Stop Address"
            placeholder="Search address..."
            searchPlaceholder="Search address..."
            emptyText="No address found"
            createText="Create address"
            options={addressOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <AddressCreateDialog
                {...props}
                countries={countries}
                cities={cities}
                districts={districts}
                wards={wards}
              />
            )}
          />

          <FormInput<YachtFormSchema>
            name="routes.0.stops.0.stopDurationMinutes"
            label="Stop Duration Minutes"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="routes.0.stops.0.order"
            label="Stop Order"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
