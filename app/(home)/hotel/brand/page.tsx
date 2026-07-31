"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { hotelBrandColumns } from "./components/columns";
import { useDeleteHotelBrand, useHotelBrands } from "@/hooks/hotel/hotel-brand";
import { createBrandHandlers } from "./features/handlers";
import { createBrandActions } from "./features/actions";
import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";

const BrandPage = () => {
  const deleteMutation = useDeleteHotelBrand();
  const { data, isPending, error } = useHotelBrands();
  const router = useRouter();

  const handlers = createBrandHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createBrandActions,
    deleteTitle: "Delete hotel brand",
    deleteDescription: "Are you sure you want to delete this hotel brand?",
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
        columns={hotelBrandColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default BrandPage;
