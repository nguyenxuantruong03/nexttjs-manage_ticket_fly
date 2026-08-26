"use client";

import { useFlyCrewUpdateFormData } from "@/hooks/product-types/references/airline/crew/useFlyCrewUpdateFormData";

import { useParams } from "next/navigation";

import FlyCrewForm from "../../components/FlyCrewForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

export default function FlyCrewEditPage() {
  const params = useParams();

  const crewId = params.crewId as string;

  const { data, isLoading, error } = useFlyCrewUpdateFormData(crewId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <FlyCrewForm
      initialData={data.initialData}
      roleData={data.roles}
      dutyData={data.duties}
      airlineData={data.airlines}
      aircraftTypeData={data.aircraftTypeData}
    />
  );
}
