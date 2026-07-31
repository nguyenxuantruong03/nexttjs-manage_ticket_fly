"use client";

import { useCallback, useState } from "react";

const EXPIRE_TIME = 24 * 60 * 60 * 1000;

export function useConfirmDialogStorage(key: string) {
  const storageKey = `confirm-dialog-${key}`;

  const [shouldShow, setShouldShow] = useState(false);

  const openDialog = useCallback(() => {
    const saved = localStorage.getItem(storageKey);

    if (!saved) {
      setShouldShow(true);
      return;
    }

    const data = JSON.parse(saved);

    const expired = Date.now() - data.timestamp > EXPIRE_TIME;

    if (expired) {
      localStorage.removeItem(storageKey);
      setShouldShow(true);
      return;
    }

    // trong 24h đã chọn cancel
    setShouldShow(false);
  }, [storageKey]);

  // User chọn Cancel
  const cancelDialog = useCallback(() => {
    setShouldShow(false);

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        timestamp: Date.now(),
        hidden: true,
      }),
    );
  }, [storageKey]);

  // User chọn Confirm
  const confirmDialog = useCallback(() => {
    // chỉ đóng dialog
    // KHÔNG ghi localStorage
    setShouldShow(false);
  }, []);

  const resetDialog = useCallback(() => {
    localStorage.removeItem(storageKey);
    setShouldShow(false);
  }, [storageKey]);

  return {
    shouldShow,
    openDialog,
    cancelDialog,
    confirmDialog,
    resetDialog,
  };
}
