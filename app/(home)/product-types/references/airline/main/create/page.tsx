"use client";

import FlyAirlineForm from "../components/FlyAirlineForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useFlyAirlineCreateFormData } from "@/hooks/product-types/references/airline/useFlyAirlineCreateFormData";

const FlyAirlineCreatePage = () => {
  const { data, isLoading, isError, errors, refetch } =
    useFlyAirlineCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.airline?.message ??
          "Không tải được dữ liệu hãng bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyAirlineForm mediaCategoryData={data.mediaCategoryData.data}
      mediaAssetData={data.mediaAssetData.data}
      bookingTypeData={data.bookingTypeData.data}/>;
};

export default FlyAirlineCreatePage;
