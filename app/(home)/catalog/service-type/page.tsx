"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { serviceTypeColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createServiceTypeActions } from "./features/actions";

import { createServiceTypeHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteServiceType,
  useServiceTypes,
} from "@/hooks/catalog/service-type";

const ServiceType = () => {
  const router = useRouter();

  const deleteMutation = useDeleteServiceType();

  const { data, isPending, error } = useServiceTypes();

  const handlers = createServiceTypeHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createServiceTypeActions,
    deleteTitle: "Delete service type",
    deleteDescription: "Are you sure you want to delete this service type?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={serviceTypeColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default ServiceType;
