"use client";


import { useHotelTypeCreateFormData } from "@/hooks/hotel/hotel-type/useHotelTypeCreateFormData";
import TypeForm from "../components/HotelTypeForm";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const TypeCreatePage = () => {
  const { data, isLoading, error } = useHotelTypeCreateFormData();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return <TypeForm />;
};

export default TypeCreatePage;
