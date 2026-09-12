"use client";

import ConfirmDialog from "@/components/common/confirm/confirm-dialog";
import { useConfirmDelete } from "./useConfirmDelete";

export function useConfirmDeleteDialog(
  onDelete: (id: string) => Promise<void>,
  options?: {
    title?: string;
    description?: string;
  },
) {
  const deleteDialog = useConfirmDelete(onDelete);

  const dialog = (
    <ConfirmDialog
      open={deleteDialog.open}
      title={options?.title ?? "Delete item"}
      description={
        options?.description ??
        "Are you sure you want to delete this item? This action cannot be undone."
      }
      cancelText="Cancel"
      confirmText="Delete"
      onCancel={deleteDialog.closeDelete}
      onConfirm={deleteDialog.confirmDelete}
    />
  );

  return {
    ...deleteDialog,
    dialog,
  };
}
