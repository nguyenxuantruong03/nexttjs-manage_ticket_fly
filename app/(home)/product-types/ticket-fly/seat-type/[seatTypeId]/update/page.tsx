"use client";

import { useFlySeatTypeUpdateFormData } from "@/hooks/product-types/ticket-fly/seat-type/useFlySeatTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlySeatTypeForm from "../../components/FlySeatTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlySeatTypeEditPage() {
  const params = useParams();

  const seatTypeId = params.seatTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlySeatTypeUpdateFormData(seatTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.seatType?.message ??
          "Không tải được dữ liệu loại ghế, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FlySeatTypeForm initialData={data.initialData} />;
}
