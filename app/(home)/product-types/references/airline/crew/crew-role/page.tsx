"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table";

import { flyCrewRoleColumns } from "./components/columns";

import { createFlyCrewRoleActions } from "./features/actions";

import {
  useDeleteFlyCrewRole,
  useFlyCrewRoles,
} from "@/hooks/product-types/references/airline/crew/crew-role";

import { createFlyCrewRoleHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";

import LoadingPage from "@/components/ui/loading-page";

const FlyCrewRolePage = () => {
  const deleteMutation = useDeleteFlyCrewRole();

  const { data, isPending, error } = useFlyCrewRoles();

  const router = useRouter();

  const handlers = createFlyCrewRoleHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createFlyCrewRoleActions,
    deleteTitle: "Delete fly crew role",
    deleteDescription:
      "Are you sure you want to delete this fly crew role?",
  });

  if (isPending) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={flyCrewRoleColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default FlyCrewRolePage;