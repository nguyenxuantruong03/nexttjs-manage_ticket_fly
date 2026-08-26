"use client";

import { useRouter } from "next/navigation";

import { useCrudTable } from "@/hooks/crud/useCrudTable";

import { DataTable } from "@/components/ui/data-table";

import { flyCabinClassColumns } from "./components/columns";

import { createFlyCabinClassActions } from "./features/actions";

import {
  useDeleteFlyCabinClass,
  useFlyCabinClasses,
} from "@/hooks/product-types/ticket-fly/cabin-class";

import { createFlyCabinClassHandlers } from "./features/handlers";

import ErrorPage from "@/components/ui/error-page";
import LoadingPage from "@/components/ui/loading-page";


const FlyCabinClassPage = () => {

  const deleteMutation = useDeleteFlyCabinClass();

  const {
    data,
    isPending,
    error,
  } = useFlyCabinClasses();


  const router = useRouter();


  const handlers =
    createFlyCabinClassHandlers({
      router,
      deleteMutation,
    });



  const {
    actions,
    deleteDialog,
  } = useCrudTable({

    handlers,

    createActions:
      createFlyCabinClassActions,


    deleteTitle:
      "Delete fly cabin class",


    deleteDescription:
      "Are you sure you want to delete this fly cabin class?",

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

        columns={
          flyCabinClassColumns(actions)
        }


        data={data}


        onRowClick={({ id }) =>
          handlers.view(id)
        }


        onRowDoubleClick={({ id }) =>
          handlers.update(id)
        }


        onRowRightClick={({ id }) =>
          deleteDialog.openDelete(id)
        }

      />

    </>
  );
};


export default FlyCabinClassPage;