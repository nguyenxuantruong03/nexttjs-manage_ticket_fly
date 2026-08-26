"use client";

import { useFlyCrewDutyUpdateFormData } from "@/hooks/product-types/references/airline/crew/crew-duty/useFlyCrewDutyUpdateFormData";

import { useParams } from "next/navigation";

import FlyCrewDutyForm from "../../components/FlyCrewDutyForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyCrewDutyEditPage() {
  const params = useParams();

  const crewDutyId = params.crewDutyId as string;

  const { data, isLoading, error } = useFlyCrewDutyUpdateFormData(crewDutyId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyCrewDutyForm initialData={data.initialData} />;
}
