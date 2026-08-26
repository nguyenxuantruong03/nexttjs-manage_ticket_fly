"use client";

import YachtCrewRoleForm from "../components/YachtCrewRoleForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import { useYachtCrewRoleCreateFormData } from "@/hooks/product-types/yacht/crew-role/useYachtCrewRoleCreateFormData";

const YachtCrewRoleCreatePage = () => {
  const { data, isLoading, error } = useYachtCrewRoleCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <YachtCrewRoleForm />;
};

export default YachtCrewRoleCreatePage;