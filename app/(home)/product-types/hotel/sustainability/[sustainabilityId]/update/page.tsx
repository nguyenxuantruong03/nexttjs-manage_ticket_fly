"use client";

import { useParams } from "next/navigation";
import SustainabilityForm from "../../components/SustainabilityForm";
import { useHotelSustainabilityUpdateFormData } from "@/hooks/product-types/hotel/hotel-sustainability/useHotelSustainabilityUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function SustainabilityEditPage() {
  const params = useParams();

  const sustainabilityId = params.sustainabilityId as string;

  const { data, isLoading, error } =
    useHotelSustainabilityUpdateFormData(sustainabilityId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <SustainabilityForm initialData={data.initialData} />;
}
