"use client";

import { useParams } from "next/navigation";

import TimezoneForm from "../../components/TimezoneForm";
import { useTimezoneUpdateFormData } from "@/hooks/location/timezone/useTimezoneUpdateFormData";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

export default function TimezoneEditPage() {
  const params = useParams();

  const timezoneId = params.timezoneId as string;

  const { data, isLoading, isError, errors, refetch } =
    useTimezoneUpdateFormData(timezoneId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.timezone?.message ??
          "Không tải được dữ liệu loại múi giờ, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <TimezoneForm initialData={data.initialData} />;
}
