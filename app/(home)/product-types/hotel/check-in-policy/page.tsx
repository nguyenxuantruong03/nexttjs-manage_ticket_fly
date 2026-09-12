"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table/data-table";
import { hotelCheckInPolicyColumns } from "./components/columns";
import {
  useDeleteHotelCheckInPolicy,
  useHotelCheckInPolicies,
} from "@/hooks/product-types/hotel/hotel-check-in-policy";
import { createHotelCheckInPolicyHandlers } from "./features/handlers";
import { createHotelCheckInPolicyActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const CheckInPolicyPage = () => {
  const deleteMutation = useDeleteHotelCheckInPolicy();
  const { data, isPending, error } = useHotelCheckInPolicies();
  const router = useRouter();

  const handlers = createHotelCheckInPolicyHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createHotelCheckInPolicyActions,
    deleteTitle: "Delete check-in policy",
    deleteDescription: "Are you sure you want to delete this check-in policy?",
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
        columns={hotelCheckInPolicyColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default CheckInPolicyPage;
