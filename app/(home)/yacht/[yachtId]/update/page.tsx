"use client";

import { useParams } from "next/navigation";

import YachtForm from "../../components/YachtForm";
import { useYachtUpdateFormData } from "@/hooks/yacht/useYachtUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function YachtEditPage() {
  const params = useParams();

  const yachtId = params.yachtId as string;

  const { data, isLoading, error } = useYachtUpdateFormData(yachtId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <YachtForm
      initialData={data.initialData}
      searchTagData={data.searchTagData}
      addresses={data.addresses}
      countries={data.countries}
      cities={data.cities}
      districts={data.districts}
      wards={data.wards}
    />
  );
}
