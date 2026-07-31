"use client";

import { useParams } from "next/navigation";
import BedTypeForm from "../../components/BedTypeForm";
import { useHotelBedTypeUpdateFormData } from "@/hooks/hotel/hotel-bed-type/useHotelBedTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function BedTypeEditPage() {
  const params = useParams();

  const bedTypeId = params.bedTypeId as string;

  const { data, isLoading, error } = useHotelBedTypeUpdateFormData(bedTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BedTypeForm initialData={data.initialData} />;
}
