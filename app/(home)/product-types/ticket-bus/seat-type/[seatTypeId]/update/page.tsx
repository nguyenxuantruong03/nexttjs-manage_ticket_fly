"use client";

import { useParams } from "next/navigation";

import BusSeatTypeForm from "../../components/BusSeatTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useBusSeatTypeUpdateFormData } from "@/hooks/product-types/bus/seat-type/useSeatTypeUpdateFormData";

export default function BusSeatTypeEditPage() {
  const params = useParams();

  const seatTypeId = params.seatTypeId as string;

  const { data, isLoading, error } = useBusSeatTypeUpdateFormData(seatTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BusSeatTypeForm initialData={data.initialData} />;
}
