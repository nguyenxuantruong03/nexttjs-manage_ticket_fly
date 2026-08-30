"use client";

import { useFlyDelayReasonUpdateFormData } from "@/hooks/product-types/ticket-fly/delay-reason/useFlyDelayReasonUpdateFormData";

import { useParams } from "next/navigation";

import FlyDelayReasonForm from "../../components/FlyDelayReasonForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyDelayReasonEditPage() {
  const params = useParams();

  const delayReasonId = params.delayReasonId as string;

const { data, isLoading, isError, errors, refetch } = useFlyDelayReasonUpdateFormData(delayReasonId);

  if (isLoading) {
    return <LoadingPage />;
  }

 if (isError || !data) {
  return (
    <ErrorPage
      description={errors.delayReason?.message ?? "Không tải được dữ liệu lý do trễ chuyến, vui lòng thử lại."}
      onRetry={refetch}
    />
  );
}

  return <FlyDelayReasonForm initialData={data.initialData} />;
}
