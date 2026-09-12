"use client";

import { DataTable } from "@/components/ui/data-table/data-table";

import { regulationCategoryColumns } from "./components/columns";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { createRegulationCategoryActions } from "./features/actions";

import { createRegulationCategoryHandlers } from "./features/handlers";

import LoadingPage from "@/components/ui/loading-page";

import ErrorPage from "@/components/ui/error-page";

import {
  useDeleteRegulationCategory,
  useRegulationCategories,
} from "@/hooks/commerce/compliance-legal/regulation-category";

const RegulationCategory = () => {
  const router = useRouter();

  const deleteMutation = useDeleteRegulationCategory();

  const { data, isPending, error } = useRegulationCategories();

  const handlers = createRegulationCategoryHandlers({
    router,
    deleteMutation,
  });

  const { actions, deleteDialog } = useCrudTable({
    handlers,

    createActions: createRegulationCategoryActions,

    deleteTitle: "Delete regulation category",

    deleteDescription:
      "Are you sure you want to delete this regulation category?",
  });

  if (isPending) return <LoadingPage />;

  if (error) return <ErrorPage />;

  return (
    <>
      {deleteDialog.dialog}

      <DataTable
        columns={regulationCategoryColumns(actions)}
        data={data}
        onRowClick={({ id }) => handlers.view(id)}
        onRowDoubleClick={({ id }) => handlers.update(id)}
        onRowRightClick={({ id }) => deleteDialog.openDelete(id)}
      />
    </>
  );
};

export default RegulationCategory;
