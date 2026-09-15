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
      cityData={data.cityData.data}
      districtData={data.districtData.data}
      wardData={data.wardData.data}
      countryData={data.countryData.data}
      currencyData={data.currencyData.data}
      languageData={data.languageData.data}
      timezoneData={data.timezoneData.data}
      searchTags={data.searchTagData.data}
      bookingTypeData={data.bookingTypeData.data}
      continentsData={data.continentsData.data}
    />
  );
};

export default AddressCreatePage;
