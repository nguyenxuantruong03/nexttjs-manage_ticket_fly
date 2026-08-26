"use client";

import { useFlyAllianceUpdateFormData } from "@/hooks/product-types/references/alliance/useFlyAllianceUpdateFormData";

import { useParams } from "next/navigation";

import FlyAllianceForm from "../../components/FlyAllianceForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyAllianceEditPage() {
  const params = useParams();

  const allianceId = params.allianceId as string;

  const { data, isLoading, error } = useFlyAllianceUpdateFormData(allianceId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAllianceForm initialData={data.initialData} />;
}
