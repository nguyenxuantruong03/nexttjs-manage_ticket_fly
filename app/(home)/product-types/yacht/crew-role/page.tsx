"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";

import { createYachtCrewRoleHandlers } from "./features/handlers";
import { createYachtCrewRoleActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";
import {
  useYachtCrewRoles,
  useDeleteYachtCrewRole,
} from "@/hooks/product-types/yacht/crew-role";
import { yachtCrewRoleColumns } from "./components/columns";

const YachtCrewRolePage = () => {
  const deleteMutation = useDeleteYachtCrewRole();
  const { data, isPending, error } = useYachtCrewRoles();
  const router = useRouter();

  const handlers = createYachtCrewRoleHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createYachtCrewRoleActions,
    deleteTitle: "Delete yacht crew role",
    deleteDescription:
      "Are you sure you want to delete this yacht crew role?",
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
        columns={yachtCrewRoleColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default YachtCrewRolePage;