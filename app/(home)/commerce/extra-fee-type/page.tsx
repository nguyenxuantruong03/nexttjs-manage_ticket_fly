"use client";

import { DataTable } from "@/components/ui/data-table";

import { extraFeeTypeColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createExtraFeeTypeActions } from "./features/actions";

import { createExtraFeeTypeHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteExtraFeeType,
  useExtraFeeTypes,
} from "@/hooks/commerce/extra-fee-type";

const ExtraFeeType = () => {
  const router = useRouter();

  const deleteMutation = useDeleteExtraFeeType();

  const { data, isPending, error } = useExtraFeeTypes();

  const handlers = createExtraFeeTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createExtraFeeTypeActions,

    deleteTitle: "Delete extra fee type",

    deleteDescription: "Are you sure you want to delete this extra fee type?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={extraFeeTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default ExtraFeeType;
