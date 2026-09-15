"use client";

import { useFlyCrewUpdateFormData } from "@/hooks/product-types/references/airline/crew/useFlyCrewUpdateFormData";

import { useParams } from "next/navigation";

import FlyCrewForm from "../../components/FlyCrewForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

export default function FlyCrewEditPage() {
  const params = useParams();

  const crewId = params.crewId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFlyCrewUpdateFormData(crewId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.crew?.message ??
          "Không tải được dữ liệu tổ bay, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return (
    <FlyCrewForm
      initialData={data.initialData}
      roleData={data.roles.data}
      dutyData={data.duties.data}
      airlineData={data.airlines.data}
      aircraftTypeData={data.aircraftTypeData.data}
    />
  );
}
