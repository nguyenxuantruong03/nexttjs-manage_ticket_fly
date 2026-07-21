"use client";
import { DataTable } from "@/components/ui/data-table";
import { hotelColumns } from "./components/columns";
import { useDeleteHotel, useHotels } from "@/hooks/hotel";
import { useRouter } from "next/navigation";
import { createHotelHandlers } from "./features/handlers";
import { createHotelActions } from "./features/actions";

const hotelPage = () => {
  const deleteMutation = useDeleteHotel();
  const { data, isPending, error } = useHotels();
  const router = useRouter();

  const handlers = createHotelHandlers({
    router,
    deleteMutation,
  });

  const actions = createHotelActions({
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
  return <DataTable columns={hotelColumns(actions)} data={data} />;
};

export default hotelPage;
