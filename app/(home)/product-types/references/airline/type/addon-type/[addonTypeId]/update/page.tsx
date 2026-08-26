"use client";

import { useFlyAddonTypeUpdateFormData } from "@/hooks/product-types/references/airline/addon-type/useFlyAddonTypeUpdateFormData";

import { useParams } from "next/navigation";

import FlyAddonTypeForm from "../../components/FlyAddonTypeForm";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function FlyAddonTypeEditPage() {
  const params = useParams();

  const addonTypeId = params.addonTypeId as string;

  const { data, isLoading, error } = useFlyAddonTypeUpdateFormData(addonTypeId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <FlyAddonTypeForm initialData={data.initialData} />;
}
