"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";

import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";

export function flyCrewColumns(
  actions: (row: FlyCrew) => ActionMenuItem<FlyCrew>[],
): ColumnDef<FlyCrew>[] {
  return [
    // ======================================================
    // SELECTION
    // ======================================================

    createSelectionColumn<FlyCrew>(),

    // ======================================================
    // BASIC
    // ======================================================

    createDataTableColumn<FlyCrew>({
      accessorKey: "id",
      header: "ID",
    }),

    createDataTableColumn<FlyCrew>({
      accessorKey: "employeeNumber",
      header: "Employee Number",
      cell: (row) => row.employeeNumber ?? "-",
    }),

    // ======================================================
    // NAME
    // ======================================================

    {
      id: "name",
      header: "Name",
      cell: ({ row }) => `${row.original.firstName} ${row.original.lastName}`,
    },

    createDataTableColumn<FlyCrew>({
      accessorKey: "gender",
      header: "Gender",
      cell: (row) => row.gender ?? "-",
    }),

    createDataTableColumn<FlyCrew>({
      accessorKey: "birthDate",
      header: "Birth Date",
      cell: (row) =>
        row.birthDate ? new Date(row.birthDate).toLocaleDateString() : "-",
    }),

    createDataTableColumn<FlyCrew>({
      accessorKey: "nationality",
      header: "Nationality",
      cell: (row) => row.nationality ?? "-",
    }),

    // ======================================================
    // AIRLINE
    // ======================================================

    {
      id: "airline",
      header: "Airline",
      cell: ({ row }) => row.original.airline?.name ?? "-",
    },

    // ======================================================
    // CREW ROLE
    // ======================================================

    {
      id: "role",
      header: "Role",
      cell: ({ row }) => row.original.role?.name ?? "-",
    },

    // ======================================================
    // CONTACT
    // ======================================================

    createDataTableColumn<FlyCrew>({
      accessorKey: "email",
      header: "Email",
      cell: (row) => row.email ?? "-",
    }),

    createDataTableColumn<FlyCrew>({
      accessorKey: "phone",
      header: "Phone",
      cell: (row) => row.phone ?? "-",
    }),

    // ======================================================
    // STATUS
    // ======================================================

    createDataTableColumn<FlyCrew>({
      accessorKey: "active",
      header: "Active",
      cell: (row) => (row.active ? "Yes" : "No"),
    }),

    // ======================================================
    // RELATIONS
    // ======================================================

    {
      id: "qualifications",
      header: "Qualifications",
      cell: ({ row }) => row.original.qualifications?.length ?? 0,
    },

    {
      id: "assignments",
      header: "Assignments",
      cell: ({ row }) => row.original.assignments?.length ?? 0,
    },

    {
      id: "crewSchedule",
      header: "Schedules",
      cell: ({ row }) => row.original.crewSchedule?.length ?? 0,
    },

    // ======================================================
    // TIMESTAMP
    // ======================================================

    createDataTableColumn<FlyCrew>({
      accessorKey: "createdAt",
      header: "Created At",
      cell: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    createDataTableColumn<FlyCrew>({
      accessorKey: "updatedAt",
      header: "Updated At",
      cell: (row) => new Date(row.updatedAt).toLocaleString(),
    }),

    // ======================================================
    // ACTIONS
    // ======================================================

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
