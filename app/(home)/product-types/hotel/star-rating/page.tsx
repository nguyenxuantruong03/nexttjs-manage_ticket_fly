"use client";

import { useRouter } from "next/navigation";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import { DataTable } from "@/components/ui/data-table";
import { starRatingColumns } from "./components/columns";
import {
  useDeleteHotelStarRating,
  useHotelStarRatings,
} from "@/hooks/product-types/hotel/hotel-star-rating";
import { createStarRatingHandlers } from "./features/handlers";
import { createStarRatingActions } from "./features/actions";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const StarRatingPage = () => {
  const deleteMutation = useDeleteHotelStarRating();
  const { data, isPending, error } = useHotelStarRatings();
  const router = useRouter();

  const handlers = createStarRatingHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createStarRatingActions,
    deleteTitle: "Delete starrating",
    deleteDescription: "Are you sure you want to delete this starrating?",
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
        columns={starRatingColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default StarRatingPage;
