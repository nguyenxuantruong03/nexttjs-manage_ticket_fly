"use client";
import { DataTable } from "@/components/ui/data-table";
import { yachtColumns } from "./components/columns";
import { useDeleteYacht, useYachts } from "@/hooks/yacht";
import { useRouter } from "next/navigation";
import { createYachtHandlers } from "./features/handlers";
import { createYachtActions } from "./features/actions";

const YatchPage = () => {
  const deleteMutation = useDeleteYacht();
  const { data, isPending, error } = useYachts();
  const router = useRouter();

  const handlers = createYachtHandlers({
    router,
    deleteMutation,
  });

  const actions = createYachtActions({
    onView: handlers.view,
    onEdit: handlers.edit,
    onDelete: handlers.delete,
  });
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi.</div>;
  }
  return <DataTable columns={yachtColumns(actions)} data={data} />;
};

export default YatchPage;
