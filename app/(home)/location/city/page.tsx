"use client";

import { DataTable } from "@/components/ui/data-table";
import { useCountries } from "@/hooks/location/country";
import { cityColumns } from "./components/columns";
import { useCities, useDeleteCity } from "@/hooks/location/city";
import { useRouter } from "next/navigation";
import { createCityHandlers } from "./features/handlers";
import { createCityActions } from "./features/actions";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const CityPage = () => {
  const deleteMutation = useDeleteCity();
  const { data, isPending, error } = useCities();
  const router = useRouter();

  const handlers = createCityHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCityActions,
    deleteTitle: "Delete city",
    deleteDescription: "Are you sure you want to delete this city?",
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
        columns={cityColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default CityPage;
