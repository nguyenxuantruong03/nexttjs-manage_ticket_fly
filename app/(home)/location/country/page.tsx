"use client";

import { DataTable } from "@/components/ui/data-table/data-table";
import { useCountries, useDeleteCountry } from "@/hooks/location/country";
import { countryColumns } from "./components/columns";
import { useRouter } from "next/navigation";
import { createCountryHandlers } from "./features/handlers";
import { createCountryActions } from "./features/actions";
import { useCrudTable } from "@/hooks/crud/useCrudTable";
import LoadingPage from "@/components/ui/loading-page";
import ErrorPage from "@/components/ui/error-page";

const CountryPage = () => {
  const deleteMutation = useDeleteCountry();
  const { data, isPending, error } = useCountries();
  const router = useRouter();

  const handlers = createCountryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,
    createActions: createCountryActions,
    deleteTitle: "Delete Country",
    deleteDescription: "Are you sure you want to delete this Country?",
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
        columns={countryColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default CountryPage;
