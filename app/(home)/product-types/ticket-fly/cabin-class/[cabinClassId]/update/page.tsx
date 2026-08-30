"use client";

import { useFlyCabinClassUpdateFormData } from "@/hooks/product-types/ticket-fly/cabin-class/useFlyCabinClassUpdateFormData";

import { useParams } from "next/navigation";

import FlyCabinClassForm from "../../components/FlyCabinClassForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyCabinClassEditPage() {
  const params = useParams();

  const cabinClassId = params.cabinClassId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyCabinClassUpdateFormData(cabinClassId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.cabinClass?.message ??
          "Không tải được dữ liệu hạng ghế, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlyCabinClassForm initialData={data.initialData} />;
}
