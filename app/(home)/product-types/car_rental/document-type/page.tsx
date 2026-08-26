"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table";

import { createCarRentalDocumentTypeHandlers } from "./features/handlers";

import { createCarRentalDocumentTypeActions } from "./features/actions";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useCarRentalDocumentTypes,
  useDeleteCarRentalDocumentType,
} from "@/hooks/product-types/car-rental/document-type";

import { carRentalDocumentTypeColumns } from "./components/columns";

const CarRentalDocumentTypePage = () => {
  const deleteMutation = useDeleteCarRentalDocumentType();

  const { data, isPending, error } = useCarRentalDocumentTypes();

  const router = useRouter();

  const handlers = createCarRentalDocumentTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCarRentalDocumentTypeActions,
    deleteTitle: "Delete car rental document type",
    deleteDescription:
      "Are you sure you want to delete this car rental document type?",
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
        columns={carRentalDocumentTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default CarRentalDocumentTypePage;