"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { routeTypeFormConfig } from "./config";

import {
  useCreateRouteType,
  useUpdateRouteType,
} from "@/hooks/catalog/route-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { RouteType } from "@/types/common/catalog/route-type.type";

import { RouteTypeFormSchema } from "./form/schema";

interface RouteTypeFormProps {
  initialData?: RouteType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function RouteTypeForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: RouteTypeFormProps) {
  const createRouteType = useCreateRouteType();

  const updateRouteType = useUpdateRouteType();

  return (
    <EntityFormWizard<RouteTypeFormSchema, RouteType>
      initialData={initialData}
      redirect={redirect}
      config={routeTypeFormConfig}
      createMutation={createRouteType}
      updateMutation={updateRouteType}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
