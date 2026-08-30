"use client";

import { useParams } from "next/navigation";
import BrandForm from "../../components/BrandForm";
import { useHotelBrandUpdateFormData } from "@/hooks/product-types/hotel/hotel-brand/useHotelBrandUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function BrandEditPage() {
  const params = useParams();

  const brandId = params.brandId as string;

  const { data, isLoading, isError, errors, refetch } =
    useHotelBrandUpdateFormData(brandId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.brand?.message ??
          "Không tải được dữ liệu thương hiệu, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <BrandForm initialData={data.initialData} />;
}