"use client";

import { useYachtCrewRoleUpdateFormData } from "@/hooks/product-types/yacht/crew-role/useYachtCrewRoleUpdateFormData";
import { useParams } from "next/navigation";

import YachtCrewRoleForm from "../../components/YachtCrewRoleForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function YachtCrewRoleEditPage() {
  const params = useParams();

  const crewRoleId = params.crewRoleId as string;

  const { data, isLoading, error } = useYachtCrewRoleUpdateFormData(crewRoleId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <YachtCrewRoleForm initialData={data.initialData} />;
}
