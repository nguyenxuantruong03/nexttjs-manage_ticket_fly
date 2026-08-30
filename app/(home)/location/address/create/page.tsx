"use client";

import { useAddressCreateFormData } from "@/hooks/location/address/useAddressCreateFormData";
import AddressForm from "../components/AddressForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const AddressCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useAddressCreateFormData();

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description="Không tải được dữ liệu địa chỉ, vui lòng thử lại."
        onRetry={refetch}
      />
    );
  }

  return (
    <AddressForm
      cityData={data.cityData}
      districtData={data.districtData}
      wardData={data.wardData}
      countryData={data.countryData}
      currencyData={data.currencyData}
      languageData={data.languageData}
      timezoneData={data.timezoneData}
      searchTags={data.searchTagData}
      bookingTypeData={data.bookingTypeData}
      continentsData={data.continentsData}
    />
  );
};

export default AddressCreatePage;
