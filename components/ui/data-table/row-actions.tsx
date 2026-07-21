"use client";

import { ActionMenu, ActionMenuItem } from "./action-menu";

interface Props<T> {
  row: T;

  actions: (row: T) => ActionMenuItem<T>[];
}

export function RowActions<T>({ row, actions }: Props<T>) {
  return <ActionMenu row={row} actions={actions(row)} />;
}
