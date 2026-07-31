"use client";

import { useAddressCreateFormData } from "@/hooks/location/address/useAddressCreateFormData";
import AddressForm from "../components/AddressForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const AddressCreatePage = () => {
  const { data, isLoading, error } = useAddressCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
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
    />
  );
};

export default AddressCreatePage;
