"use client";

import { useParams } from "next/navigation";

import ContinentForm from "../../components/ContinentForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useContinent } from "@/hooks/location/country/continent";

export default function ContinentEditPage() {
  const params = useParams();

  const continentId = params.continentId as string;

  const { data, isLoading, isError, error, refetch } =
    useContinent(continentId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          (error as Error)?.message ??
          "Không tải được dữ liệu châu lục, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <ContinentForm initialData={data} />;
}
