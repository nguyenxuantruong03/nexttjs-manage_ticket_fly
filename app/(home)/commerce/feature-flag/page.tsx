"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { featureFlagColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createFeatureFlagActions } from "./features/actions";

import { createFeatureFlagHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteFeatureFlag,
  useFeatureFlags,
} from "@/hooks/commerce/feature-flag";

const FeatureFlag = () => {
  const router = useRouter();

  const deleteMutation = useDeleteFeatureFlag();

  const { data, isPending, error } = useFeatureFlags();

  const handlers = createFeatureFlagHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFeatureFlagActions,
    deleteTitle: "Delete feature flag",
    deleteDescription: "Are you sure you want to delete this feature flag?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={featureFlagColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FeatureFlag;
