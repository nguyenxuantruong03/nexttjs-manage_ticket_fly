"use client";

import { useFlyAirlineUpdateFormData } from "@/hooks/product-types/references/airline/useFlyAirlineUpdateFormData";

import { useParams } from "next/navigation";

import FlyAirlineForm from "../../components/FlyAirlineForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyAirlineEditPage() {
  const params = useParams();

  const airlineId = params.airlineId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyAirlineUpdateFormData(airlineId);

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

  return <FlyAirlineForm initialData={data} />;
}
