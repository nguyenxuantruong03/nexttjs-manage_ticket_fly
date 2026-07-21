"use client";
import { DataTable } from "@/components/ui/data-table";
import { usersColumns } from "./components/columns";
import { useDeleteUser, useUsers } from "@/hooks/user";
import { useRouter } from "next/navigation";
import { createUserActions } from "./features/actions";
import { createUserHandlers } from "./features/handlers";

const UserPage = () => {
  const deleteMutation = useDeleteUser();
  const { data = [], isPending, error } = useUsers();
  const router = useRouter();

  const handlers = createUserHandlers({
    router,
    deleteMutation,
  });

  const actions = createUserActions({
    onView: handlers.view,
    onEdit: handlers.edit,
    onDelete: handlers.delete,
  });
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi!</div>;
  }

  return <DataTable columns={usersColumns(actions)} data={data} />;
};

export default UserPage;
