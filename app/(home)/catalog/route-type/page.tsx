"use client";

import { DataTable } from "@/components/ui/data-table";

import { routeTypeColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createRouteTypeActions } from "./features/actions";

import { createRouteTypeHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import { useDeleteRouteType, useRouteTypes } from "@/hooks/catalog/route-type";

const RouteType = () => {
  const router = useRouter();

  const deleteMutation = useDeleteRouteType();

  const { data, isPending, error } = useRouteTypes();

  const handlers = createRouteTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createRouteTypeActions,
    deleteTitle: "Delete route type",
    deleteDescription: "Are you sure you want to delete this route type?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={routeTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default RouteType;
