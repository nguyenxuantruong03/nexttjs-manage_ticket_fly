"use client";

import { useParams } from "next/navigation";

import BusSeatTypeForm from "../../components/BusSeatTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useBusSeatTypeUpdateFormData } from "@/hooks/product-types/bus/seat-type/useSeatTypeUpdateFormData";

export default function BusSeatTypeEditPage() {
  const params = useParams();

  const seatTypeId = params.seatTypeId as string;

  const { data, isLoading, isError, errors, refetch } =
    useBusSeatTypeUpdateFormData(seatTypeId);

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

  return <BusSeatTypeForm initialData={data.initialData} />;
}
