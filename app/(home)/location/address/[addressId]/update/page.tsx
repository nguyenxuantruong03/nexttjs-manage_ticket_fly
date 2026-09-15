"use client";

import { useParams } from "next/navigation";

import AddressForm from "../../components/AddressForm";
import { useAddressUpdateFormData } from "@/hooks/location/address/useAddressUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function AddressEditPage() {
  const params = useParams();
  const addressId = params.addressId as string;

  const { data, isLoading, isError, errors, refetch } =
    useAddressUpdateFormData(addressId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.address?.message ??
          "Không tải được dữ liệu địa chỉ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <AddressForm
      initialData={data.addressData}
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
}
