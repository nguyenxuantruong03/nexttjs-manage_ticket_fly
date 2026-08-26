"use client";

import { useFlyCrewRoleCreateFormData } from "@/hooks/product-types/references/airline/crew/crew-role/useFlyCrewRoleCreateFormData";

import FlyCrewRoleForm from "../components/FlyCrewRoleForm";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

const FlyCrewRoleCreatePage = () => {
  const { data, isLoading, error } = useFlyCrewRoleCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyCrewRoleForm />;
};

export default FlyCrewRoleCreatePage;
