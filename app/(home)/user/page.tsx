"use client";
import { DataTable } from "@/components/ui/data-table";
import { usersColumns } from "./components/columns";
import { useDeleteUser, useUsers } from "@/hooks/user";
import { useRouter } from "next/navigation";
import { createUserActions } from "./features/actions";
import { createUserHandlers } from "./features/handlers";
import { useCrudTable } from "@/hooks/crud/useCrudTable";

const UserPage = () => {
  const deleteMutation = useDeleteUser();
  const { data = [], isPending, error } = useUsers();
  const router = useRouter();

  const handlers = createUserHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createUserActions,
    deleteTitle: "Delete user",
    deleteDescription: "Are you sure you want to delete this user?",
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi!</div>;
  }

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={usersColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default UserPage;
