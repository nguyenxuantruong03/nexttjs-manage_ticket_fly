"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { diningServiceTypeColumns } from "./components/columns";
import {
  useDeleteHotelDiningServiceType,
  useHotelDiningServiceTypes,
} from "@/hooks/hotel/hotel-dining-service-type";
import { createDiningServiceTypeHandlers } from "./features/handlers";
import { createDiningServiceTypeActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const DiningServiceTypePage = () => {
  const deleteMutation = useDeleteHotelDiningServiceType();
  const { data, isPending, error } = useHotelDiningServiceTypes();
  const router = useRouter();

  const handlers = createDiningServiceTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createDiningServiceTypeActions,
    deleteTitle: "Delete diningServiceType",
    deleteDescription:
      "Are you sure you want to delete this diningServiceType?",
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
        columns={diningServiceTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default DiningServiceTypePage;
