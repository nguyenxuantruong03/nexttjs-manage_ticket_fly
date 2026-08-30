"use client";

import { useParams } from "next/navigation";
import SustainabilityForm from "../../components/SustainabilityForm";
import { useHotelSustainabilityUpdateFormData } from "@/hooks/product-types/hotel/hotel-sustainability/useHotelSustainabilityUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function SustainabilityEditPage() {
  const params = useParams();

  const sustainabilityId = params.sustainabilityId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelSustainabilityUpdateFormData(sustainabilityId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.sustainability?.message ??
          "Không tải được dữ liệu tiêu chí bền vững, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <SustainabilityForm initialData={data.initialData} />;
}