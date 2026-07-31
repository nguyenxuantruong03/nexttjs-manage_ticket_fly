"use client";

import { useParams } from "next/navigation";
import BathRoomTypeForm from "../../components/BathroomTypeForm";
import { useHotelBathroomTypeUpdateFormData } from "@/hooks/hotel/hotel-bathroom-type/useHotelBathroomTypeUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function BathRoomTypeEditPage() {
  const params = useParams();

  const bathroomTypeId = params.bathroomTypeId as string;

  const { data, isLoading, error } =
    useHotelBathroomTypeUpdateFormData(bathroomTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <BathRoomTypeForm initialData={data.initialData} />;
}
