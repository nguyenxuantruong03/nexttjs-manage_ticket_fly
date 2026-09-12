"use client";

import { useParams } from "next/navigation";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";
import { useFeatureFlagUpdateFormData } from "@/hooks/commerce/feature-flag/useFeatureFlagUpdateFormData";
import FeatureFlagForm from "../../components/FeatureFlagForm";

export default function FeatureFlagEditPage() {
  const params = useParams();

  const featureFlagId = params.featureFlagId as string;

  const { data, isLoading, isError, errors, refetch } =
    useFeatureFlagUpdateFormData(featureFlagId);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError || !data) {
    return (
      <ErrorPage
        description={
          errors.featureFlag?.message ??
          "Không tải được dữ liệu feature flag, vui lòng thử lại."
        }
        onRetry={refetch}
      />
    );
  }

  return <FeatureFlagForm initialData={data.featureFlagData} />;
}
