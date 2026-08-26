"use client";

import { useFlyCabinClassUpdateFormData } from "@/hooks/product-types/ticket-fly/cabin-class/useFlyCabinClassUpdateFormData";

import { useParams } from "next/navigation";

import FlyCabinClassForm from "../../components/FlyCabinClassForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyCabinClassEditPage() {
  const params = useParams();

  const cabinClassId = params.cabinClassId as string;

  const { data, isLoading, error } =
    useFlyCabinClassUpdateFormData(cabinClassId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyCabinClassForm initialData={data.initialData} />;
}
