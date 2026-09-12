"use client";

import { useParams } from "next/navigation";

import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import SystemSettingForm from "../../components/SystemSettingForm.tsx";
import { useSystemSettingUpdateFormData } from "@/hooks/system/system-setting/useSystemSettingUpdateFormData";

export default function SystemSettingEditPage() {
  const params = useParams();

  const systemSettingId = params.systemSettingId as string;

  const { data, isLoading, isError, errors, refetch } =
    useSystemSettingUpdateFormData(systemSettingId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.systemSetting?.message ??
          "Không tải được dữ liệu System Setting, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <SystemSettingForm initialData={data.initialData} />;
}
