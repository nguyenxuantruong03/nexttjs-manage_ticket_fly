"use client";

import { useEffect, useMemo } from "react";
import { DefaultValues, FieldValues, UseFormReturn } from "react-hook-form";

import { deleteDraft, getDraft, saveDraft } from "@/utils/form-draft";

interface UseFormDraftOptions<T extends FieldValues> {
  form: UseFormReturn<T>;
  entity: string;
  draftId: string;
  enabled?: boolean;
  delay?: number;
}

type Debounced<T extends (...args: any[]) => void> = ((
  ...args: Parameters<T>
) => void) & {
  cancel: () => void;
};

function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): Debounced<T> {
  let timer: ReturnType<typeof setTimeout>;

  const debounced = ((...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }) as Debounced<T>;

  debounced.cancel = () => clearTimeout(timer);

  return debounced;
}

export function useFormDraft<T extends FieldValues>({
  form,
  entity,
  draftId,
  enabled = true,
  delay = 1000,
}: UseFormDraftOptions<T>) {
  /**
   * Restore draft
   */
  useEffect(() => {
    if (!enabled) return;

    const draft = getDraft<T>(entity, draftId);

    if (!draft) return;

    form.reset(draft.values as DefaultValues<T>);
  }, [enabled, entity, draftId, form]);

  /**
   * Debounced save
   */
  const save = useMemo(
    () =>
      debounce((values: T) => {
        saveDraft(entity, draftId, values);
      }, delay),
    [entity, draftId, delay],
  );

  /**
   * Watch form
   */
  useEffect(() => {
    if (!enabled) return;

    const subscription = form.watch((values) => {
      if (!form.formState.isDirty) return;

      save(values as T);
    });

    return () => {
      subscription.unsubscribe();
      save.cancel();
    };
  }, [enabled, form, save]);

  /**
   * Save immediately
   */
  const persistDraft = () => {
    save.cancel();

    saveDraft(entity, draftId, form.getValues());
  };

  /**
   * Remove draft
   */
  const clearDraft = () => {
    save.cancel();

    deleteDraft(entity, draftId);
  };

  /**
   * Get current draft
   */
  const currentDraft = () => {
    return getDraft<T>(entity, draftId);
  };

  return {
    persistDraft,
    clearDraft,
    currentDraft,
  };
}
