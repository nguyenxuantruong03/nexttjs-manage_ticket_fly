"use client";

import { DataTable } from "@/components/ui/data-table";

import { packageColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createPackageActions } from "./features/actions";

import { createPackageHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeletePackage,
  usePackages,
} from "@/hooks/commerce/package";

const Package = () => {
  const router = useRouter();

  const deleteMutation = useDeletePackage();

  const { data, isPending, error } = usePackages();

  const handlers = createPackageHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createPackageActions,

    deleteTitle: "Delete package",

    deleteDescription: "Are you sure you want to delete this package?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={packageColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default Package;