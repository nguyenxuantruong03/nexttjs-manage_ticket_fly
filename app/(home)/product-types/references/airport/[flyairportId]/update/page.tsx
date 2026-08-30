"use client";

import { useFlyAirportUpdateFormData } from "@/hooks/product-types/references/airport/useFlyAirportUpdateFormData";
import { useParams } from "next/navigation";
import FlyAirportForm from "../../components/FlyAirportForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyAiportEditPage() {
  const params = useParams();

  const flyairportId = params.flyairportId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyAirportUpdateFormData(flyairportId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.location?.message ??
          errors.flyAirport?.message ??
          "Không tải được dữ liệu sân bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <FlyAirportForm
      initialData={data.initialData}
      addresses={data.addresses}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
      countries={data.countries}
      airportData={data.airportData}
    />
  );
}
