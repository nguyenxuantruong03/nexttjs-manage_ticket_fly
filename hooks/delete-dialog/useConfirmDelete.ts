"use client";

import { useState } from "react";

export function useConfirmDelete(onDelete: (id: string) => Promise<void>) {
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openDelete = (id: string) => {
    setDeleteId(id);
  };

  const closeDelete = () => {
    setDeleteId(null);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    await onDelete(deleteId);

    closeDelete();
  };

  return {
    deleteId,

    openDelete,
    closeDelete,
    confirmDelete,

    open: Boolean(deleteId),
  };
}
