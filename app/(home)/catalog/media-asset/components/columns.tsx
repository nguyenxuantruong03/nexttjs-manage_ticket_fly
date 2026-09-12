"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  createDataTableColumn,
  createSelectionColumn,
  DataTableColumnHeader,
} from "@/components/ui/data-table";
import { RowActions } from "@/components/ui/data-table/row-actions";
import { ActionMenuItem } from "@/components/ui/data-table/action-menu";

import { MediaAsset } from "@/types/common/catalog/media-asset";

import { MediaPreview } from "@/components/common/image/media-preview";

/** Định dạng dung lượng file — dùng chung cho cả hiển thị và xuất file */
function formatFileSize(size?: number | null) {
  if (size == null) return "-";
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  if (size < 1024 * 1024 * 1024)
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  return `${(size / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

export function mediaAssetColumns(
  actions: (row: MediaAsset) => ActionMenuItem<MediaAsset>[],
): ColumnDef<MediaAsset>[] {
  return [
    // ======================================================
    // SELECT
    // ======================================================

    createSelectionColumn<MediaAsset>(),

    // ======================================================
    // ID
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "id",
      header: "ID",
      meta: { align: "right", filterVariant: "number", exportLabel: "ID" },
      summary: { type: "count", label: "Số dòng" },
    }),

    // ======================================================
    // MEDIA (mảng đường dẫn file -> xuất ra thành chuỗi nối bằng dấu phẩy)
    // ======================================================

    {
      accessorKey: "path",
      enableSorting: false,
      enableColumnFilter: false,
      meta: {
        exportLabel: "Media",
        exportValue: (row) => row.path?.join(", ") ?? "",
      },
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Media" />
      ),
      cell: ({ row }) => {
        const paths = row.original.path ?? [];

        if (!paths.length) {
          return "-";
        }

        return (
          <div className="flex flex-wrap gap-2">
            <MediaPreview path={paths} />
          </div>
        );
      },
    },

    // ======================================================
    // THUMBNAIL (mảng đường dẫn -> xuất ra thành chuỗi nối bằng dấu phẩy)
    // ======================================================

    {
      accessorKey: "thumbnailPath",
      enableSorting: false,
      enableColumnFilter: false,
      meta: {
        exportLabel: "Thumbnail",
        exportValue: (row) => row.thumbnailPath?.join(", ") ?? "",
      },
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Thumbnail" />
      ),
      cell: ({ row }) => {
        const thumbnailPaths = row.original.thumbnailPath ?? [];

        if (!thumbnailPaths.length) {
          return "-";
        }

        return (
          <div className="flex flex-wrap gap-2">
            <MediaPreview path={thumbnailPaths} />
          </div>
        );
      },
    },

    // ======================================================
    // FILE COUNT (cột tính toán, không có accessorKey -> BẮT BUỘC cần
    // exportValue, nếu không cột này sẽ bị bỏ qua khi xuất file)
    // ======================================================

    {
      id: "fileCount",
      enableSorting: false,
      enableColumnFilter: false,
      meta: {
        align: "right",
        exportLabel: "Files",
        exportValue: (row) => row.path?.length ?? 0,
        summary: {
          type: "sum",
          value: (row) => row.path?.length ?? 0,
          label: "Tổng file",
        },
      },
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Files" />
      ),
      cell: ({ row }) => {
        const count = row.original.path?.length ?? 0;

        return <span className="block text-right tabular-nums">{count}</span>;
      },
    },

    // ======================================================
    // TYPE
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "type",
      header: "Type",
    }),

    // ======================================================
    // MIME TYPE
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "mimeType",
      header: "MIME Type",
      cell: (row) => row.mimeType ?? "-",
      exportValue: (row) => row.mimeType ?? "",
    }),

    // ======================================================
    // SIZE (hiển thị "12.3 MB" -> xuất file cũng dùng đúng định dạng này
    // thay vì số byte thô, cho khớp với những gì người dùng nhìn thấy)
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "size",
      header: "Size",
      meta: {
        align: "right",
        filterVariant: "number",
        filterLabel: "Size (bytes)",
      },
      cell: (row) => formatFileSize(row.size),
      exportValue: (row) => formatFileSize(row.size),
      summary: {
        type: "sum",
        value: (row) => row.size ?? 0,
        format: (bytes) => formatFileSize(bytes),
        label: "Tổng dung lượng",
      },
    }),

    // ======================================================
    // WIDTH
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "width",
      header: "Width",
      meta: { align: "right", filterVariant: "number" },
      cell: (row) => (row.width != null ? `${row.width}px` : "-"),
      exportValue: (row) => (row.width != null ? `${row.width}px` : ""),
    }),

    // ======================================================
    // HEIGHT
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "height",
      header: "Height",
      meta: { align: "right", filterVariant: "number" },
      cell: (row) => (row.height != null ? `${row.height}px` : "-"),
      exportValue: (row) => (row.height != null ? `${row.height}px` : ""),
    }),

    // ======================================================
    // VIDEO
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "duration",
      header: "Duration",
      meta: { align: "right", filterVariant: "number" },
      cell: (row) => (row.duration != null ? `${row.duration}s` : "-"),
      exportValue: (row) => (row.duration != null ? `${row.duration}s` : ""),
    }),

    // ======================================================
    // ALT
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "alt",
      header: "Alt",
      cell: (row) => row.alt ?? "-",
      exportValue: (row) => row.alt ?? "",
    }),

    // ======================================================
    // CAPTION
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "caption",
      header: "Caption",
      cell: (row) => row.caption ?? "-",
      exportValue: (row) => row.caption ?? "",
    }),

    // ======================================================
    // BOOKING TYPE
    // Đây chính là cột gây lỗi "[object Object]" khi xuất file: giá trị
    // thô là MẢNG CÁC OBJECT ({ id, name }), trước đây bộ xuất file chỉ
    // gọi String(value) trên cả mảng đó. Thêm exportValue để lấy đúng
    // "name" của từng phần tử, nối bằng dấu phẩy — giống hệt cột hiển thị.
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "bookingTypes",
      header: "Booking Types",
      exclude: ["sorting", "filtering"],
      cell: (row) => {
        const bookingTypes = row.bookingTypes;

        if (!bookingTypes?.length) {
          return "-";
        }

        return bookingTypes.map((item) => item.name).join(", ");
      },
      exportValue: (row) =>
        row.bookingTypes?.map((item) => item.name).join(", ") ?? "",
    }),

    // ======================================================
    // CREATED AT
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "createdAt",
      header: "Created At",
      exclude: ["filtering"],
      cell: (row) => new Date(row.createdAt).toLocaleString(),
      exportValue: (row) => new Date(row.createdAt).toLocaleString(),
    }),

    // ======================================================
    // UPDATED AT
    // ======================================================

    createDataTableColumn<MediaAsset>({
      accessorKey: "updatedAt",
      header: "Updated At",
      exclude: ["filtering"],
      cell: (row) => new Date(row.updatedAt).toLocaleString(),
      exportValue: (row) => new Date(row.updatedAt).toLocaleString(),
    }),

    // ======================================================
    // ACTIONS
    // ======================================================

    {
      id: "actions",
      size: 56,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      enablePinning: false,
      enableResizing: false,
      header: "",
      cell: ({ row }) => <RowActions row={row.original} actions={actions} />,
    },
  ];
}