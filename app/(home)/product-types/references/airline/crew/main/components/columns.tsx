"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { RowActions } from "@/components/ui/data-table/row-actions";
import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";

export function flyCrewColumns(
  actions: (row: FlyCrew) => ActionMenuItem<FlyCrew>[],
): ColumnDef<FlyCrew>[] {
  return [
    // ======================================================
    // BASIC
    // ======================================================

    {
      accessorKey: "id",

      header: "ID",
    },

    {
      accessorKey: "employeeNumber",

      header: "Employee Number",

      cell: ({ row }) => row.original.employeeNumber ?? "-",
    },

    // ======================================================
    // NAME
    // ======================================================

    {
      id: "name",

      header: "Name",

      cell: ({ row }) => `${row.original.firstName} ${row.original.lastName}`,
    },

    {
      accessorKey: "gender",

      header: "Gender",

      cell: ({ row }) => row.original.gender ?? "-",
    },

    {
      accessorKey: "birthDate",

      header: "Birth Date",

      cell: ({ row }) =>
        row.original.birthDate
          ? new Date(row.original.birthDate).toLocaleDateString()
          : "-",
    },

    {
      accessorKey: "nationality",

      header: "Nationality",

      cell: ({ row }) => row.original.nationality ?? "-",
    },

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

    {
      accessorKey: "email",

      header: "Email",

      cell: ({ row }) => row.original.email ?? "-",
    },

    {
      accessorKey: "phone",

      header: "Phone",

      cell: ({ row }) => row.original.phone ?? "-",
    },

    // ======================================================
    // STATUS
    // ======================================================

    {
      accessorKey: "active",

      header: "Active",

      cell: ({ row }) => (row.original.active ? "Yes" : "No"),
    },

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

    {
      accessorKey: "createdAt",

      header: "Created At",

      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },

    {
      accessorKey: "updatedAt",

      header: "Updated At",

      cell: ({ row }) => new Date(row.original.updatedAt).toLocaleString(),
    },

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
