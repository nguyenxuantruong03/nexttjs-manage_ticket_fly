import type { ColumnDef } from "@tanstack/react-table";

import type { ExportFormat } from "./data-table-types";

/* ------------------------------------------------------------------ */
/* 0. Theme dùng chung cho Excel / Word / PDF — đổi màu ở đây là style */
/*    của mọi định dạng xuất file đều đổi theo.                        */
/* ------------------------------------------------------------------ */

const THEME = {
  font: "Arial, Helvetica, sans-serif",
  primary: "#1d4ed8", // xanh dương đậm — màu tiêu đề / header bảng
  primaryRgb: [29, 78, 216] as [number, number, number],
  headerText: "#ffffff",
  titleText: "#0f172a",
  subtitleText: "#64748b",
  zebra: "#f8fafc",
  zebraRgb: [248, 250, 252] as [number, number, number],
  border: "#e2e8f0",
};

/* ------------------------------------------------------------------ */
/* 1. Chuẩn hoá MỌI giá trị thô thành chuỗi hiển thị an toàn           */
/*    -> đây là chỗ sửa lỗi "[object Object]" khi xuất file            */
/* ------------------------------------------------------------------ */

/** Các field hay dùng để làm "nhãn" khi giá trị là object, ví dụ {id,name} */
const LABEL_KEYS = ["name", "label", "title", "value", "code", "email"];

function labelOfObject(obj: Record<string, unknown>): string {
  for (const key of LABEL_KEYS) {
    const v = obj[key];
    if (typeof v === "string" || typeof v === "number") return String(v);
  }
  try {
    return JSON.stringify(obj);
  } catch {
    return "";
  }
}

/**
 * Chuyển bất kỳ giá trị nào (string, number, boolean, null, Date, mảng,
 * object, mảng object...) thành 1 chuỗi hiển thị được, dùng chung cho
 * CSV / Excel / Word / PDF. Không bao giờ trả về "[object Object]".
 */
export function stringifyExportValue(value: unknown): string {
  if (value === null || value === undefined) return "";

  if (value instanceof Date) {
    return isNaN(value.getTime()) ? "" : value.toLocaleString();
  }

  if (typeof value === "boolean") return value ? "Có" : "Không";

  if (typeof value === "number" || typeof value === "string") {
    return String(value);
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return "";
    return value
      .map((item) => {
        if (item === null || item === undefined) return "";
        if (typeof item === "object")
          return labelOfObject(item as Record<string, unknown>);
        return String(item);
      })
      .filter(Boolean)
      .join(", ");
  }

  if (typeof value === "object") {
    return labelOfObject(value as Record<string, unknown>);
  }

  return String(value);
}

/** Nhãn cột khi xuất file: luôn viết thường, không tự viết hoa (vd "ID" -> "id") */
function toHeaderLabel(label: string): string {
  return label.trim().toLowerCase();
}

/* ------------------------------------------------------------------ */
/* 2. Xác định danh sách cột xuất được + giá trị "sạch" của từng ô     */
/* ------------------------------------------------------------------ */

export type ExportableColumn<TData> = ColumnDef<TData, any> & {
  accessorKey?: string;
  id?: string;
};

export function getExportableColumns<TData>(
  columns: ColumnDef<TData, any>[],
  columnVisibility: Record<string, boolean>,
): ExportableColumn<TData>[] {
  return (columns as ExportableColumn<TData>[]).filter((c) => {
    if (c.id === "select" || c.id === "actions") return false;

    const key = c.accessorKey ?? c.id;
    if (!key) return false;

    // Cột tính toán (không có accessorKey) chỉ xuất được nếu có exportValue
    if (!c.accessorKey && !c.meta?.exportValue) return false;

    if (columnVisibility[key] === false) return false;

    return true;
  });
}

export function getColumnLabel<TData>(column: ExportableColumn<TData>): string {
  const raw = column.meta?.exportLabel ?? column.accessorKey ?? column.id ?? "";
  return toHeaderLabel(String(raw));
}

/** Lấy giá trị "sạch" (chưa ép chuỗi) của 1 ô, ưu tiên exportValue nếu có */
export function getRawExportValue<TData>(
  row: TData,
  column: ExportableColumn<TData>,
): unknown {
  if (column.meta?.exportValue) {
    return column.meta.exportValue(row);
  }
  if (column.accessorKey) {
    return (row as any)[column.accessorKey];
  }
  return undefined;
}

/** Ma trận [headers, ...rows] toàn chuỗi — dùng cho CSV / Excel / Word / PDF */
export function buildExportMatrix<TData>(
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  columnVisibility: Record<string, boolean>,
): { headers: string[]; body: string[][] } {
  const exportable = getExportableColumns(columns, columnVisibility);
  const headers = exportable.map(getColumnLabel);
  const body = rows.map((row) =>
    exportable.map((c) => stringifyExportValue(getRawExportValue(row, c))),
  );
  return { headers, body };
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function withExt(filename: string, ext: string) {
  return filename.toLowerCase().endsWith(`.${ext}`)
    ? filename
    : `${filename}.${ext}`;
}

function stripExt(filename: string) {
  return filename.replace(/\.[^./\\]+$/, "");
}

/* ------------------------------------------------------------------ */
/* 3. CSV — định dạng thuần văn bản, không thể tô màu, chỉ chuẩn hoá   */
/*    header về chữ thường và escape đúng chuẩn RFC 4180.              */
/* ------------------------------------------------------------------ */

export function exportRowsToCsv<TData>(
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  filename = "export.csv",
  columnVisibility: Record<string, boolean> = {},
) {
  const { headers, body } = buildExportMatrix(columns, rows, columnVisibility);

  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;

  const lines = [
    headers.map(escape).join(","),
    ...body.map((r) => r.map(escape).join(",")),
  ];

  const csv = lines.join("\r\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  downloadBlob(blob, withExt(filename, "csv"));
}

/* ------------------------------------------------------------------ */
/* 4. JSON — giữ nguyên cấu trúc dữ liệu gốc, key viết thường          */
/* ------------------------------------------------------------------ */

export function exportRowsToJson<TData>(
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  filename = "export.json",
  columnVisibility: Record<string, boolean> = {},
) {
  const exportable = getExportableColumns(columns, columnVisibility);

  const data = rows.map((row) => {
    const record: Record<string, unknown> = {};
    exportable.forEach((c) => {
      const label = getColumnLabel(c);
      record[label] = getRawExportValue(row, c) ?? null;
    });
    return record;
  });

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json;charset=utf-8;",
  });
  downloadBlob(blob, withExt(filename, "json"));
}

/* ------------------------------------------------------------------ */
/* 5. Khối HTML "đẹp" dùng chung cho Excel / Word / PDF (in)           */
/*    - tiêu đề báo cáo, dòng phụ đề (thời gian xuất + số dòng)        */
/*    - header bảng có màu nền, chữ trắng, in đậm                     */
/*    - các dòng xen kẽ màu (zebra stripe) để dễ đọc                  */
/* ------------------------------------------------------------------ */

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildStyledHtmlDocument(
  headers: string[],
  body: string[][],
  title: string,
  chartImageDataUrl?: string,
) {
  const generatedAt = new Date().toLocaleString("vi-VN");

  const theadCells = headers
    .map(
      (h) =>
        `<th style="background:${THEME.primary};color:${THEME.headerText};font-weight:bold;text-align:left;padding:10px 12px;border:1px solid ${THEME.primary};">${escapeHtml(h)}</th>`,
    )
    .join("");

  const tbodyRows = body
    .map((r, i) => {
      const bg = i % 2 === 0 ? "#ffffff" : THEME.zebra;
      const cells = r
        .map(
          (cell) =>
            `<td style="padding:8px 12px;border:1px solid ${THEME.border};color:#1e293b;">${escapeHtml(cell)}</td>`,
        )
        .join("");
      return `<tr style="background:${bg};">${cells}</tr>`;
    })
    .join("");

  return `
    <div style="font-family:${THEME.font};">
      <div style="font-size:18px;font-weight:bold;color:${THEME.titleText};margin-bottom:2px;">
        ${escapeHtml(title)}
      </div>
      <div style="font-size:12px;color:${THEME.subtitleText};margin-bottom:14px;">
        Xuất lúc ${escapeHtml(generatedAt)} · ${body.length} dòng
      </div>
      ${
        chartImageDataUrl
          ? `<div style="margin-bottom:18px;padding:12px;border:1px solid ${THEME.border};border-radius:8px;background:#ffffff;">
               <img src="${chartImageDataUrl}" style="max-width:100%;height:auto;display:block;margin:0 auto;" />
             </div>`
          : ""
      }
      <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-size:13px;">
        <thead><tr>${theadCells}</tr></thead>
        <tbody>${tbodyRows}</tbody>
      </table>
    </div>
  `;
}

/* ------------------------------------------------------------------ */
/* 6. Excel (.xls) — HTML table có style, Excel đọc trực tiếp được     */
/* ------------------------------------------------------------------ */

export function exportRowsToExcel<TData>(
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  filename = "export.xls",
  columnVisibility: Record<string, boolean> = {},
  title = "Danh sách dữ liệu",
) {
  const { headers, body } = buildExportMatrix(columns, rows, columnVisibility);
  const content = buildStyledHtmlDocument(headers, body, title);

  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8" />
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>${escapeHtml(stripExt(filename)).slice(0, 31)}</x:Name>
                <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
      </head>
      <body>${content}</body>
    </html>
  `;

  const blob = new Blob(["\uFEFF" + html], {
    type: "application/vnd.ms-excel;charset=utf-8;",
  });
  downloadBlob(blob, withExt(filename, "xls"));
}

/* ------------------------------------------------------------------ */
/* 7. Word (.doc) — HTML có style, mở trực tiếp bằng Microsoft Word    */
/* ------------------------------------------------------------------ */

export function exportRowsToWord<TData>(
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  filename = "export.doc",
  columnVisibility: Record<string, boolean> = {},
  title = "Danh sách dữ liệu",
) {
  const { headers, body } = buildExportMatrix(columns, rows, columnVisibility);
  const content = buildStyledHtmlDocument(headers, body, title);

  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8" />
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page { size: A4 landscape; margin: 1.5cm; }
          body { font-family: ${THEME.font}; }
        </style>
      </head>
      <body>${content}</body>
    </html>
  `;

  const blob = new Blob(["\uFEFF" + html], {
    type: "application/msword;charset=utf-8;",
  });
  downloadBlob(blob, withExt(filename, "doc"));
}

/* ------------------------------------------------------------------ */
/* 8. PDF                                                              */
/*    - Nếu project đã cài "jspdf" + "jspdf-autotable": xuất file .pdf */
/*      trực tiếp, có màu header, kẻ sọc xen kẽ, footer số trang.      */
/*    - Nếu chưa cài: mở cửa sổ in với bảng đã style sẵn (đồng bộ với  */
/*      Excel/Word), người dùng chọn "Save as PDF" trong hộp thoại in. */
/* ------------------------------------------------------------------ */

function exportRowsToPdfViaPrint(
  headers: string[],
  body: string[][],
  title: string,
  chartImageDataUrl?: string,
) {
  const content = buildStyledHtmlDocument(
    headers,
    body,
    title,
    chartImageDataUrl,
  );
  const win = window.open("", "_blank", "width=1100,height=750");
  if (!win) return;

  win.document.write(`
    <html>
      <head>
        <title>${escapeHtml(title)}</title>
        <meta charset="utf-8" />
        <style>
          body { padding: 28px; margin: 0; }
          @media print {
            @page { size: A4 landscape; margin: 12mm; }
          }
        </style>
      </head>
      <body>
        ${content}
        <script>
          window.onload = function () {
            window.print();
          };
        </script>
      </body>
    </html>
  `);
  win.document.close();
}

export async function exportRowsToPdf<TData>(
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  filename = "export.pdf",
  columnVisibility: Record<string, boolean> = {},
  title = "Danh sách dữ liệu",
) {
  const { headers, body } = buildExportMatrix(columns, rows, columnVisibility);

  try {
    // Dynamic import kèm biến chuỗi để bundler không báo lỗi "module not
    // found" khi 2 gói này chưa được cài trong project.
    const jspdfMod = "jspdf";
    const autotableMod = "jspdf-autotable";
    const { jsPDF } = await import(/* webpackIgnore: true */ jspdfMod);
    await import(/* webpackIgnore: true */ autotableMod);

    const doc = new jsPDF({ orientation: "landscape" });
    const generatedAt = new Date().toLocaleString("vi-VN");
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    doc.text(title, 14, 15);

    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Xuất lúc ${generatedAt} · ${body.length} dòng`, 14, 21);

    (doc as any).autoTable({
      head: [headers],
      body,
      startY: 26,
      styles: { fontSize: 8, cellPadding: 3, textColor: [30, 41, 59] },
      headStyles: {
        fillColor: THEME.primaryRgb,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: THEME.zebraRgb },
      didDrawPage: () => {
        const pageCount = (doc as any).internal.getNumberOfPages();
        const current = (doc as any).internal.getCurrentPageInfo().pageNumber;
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184);
        doc.text(
          `Trang ${current}/${pageCount}`,
          pageWidth - 28,
          doc.internal.pageSize.getHeight() - 8,
        );
      },
    });

    doc.save(withExt(filename, "pdf"));
    return;
  } catch {
    // Chưa cài "jspdf" / "jspdf-autotable" -> dùng phương án dự phòng
    // (npm install jspdf jspdf-autotable để xuất file .pdf trực tiếp,
    // đẹp và không cần qua hộp thoại in)
    exportRowsToPdfViaPrint(headers, body, title);
  }
}

/* ------------------------------------------------------------------ */
/* 9. Hàm gộp — gọi 1 chỗ duy nhất theo định dạng người dùng chọn      */
/* ------------------------------------------------------------------ */

export function exportRows<TData>(
  format: ExportFormat,
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  filenameBase: string,
  columnVisibility: Record<string, boolean> = {},
  title = "Danh sách dữ liệu",
) {
  const base = stripExt(filenameBase);

  switch (format) {
    case "csv":
      return exportRowsToCsv(columns, rows, `${base}.csv`, columnVisibility);
    case "xlsx":
      return exportRowsToExcel(
        columns,
        rows,
        `${base}.xls`,
        columnVisibility,
        title,
      );
    case "doc":
      return exportRowsToWord(
        columns,
        rows,
        `${base}.doc`,
        columnVisibility,
        title,
      );
    case "json":
      return exportRowsToJson(columns, rows, `${base}.json`, columnVisibility);
    case "pdf":
      return exportRowsToPdf(
        columns,
        rows,
        `${base}.pdf`,
        columnVisibility,
        title,
      );
  }
}

/* ------------------------------------------------------------------ */
/* 10. Biểu đồ (Chart) — xuất kèm dữ liệu bảng (Word) hoặc riêng ảnh   */
/*     PNG. Dùng chung THEME + buildStyledHtmlDocument ở trên để đồng  */
/*     bộ giao diện với các định dạng xuất file khác.                  */
/* ------------------------------------------------------------------ */

/** Tải trực tiếp 1 chuỗi data URL (vd ảnh PNG của biểu đồ) thành file */
export function downloadDataUrl(dataUrl: string, filename: string) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

/**
 * Xuất file Word (.doc) gồm ảnh biểu đồ (PNG, dạng data URL) ở trên và
 * bảng dữ liệu (đúng các cột đang được chọn để vẽ biểu đồ) ở dưới —
 * dùng khi người dùng chọn "Xuất dữ liệu + biểu đồ".
 */
export function exportChartWithData<TData>(
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  chartImageDataUrl: string,
  filename = "export-chart.doc",
  columnVisibility: Record<string, boolean> = {},
  title = "Danh sách dữ liệu",
) {
  const { headers, body } = buildExportMatrix(columns, rows, columnVisibility);
  const content = buildStyledHtmlDocument(
    headers,
    body,
    title,
    chartImageDataUrl,
  );

  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8" />
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page { size: A4 landscape; margin: 1.5cm; }
          body { font-family: ${THEME.font}; }
        </style>
      </head>
      <body>${content}</body>
    </html>
  `;

  const blob = new Blob(["\uFEFF" + html], {
    type: "application/msword;charset=utf-8;",
  });
  downloadBlob(blob, withExt(filename, "doc"));
}

/**
 * Xuất file PDF gồm ảnh biểu đồ (PNG, dạng data URL) ở trên và bảng dữ
 * liệu ở dưới — dùng chung logic dynamic-import "jspdf"/"jspdf-autotable"
 * như exportRowsToPdf; nếu 2 gói này chưa được cài, rơi về phương án in
 * (chart image vẫn được nhúng vào trang in) để người dùng chọn "Save as
 * PDF" trong hộp thoại in của trình duyệt.
 */
export async function exportChartWithDataPdf<TData>(
  columns: ColumnDef<TData, any>[],
  rows: TData[],
  chartImageDataUrl: string,
  filename = "export-chart.pdf",
  columnVisibility: Record<string, boolean> = {},
  title = "Danh sách dữ liệu",
) {
  const { headers, body } = buildExportMatrix(columns, rows, columnVisibility);

  try {
    const jspdfMod = "jspdf";
    const autotableMod = "jspdf-autotable";
    const { jsPDF } = await import(/* webpackIgnore: true */ jspdfMod);
    await import(/* webpackIgnore: true */ autotableMod);

    const doc = new jsPDF({ orientation: "landscape" });
    const generatedAt = new Date().toLocaleString("vi-VN");
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 14;

    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    doc.text(title, margin, 15);

    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Xuất lúc ${generatedAt} · ${body.length} dòng`, margin, 21);

    // Chèn ảnh biểu đồ, giữ tỉ lệ, canh giữa theo chiều ngang trang
    const imgProps = (doc as any).getImageProperties(chartImageDataUrl);
    const maxImgWidth = pageWidth - margin * 2;
    const maxImgHeight = 100;
    const scale = Math.min(
      maxImgWidth / imgProps.width,
      maxImgHeight / imgProps.height,
      1,
    );
    const imgWidth = imgProps.width * scale;
    const imgHeight = imgProps.height * scale;
    const imgX = (pageWidth - imgWidth) / 2;
    doc.addImage(chartImageDataUrl, "PNG", imgX, 26, imgWidth, imgHeight);

    (doc as any).autoTable({
      head: [headers],
      body,
      startY: 26 + imgHeight + 8,
      styles: { fontSize: 8, cellPadding: 3, textColor: [30, 41, 59] },
      headStyles: {
        fillColor: THEME.primaryRgb,
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: THEME.zebraRgb },
      didDrawPage: () => {
        const pageCount = (doc as any).internal.getNumberOfPages();
        const current = (doc as any).internal.getCurrentPageInfo().pageNumber;
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184);
        doc.text(
          `Trang ${current}/${pageCount}`,
          pageWidth - 28,
          doc.internal.pageSize.getHeight() - 8,
        );
      },
    });

    doc.save(withExt(filename, "pdf"));
    return;
  } catch {
    // Chưa cài "jspdf" / "jspdf-autotable" -> dùng phương án dự phòng
    exportRowsToPdfViaPrint(headers, body, title, chartImageDataUrl);
  }
}
