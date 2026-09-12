// features/provider-booking/provider-booking-columns.tsx

"use client";

import type { ColumnDef } from "@tanstack/react-table";

import {
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  Star,
  XCircle,
} from "lucide-react";

import {
  createDataTableColumn,
  createSelectionColumn,
} from "@/components/ui/data-table";

import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

import { ProviderBooking } from "@/types/users/provider-bookings";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

const STATUS_STYLES: Record<string, string> = {
  ACTIVE: "border-emerald-200 bg-emerald-50 text-emerald-700",
  INACTIVE: "border-zinc-200 bg-zinc-50 text-zinc-500",
};

const STATUS_LABEL: Record<string, string> = {
  ACTIVE: "Đang hoạt động",
  INACTIVE: "Ngừng hoạt động",
};

export function providerBookingColumns(
  actions: (row: ProviderBooking) => ActionMenuItem<ProviderBooking>[],
): ColumnDef<ProviderBooking>[] {
  return [
    createSelectionColumn<ProviderBooking>(),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "officialName",
      header: "Tên chính thức",
      cell: (row) => <div className="font-medium">{row.officialName}</div>,
      meta: { align: "left" },
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "displayName",
      header: "Tên hiển thị",
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "shortName",
      header: "Tên viết tắt",
      exclude: ["sorting", "filtering"],
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "registrationNumber",
      header: "Số đăng ký",
      exclude: ["filtering"],
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "taxCode",
      header: "Mã số thuế",
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "employeeCount",
      header: "Nhân viên",
      meta: {
        align: "right",
        filterVariant: "number",
        filterLabel: "Nhân viên",
      },
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "email",
      header: "Email",
      cell: (row) =>
        row.email ? (
          <a
            href={`mailto:${row.email}`}
            data-table-interactive
            className="inline-flex items-center gap-1.5 text-sm hover:underline"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />

            <span className="truncate">{row.email}</span>
          </a>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "phone",
      header: "Điện thoại",
      cell: (row) =>
        row.phone ? (
          <a
            href={`tel:${row.phone}`}
            data-table-interactive
            className="inline-flex items-center gap-1.5 text-sm hover:underline"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />

            {row.phone}
          </a>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "website",
      header: "Website",
      exclude: ["filtering", "sorting"],
      cell: (row) =>
        row.website ? (
          <a
            href={row.website}
            target="_blank"
            rel="noreferrer"
            data-table-interactive
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <span className="max-w-[160px] truncate">
              {row.website.replace(/^https?:\/\//, "")}
            </span>

            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
          </a>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "averageRating",
      header: "Đánh giá",
      meta: {
        align: "right",
        filterVariant: "number",
        filterLabel: "Đánh giá",
      },
      cell: (row) =>
        row.averageRating ? (
          <div className="flex items-center justify-end gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />

            <span className="tabular-nums">{row.averageRating.toFixed(1)}</span>
          </div>
        ) : (
          <span className="block text-right text-muted-foreground">—</span>
        ),
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "totalBookings",
      header: "Lượt đặt",
      meta: {
        align: "right",
        filterVariant: "number",
        filterLabel: "Lượt đặt",
      },
      cell: (row) => (
        <span className="block text-right tabular-nums">
          {row.totalBookings.toLocaleString("vi-VN")}
        </span>
      ),
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "verified",
      header: "Xác minh",
      meta: {
        align: "center",
        filterVariant: "boolean",
        filterLabel: "Xác minh",
      },
      cell: (row) => (
        <div className="flex justify-center">
          {row.verified ? (
            <span className="inline-flex items-center gap-1.5 text-sm text-emerald-600">
              <CheckCircle2 className="h-4 w-4" />
              Đã xác minh
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <XCircle className="h-4 w-4" />
              Chưa xác minh
            </span>
          )}
        </div>
      ),
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "status",
      header: "Trạng thái",
      meta: {
        filterVariant: "select",
        filterLabel: "Trạng thái",
        filterOptions: [
          { label: "Đang hoạt động", value: "ACTIVE" },
          { label: "Ngừng hoạt động", value: "INACTIVE" },
        ],
      },
      cell: (row) => (
        <Badge
          variant="outline"
          className={cn("font-normal", STATUS_STYLES[row.status])}
        >
          {STATUS_LABEL[row.status] ?? row.status}
        </Badge>
      ),
    }),

    createDataTableColumn<ProviderBooking>({
      accessorKey: "createdAt",
      header: "Ngày tạo",
      cell: (row) => (
        <span className="text-muted-foreground">
          {new Date(row.createdAt).toLocaleString("vi-VN", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </span>
      ),
    }),

    {
      id: "actions",
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}
