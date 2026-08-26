"use client";

import { useFlySeatTypeUpdateFormData } from "@/hooks/product-types/ticket-fly/seat-type/useFlySeatTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlySeatTypeForm from "../../components/FlySeatTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlySeatTypeEditPage() {
  const params = useParams();

  const seatTypeId = params.seatTypeId as string;

  const { data, isLoading, error } =
    useFlySeatTypeUpdateFormData(seatTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlySeatTypeForm initialData={data.initialData} />;
}