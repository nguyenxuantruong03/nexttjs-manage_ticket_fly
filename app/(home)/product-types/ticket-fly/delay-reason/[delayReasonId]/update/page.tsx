"use client";

import { useFlyDelayReasonUpdateFormData } from "@/hooks/product-types/ticket-fly/delay-reason/useFlyDelayReasonUpdateFormData";

import { useParams } from "next/navigation";

import FlyDelayReasonForm from "../../components/FlyDelayReasonForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyDelayReasonEditPage() {
  const params = useParams();

  const delayReasonId = params.delayReasonId as string;

  const { data, isLoading, error } =
    useFlyDelayReasonUpdateFormData(delayReasonId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyDelayReasonForm initialData={data.initialData} />;
}
