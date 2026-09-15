"use client";

import { useParams } from "next/navigation";

import YachtForm from "../../components/YachtForm";
import { useYachtUpdateFormData } from "@/hooks/product-types/yacht/useYachtUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function YachtEditPage() {
  const params = useParams();

  const yachtId = params.yachtId as string;

  const { data, isLoading, isError, errors, refetch } =
    useYachtUpdateFormData(yachtId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.yacht?.message ??
          errors.location?.message ??
          "Không tải được dữ liệu du thuyền, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <YachtForm
      initialData={data.initialData}
      searchTagData={data.searchTagData.data}
      addresses={data.addresses.data}
      countries={data.countries.data}
      cities={data.cities.data}
      districts={data.districts.data}
      wards={data.wards.data}
      bookingTypeData={data.bookingTypeData.data}
      fuelTypeData={data.fuelTypeData.data}
      conditionData={data.conditionData.data}
      extraFeeTypeData={data.extraFeeTypeData.data}
      crewRoleData={data.crewRoleData.data}
      facilityData={data.facilityData.data}
      facilityCategoryData={data.facilityCategoryData.data}
      providerBookingData={data.providerBookingData.data}
      serviceTypeData={data.serviceTypeData.data}
      bookingItemTypeData={data.bookingItemTypeData.data}
      routeTypeData={data.routeTypeData.data}
      packageData={data.packageData.data}
      currencyData={data.currencyData.data}
      policyData={data.policyData.data}
      policyTypeData={data.policyTypeData.data}
      extraData={data.extraData.data}
      extraTypeData={data.extraTypeData.data}
      mediaCategoryData={data.mediaCategoryData.data}
      mediaAssetData={data.mediaAssetData.data}
    />
  );
}
