"use client";

import { useParams } from "next/navigation";

import WardForm from "../../components/WardForm";
import { useWardUpdateFormData } from "@/hooks/location/ward/useWardUpdateFormData";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

export default function WardEditPage() {
  const params = useParams();
  const wardId = params.wardId as string;

  const { data, isLoading, isError, errors, refetch } =
    useWardUpdateFormData(wardId);

  if (isLoading) return <LoadingPage />;

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.ward?.message ??
          "Không tải được dữ liệu phường/xã, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <WardForm
      initialData={data.initialData}
      cityData={data.cityData}
      districtData={data.districtData}
      bookingTypeData={data.bookingTypeData}
      searchTagData={data.searchTagData}
    />
  );
}
