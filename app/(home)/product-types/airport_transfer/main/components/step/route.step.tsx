"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { WeekDay } from "@/types/common/enums";
import { AirportTransferFormSchema } from "../schema/core/schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";

import { EntityOption } from "@/components/entity-selector";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { RouteType } from "@/types/common/catalog/route-type.type";
import RouteTypeCreateDialog from "@/app/(home)/catalog/route-type/components/RouteTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

const weekDayOptions = Object.values(WeekDay).map((value) => ({
  label: value.toUpperCase(),
  value,
}));

interface RouteStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  routeTypeData: RouteType[];
  bookingTypeData: BookingType[];
}

export default function RouteStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
  routeTypeData,
  bookingTypeData,
}: RouteStepProps) {
  const routeTypeOptions: EntityOption<RouteType>[] = routeTypeData.map(
    (routeType) => ({
      value: routeType.id,
      label: routeType.name ?? "",
      description: routeType.description ?? undefined,
      data: routeType,
    }),
  );

  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));
  return (
    <>
      {/* Route */}
      <FormSection
        title="Route"
        description="Airport transfer route information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<AirportTransferFormSchema, RouteType>
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

          <FormEntitySelector<AirportTransferFormSchema, Address>
            name="routes.0.departureAddressId"
            label="Departure Address"
            placeholder="Enter departure address..."
            searchPlaceholder="Search departure address..."
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

          <FormEntitySelector<AirportTransferFormSchema, Address>
            name="routes.0.arrivalAddressId"
            label="Arrival Address"
            placeholder="Enter arrival address..."
            searchPlaceholder="Search arrival address..."
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

          <FormInput<AirportTransferFormSchema>
            name="routes.0.distanceKm"
            label="Distance KM"
            type="number"
            placeholder="Enter route distance in KM"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.estimatedDuration"
            label="Estimated Duration (minutes)"
            type="number"
            placeholder="Enter estimated duration"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="routes.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      {/* Route Stops */}
      <FormSection title="Route Stops" description="Intermediate stops">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<AirportTransferFormSchema, Address>
            name="routes.0.stops.0.addressId"
            label="Stop Address"
            placeholder="Enter Stop Address..."
            searchPlaceholder="Search Stop Address..."
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

          <FormInput<AirportTransferFormSchema>
            name="routes.0.stops.0.stopOrder"
            label="Stop Order"
            type="number"
            placeholder="Enter stop order"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.stops.0.estimatedArrival"
            label="Estimated Arrival (minutes)"
            type="number"
            placeholder="Enter estimated arrival time"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.stops.0.waitingMinutes"
            label="Waiting Minutes"
            type="number"
            placeholder="Enter waiting minutes"
          />
        </div>
      </FormSection>

      {/* Schedule */}
      <FormSection title="Schedule" description="Operating schedule">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="schedules.0.departureTime"
            label="Departure Time"
            type="time"
          />

          <FormInput<AirportTransferFormSchema>
            name="schedules.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<AirportTransferFormSchema>
            name="schedules.0.endDate"
            label="End Date"
            type="date"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="schedules.0.active"
            label="Active"
          />
        </div>

        <div className="grid gap-6 mt-6">
          {weekDayOptions.map((day, index) => (
            <FormSwitch<AirportTransferFormSchema>
              key={day.value}
              name={`schedules.0.operatingDays.${index}` as any}
              label={day.label}
            />
          ))}
        </div>
      </FormSection>
    </>
  );
}
