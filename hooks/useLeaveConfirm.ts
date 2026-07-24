"use client";

import { useState } from "react";

export function useLeaveConfirm(isDirty: boolean) {
  const [open, setOpen] = useState(false);

  const [confirmAction, setConfirmAction] = useState<(() => void) | null>(null);

  const requestLeave = (action: () => void) => {
    if (!isDirty) {
      action();

      return;
    }

    setConfirmAction(() => action);

    setOpen(true);
  };

  const confirm = () => {
    setOpen(false);

    confirmAction?.();

    setConfirmAction(null);
  };

  const cancel = () => {
    setOpen(false);

    setConfirmAction(null);
  };

  return {
    open,
    requestLeave,
    confirm,
    cancel,
  };
}
