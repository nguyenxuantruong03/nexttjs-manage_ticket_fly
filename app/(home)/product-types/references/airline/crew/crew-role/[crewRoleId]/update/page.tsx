"use client";

import { useFlyCrewRoleUpdateFormData } from "@/hooks/product-types/references/airline/crew/crew-role/useFlyCrewRoleUpdateFormData";

import { useParams } from "next/navigation";

import FlyCrewRoleForm from "../../components/FlyCrewRoleForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

export default function FlyCrewRoleEditPage() {
  const params = useParams();

  const crewRoleId = params.crewRoleId as string;

  const { data, isLoading, error } = useFlyCrewRoleUpdateFormData(crewRoleId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyCrewRoleForm initialData={data.initialData} />;
}
