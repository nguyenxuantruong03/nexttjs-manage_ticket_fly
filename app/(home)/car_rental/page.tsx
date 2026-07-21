"use client";
import { DataTable } from "@/components/ui/data-table";
import { carRentalColumns } from "./components/columns";
import { useCarRentals, useDeleteCarRental } from "@/hooks/car-rental";
import { useRouter } from "next/navigation";
import { createCarRentalActions } from "./features/actions";
import { createCarrentalHandlers } from "./features/handlers";

const CarrentalPage = () => {
  const deleteMutation = useDeleteCarRental()
  const { data, isPending, error } = useCarRentals();
  const router = useRouter();

  const handlers = createCarrentalHandlers({
    router,
    deleteMutation,
  });

  const actions = createCarRentalActions({
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
  return <DataTable columns={carRentalColumns(actions)} data={data} />;
};

export default CarrentalPage;
