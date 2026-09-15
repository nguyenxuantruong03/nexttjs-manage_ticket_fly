"use client";

import { useCarrentalCreateFormData } from "@/hooks/product-types/car-rental/useCarrentalCreateFormData";
import CarrentalForm from "../components/CarrentalForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function CarrentalCreatePage() {
  const { data, isLoading, isError, errors, refetch } =
    useCarrentalCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.carRental?.message ??
          "Không tải được dữ liệu xe cho thuê, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <CarrentalForm
      searchTagData={data.searchTagData.data}
      addresses={data.addresses.data}
      countries={data.countries.data}
      cities={data.cities.data}
      districts={data.districts.data}
      wards={data.wards.data}
      bookingTypeData={data.bookingTypeData.data}
      vehicleTypeData={data.vehicleTypeData.data}
      priceRuleTypeData={data.priceRuleTypeData.data}
      insuranceBenefitTypeData={data.insuranceBenefitTypeData.data}
      insuranceTypeData={data.insuranceTypeData.data}
      extraTypeData={data.extraTypeData.data}
      extraData={data.extraData.data}
      providerBookingData={data.providerBookingData.data}
      serviceTypeData={data.serviceTypeData.data}
      bookingItemTypeData={data.bookingItemTypeData.data}
      packageData={data.packageData.data}
      currencyData={data.currencyData.data}
      policyData={data.policyData.data}
      policyTypeData={data.policyTypeData.data}
      documentTypeData={data.documentTypeData.data}
      facilityData={data.facilityData.data}
      facilityCategoryData={data.facilityCategoryData.data}
      mediaCategoryData={data.mediaCategoryData.data}
      mediaAssetData={data.mediaAssetData.data}
    />
  );
}
