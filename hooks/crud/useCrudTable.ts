"use client";

import { useConfirmDeleteDialog } from "@/hooks/delete-dialog/useConfirmDeleteDialog";

interface CrudHandlers {
  view: (id: string) => void;
  update: (id: string) => void;
  delete: (id: string) => Promise<void>;
}

interface Props<TActions> {
  handlers: CrudHandlers;

  createActions: (props: {
    onView: (id: string) => void;
    onUpdate: (id: string) => void;
    onDelete: (id: string) => void;
  }) => TActions;

  deleteTitle?: string;
  deleteDescription?: string;
}

export function useCrudTable<TActions>({
  handlers,
  createActions,
  deleteTitle,
  deleteDescription,
}: Props<TActions>) {
  const deleteDialog = useConfirmDeleteDialog(handlers.delete, {
    title: deleteTitle,
    description: deleteDescription,
  });

  const actions = createActions({
    onView: handlers.view,
    onUpdate: handlers.update,
    onDelete: deleteDialog.openDelete,
  });

  return {
    actions,
    deleteDialog,
  };
}
