"use client";

import { ServiceTypeService } from "@/services/catalog/service-type/client";

import { BookingTypeService } from "@/services/commerce/booking-type/client";

import { useQuery } from "@tanstack/react-query";

export const useServiceTypeUpdateFormData = (
  serviceTypeId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["service-type-update", serviceTypeId],

    enabled: enabled && !!serviceTypeId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [serviceTypeData, bookingTypes] = await Promise.all([
        ServiceTypeService.getOne(serviceTypeId),
        BookingTypeService.getMany(),
      ]);

      return {
        serviceTypeData,
        bookingTypes,
      };
    },
  });
};